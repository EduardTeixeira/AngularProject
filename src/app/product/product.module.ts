import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ProductService } from './product.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modal Component
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import {
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatSelectModule,
  MatIconModule,
  MatDialogModule,
  MatListModule,
  MatProgressBarModule,
  MatMenuModule,
  MatTableModule,
  MatAutocompleteModule,
  MatInputModule,
  MatTabsModule,
  MatDatepickerModule,
  MatRadioModule,
  MatFormField,
  MatFormFieldModule,
  MatToolbarModule,
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutes } from '../app-routing.module';

@NgModule({
  imports: [
    ProductRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule,
    MatButtonModule,
    MatDatepickerModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatIconModule,
    MatDialogModule,
    MatListModule,
    MatProgressBarModule,
    MatMenuModule,
    MatTableModule,
    MatTabsModule,
    MatRadioModule,
    MatFormField,
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    MatToolbarModule,
    RouterModule.forChild(AppRoutes),
  ],
  entryComponents: [],
  declarations: [ProductComponent],
  providers: [ProductService]
})
export class ProductModule { }
