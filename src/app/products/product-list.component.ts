// list of angular components component, lifecycle hooks
import { Component, OnInit, OnChanges } from "@angular/core";

// custom product type definition
import { IProduct } from "./product";


@Component({
	selector: "pm-products",
	templateUrl: './product-list.component.html',
	styleUrls: ["./product-list.component.css"]
})

export class ProductListComponent implements OnInit {
	// properties
	pageTitle: string = "Product List";
	imageWidth: number = 50;
	imageMargin: number = 2;
	showImage: boolean = false;
	
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
	
	products: IProduct[] = [
		    {
        "productId": 1,
        "productName": "Leaf Rake",
        "productCode": "GDN-0011",
        "releaseDate": "March 19, 2016",
        "description": "Leaf rake with 48-inch wooden handle.",
        "price": 19.95,
        "starRating": 3.2,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    },
    {
        "productId": 2,
        "productName": "Garden Cart",
        "productCode": "GDN-0023",
        "releaseDate": "March 18, 2016",
        "description": "15 gallon capacity rolling garden cart",
        "price": 32.99,
        "starRating": 4.2,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
    },
    {
        "productId": 5,
        "productName": "Hammer",
        "productCode": "TBX-0048",
        "releaseDate": "May 21, 2016",
        "description": "Curved claw steel hammer",
        "price": 8.9,
        "starRating": 4.8,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
    },
    {
        "productId": 8,
        "productName": "Saw",
        "productCode": "TBX-0022",
        "releaseDate": "May 15, 2016",
        "description": "15-inch steel blade hand saw",
        "price": 11.55,
        "starRating": 3.7,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
    }
	];


	// set defaults for filtering
	constructor() {
		this.filteredProducts = this.products;
		this.listFilter = 'cart';
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
	
	// must use OnInit once, each import must be used or cause an error
	ngOnInit(): void {
		console.log("In OnInit");
	}
}