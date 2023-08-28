
export class Products {
  status!: string;
  items!: ProductList[];
}

export class ProductList {
  itemName!: string;
  itemPrice!: number;
  itemBarcode!: any;
  url!: string;
}
