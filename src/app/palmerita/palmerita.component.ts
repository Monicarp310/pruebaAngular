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

}
