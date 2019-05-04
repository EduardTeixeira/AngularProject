import { UserRoutingModule } from './user-routing.module';
import { UserService } from './user.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap';

// Modal Component
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

/*
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { NgxMaskModule } from 'ngx-mask'
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { FlexLayoutModule } from '@angular/flex-layout';
*/

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
  MatRadioModule
} from '@angular/material';

@NgModule({
  imports: [
    UserRoutingModule,
    CommonModule,
    /*
FlexLayoutModule,
ChartsModule,
CurrencyMaskModule,
NgxMaskModule.forRoot()
    */
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule,
    MatButtonModule,
    MatDatepickerModule,
    MatButtonToggleModule,
    MatCardModule,
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
    MatInputModule,
    MatRadioModule,
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
  ],
  entryComponents: [],
  declarations: [UserComponent],
  providers: [UserService]
})
export class UserModule { }
