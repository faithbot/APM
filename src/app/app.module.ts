// import external modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// import all components
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from "./shared/star.component";


@NgModule({
  declarations: [
		// list of components
    AppComponent,
		ProductListComponent,
		ConvertToSpacesPipe,
		StarComponent
  ],
	// list of imported modules (from angular)
  imports: [
    BrowserModule,
		FormsModule,
		HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
