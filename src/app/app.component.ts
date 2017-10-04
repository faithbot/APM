import { Component } from '@angular/core';
import { ProductService } from 'app/products/product.service';

@Component({
	// used as a new html tag
  selector: 'pm-root',
	template: `
		<div>
			<nav class="navbar navbar-default">
				<div class="container-fluid">
					<a class="navbar-brand">{{ pageTitle }}</a>
					<ul class="nav navbar-nav">
						<li><a>Home</a></li>
						<li><a>Product List</a></li>
					</ul>
				</div>
			</nav>
		</div>
	`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
	providers: [ ProductService ]
})

export class AppComponent {
  title = 'Products List';
}
