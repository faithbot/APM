// import external modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

/* Routing. */
import { RouterModule } from '@angular/router';

// import all components
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from "./shared/star.component";
import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';


@NgModule({
  declarations: [
		// list of components
    AppComponent,
		ProductListComponent,
		ConvertToSpacesPipe,
		StarComponent,
		ProductDetailComponent,
		WelcomeComponent
  ],
	// list of imported modules (from angular)
  imports: [
    BrowserModule,
		FormsModule,
		HttpClientModule,
		/* Routing. 
		path: 'url', component: ComponentName 
		order from most specific to least specific
		*/
		RouterModule.forRoot([
			{ path: 'products', component: ProductListComponent },
			{ path: 'products/:id', component: ProductDetailComponent },
			{ path: 'welcome', component: ProductListComponent },
			/* default path on opening app */
			{ path: '', redirectTo: 'welcome', pathMatch: 'full' },
			/* page if no other page can be found (usually a 404 page) */
			{ path: '**', redirectTo: 'welcome', pathMatch: 'full' }
		])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
