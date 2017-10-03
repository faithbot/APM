import { Component } from '@angular/core';
import { ProductService } from 'app/products/product.service';

@Component({
	// used as a new html tag
  selector: 'pm-root',
	template: `
	
	`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
	providers: [ ProductService ]
})

export class AppComponent {
  title = 'Acme Products';
}
