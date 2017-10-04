// list of angular components component, lifecycle hooks
import { Component, OnInit, OnChanges } from "@angular/core";

// custom product type definition
import { IProduct } from "./product";

import { ProductService } from "app/products/product.service";


@Component({
	// selector: "pm-products",
	templateUrl: './product-list.component.html',
	styleUrls: ["./product-list.component.css"]
})

export class ProductListComponent implements OnInit {
	// properties
	pageTitle: string = "Product List";
	imageWidth: number = 50;
	imageMargin: number = 2;
	showImage: boolean = false;
	errorMessage: string;
	
	// get and set list filter value as user input
	_listFilter: string;
	get listFilter(): string {
		return this._listFilter;
	}
	set listFilter(value: string) {
		this._listFilter = value;
		// set as all products, or filter products
		this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
	}
	
	// create new array for filtered products
	filteredProducts: IProduct[];
	
	products: IProduct[] = [];


	// set defaults for filtering
	constructor(private _productService: ProductService) {

	}
    
    // rating clicked event
    onRatingClicked(message: string): void {
        // pass message from onclick star rating into page title
        this.pageTitle = 'Product List: ' + message;
    }

	// list sorting function
	performFilter(filterBy: string): IProduct[] {
		// change filter to lowercase
		filterBy = filterBy.toLocaleLowerCase();
		
		// return filtered list of products
		return this.products.filter(
			(product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1
		);
	}

	// methods (put after properties are defined)
	// typescript doesn't require function keyword
	toggleImage(): void {
		this.showImage = !this.showImage;
	}
	
	// subscribe to observable products
	ngOnInit(): void {
		this._productService.getProducts()
			.subscribe(
				products => {
					this.products = products;
					this.filteredProducts = this.products;
				},
				error => this.errorMessage = <any>error
			);
	}
}