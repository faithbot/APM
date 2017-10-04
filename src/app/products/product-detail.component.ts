import { Component, OnInit } from '@angular/core';

import { IProduct } from './product';

@Component({
	// use this if needed to nest in another component
  // selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
	
	pageTitle: string = 'Product Detail';

  constructor() { }

  ngOnInit() {
  }

}
