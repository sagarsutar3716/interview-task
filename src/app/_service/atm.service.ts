
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AtmService {
  private totalAmountSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  totalAmount$: Observable<number> = this.totalAmountSubject.asObservable();

  private depositedAmounts: { [key: string]: BehaviorSubject<number> } = {
    denomination2000: new BehaviorSubject<number>(0),
    denomination500: new BehaviorSubject<number>(0),
    denomination200: new BehaviorSubject<number>(0),
    denomination100: new BehaviorSubject<number>(0)
  };

  updateTotalAmount(amount: number, isWithdrawal: boolean = false): void {
    const currentValue = this.totalAmountSubject.value;
    const updatedValue = isWithdrawal ? currentValue - amount : currentValue + amount;
    this.totalAmountSubject.next(updatedValue);
  }

updateDepositedAmount(denomination: string, amount: number): void {
  if (this.depositedAmounts[denomination]) {
    const currentValue = this.depositedAmounts[denomination].value;
    const updatedValue = Math.max(currentValue + amount, 0);
    this.depositedAmounts[denomination].next(updatedValue);
  }
}

  getDepositedAmount(denomination: string): Observable<number> {
    return this.depositedAmounts[denomination].asObservable();
  }
}
