import { UserService } from './user.service';
import { UserRoutingModule } from './user-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap';

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
} from '@angular/material';

@NgModule({
  imports: [
    UserRoutingModule,
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
  ],
  entryComponents: [],
  declarations: [UserComponent],
  providers: [UserService]
})
export class UserModule { }
