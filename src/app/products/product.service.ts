import { Injectable } from '@angular/core';
import { IProduct } from './product';

// @Injectable not required but reccommended for consistency
@Injectable()
export class ProductService {
    
    getProducts(): IProduct[] {
        return;
    }
    
}