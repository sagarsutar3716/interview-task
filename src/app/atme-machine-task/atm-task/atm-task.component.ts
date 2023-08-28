import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { AtmService } from 'src/app/_service/atm.service';

@Component({
  selector: 'app-atm-task',
  templateUrl: './atm-task.component.html',
  styleUrls: ['./atm-task.component.less']
})
export class AtmTaskComponent implements OnDestroy {
  atmForm!: FormGroup;
  withdrawForm!: FormGroup;
  depositedAmounts: { [key: string]: number } = {};
  totalAmount!: number;
  private totalAmountSubscription: Subscription | undefined;

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    public atmService: AtmService
  ) {}

  ngOnInit() {
    this.atmForm = this.fb.group({
      denomination2000: [0, [Validators.min(0)]],
      denomination500: [0, [Validators.min(0)]],
      denomination200: [0, [Validators.min(0)]],
      denomination100: [0, [Validators.min(0)]]
    });

    this.withdrawForm = this.fb.group({
      withdrawAmount: [0, [Validators.min(1), Validators.max(this.totalAmount)]]
    });

    this.totalAmountSubscription = this.atmService.totalAmount$.subscribe(updatedTotal => {
      this.totalAmount = updatedTotal;
    });
  }

  ngOnDestroy() {
    // Unsubscribe from the subscription to avoid memory leaks
    if (this.totalAmountSubscription) {
      this.totalAmountSubscription.unsubscribe();
    }
  }

  get f() {
    return this.atmForm.controls;
  }

  get w() {
    return this.withdrawForm.controls;
  }

  calculateTotal() {
    const value = this.atmForm.value;
    const totalAmount =
      value.denomination2000 * 2000 +
      value.denomination500 * 500 +
      value.denomination200 * 200 +
      value.denomination100 * 100;

      if (totalAmount === 0) {
        const message = `Cannot Deposit ` +  new Date().toString();
        this.showSnackBar(message, 'error');
        return;
      }

    this.atmService.updateTotalAmount(totalAmount);
    // console.log(this.totalAmount,"after withdraw")

    // Update deposited amounts using the service
    this.atmService.updateDepositedAmount('denomination2000', value.denomination2000);
    this.atmService.updateDepositedAmount('denomination500', value.denomination500);
    this.atmService.updateDepositedAmount('denomination200', value.denomination200);
    this.atmService.updateDepositedAmount('denomination100', value.denomination100);

    const message = `Deposit 2000:${value.denomination2000} ` +
      `500:${value.denomination500} ` +
      `200:${value.denomination200} ` +
      `100:${value.denomination100}\n` +
      new Date().toString();
    this.showSnackBar(message,'success');
    this.resetAtmForm();
  }

  resetAtmForm(): void {
    this.atmForm.controls['denomination2000'].setValue(0);
    this.atmForm.controls['denomination500'].setValue(0);
    this.atmForm.controls['denomination200'].setValue(0);
    this.atmForm.controls['denomination100'].setValue(0);
  }

  withdrawAmount() {
    const withdrawValue = this.withdrawForm.value.withdrawAmount;

    if (withdrawValue <= 0 || withdrawValue > this.totalAmount) {
      this.showSnackBar('Invalid Withdraw Amount', 'error');
      return;
    }

    const total = this.totalAmount - withdrawValue
    // console.log(total,"this.totalAmount - withdrawValue")

    this.atmService.updateTotalAmount(withdrawValue, true);

    this.totalAmount = total;


    const message = `Withdraw Amount: ${withdrawValue}\n` + new Date().toString();
    this.showSnackBar(message, 'success');
    this.resetWithdrawForm();
  }

  resetWithdrawForm(): void {
    this.withdrawForm.reset();
  }

  showSnackBar(message: string, type: 'success' | 'warning' | 'error', customClass?: string) {
    this.snackBar.open(message, "close", {
      panelClass: [type]
    });
  }
}
