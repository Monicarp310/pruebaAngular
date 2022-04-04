import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-palmerita',
  templateUrl: './palmerita.component.html',
  styleUrls: ['./palmerita.component.scss']
})
export class PalmeritaComponent implements OnInit {

  @Input("product") product!: Product;

  units: number = 0;

  constructor(
  ) {
  }

  ngOnInit(): void {
  }


  getUnits(): number {
    return !!this.product ? this.shoppingCartService.getUnitsOfProduct(this.product) : 1
  }

  getPrice(): string {
    return (!!this.product && !Number.isNaN(this.product?.price)) ?
      this.priceService.getPrice(this.product.price) :
      "-";
  }

  addToShoppingCart() {
    this.shoppingCartService.addProduct(this.product);
    this.units = this.shoppingCartService.getUnitsOfProduct(this.product);

  }

  deleteFromShoppingCart() {
    this.shoppingCartService.deleteProduct(this.product);
    this.units = this.shoppingCartService.getUnitsOfProduct(this.product);
  }

}
