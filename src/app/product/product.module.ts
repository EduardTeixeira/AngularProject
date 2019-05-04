import { ProductComponent } from './product.component';
import { ProductService } from './product.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  entryComponents: [],
  declarations: [ProductComponent],
  providers: [ProductService]
})
export class ProductModule { }
