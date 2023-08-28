import { Component } from '@angular/core';
import { Products } from 'src/app/_modals/apiResp';
import { Task1Service } from 'src/app/_service/task1.service';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.less']
})
export class Task1Component {
  products!: Products;
  isLoading = true;
  constructor(private restApi: Task1Service) {}

  ngOnInit() {
    this.loadProducts();
  }

    // Get products list
    loadProducts() {
      this.isLoading = true;
      this.restApi.getProducts().subscribe((res: Products) => {
        // console.log(res.items,"res");
        this.products = res;
        this.isLoading = false;
      });

      (error:any) => {
        this.isLoading = false;
      }
    }
}
