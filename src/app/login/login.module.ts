import { UserService } from './../user/user.service';
import { UserComponent } from './../user/user.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  MatToolbarModule,
} from '@angular/material';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { RouterModule } from '@angular/router';
import { AppRoutes } from '../app-routing.module';

@NgModule({
  imports: [
    LoginRoutingModule,
    MatFormField,
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
    MatToolbarModule,
    ModalModule.forRoot(),
    TooltipModule.forRoot(),
    RouterModule.forChild(AppRoutes),
  ],
  entryComponents: [],
  declarations: [LoginComponent],
  providers: [UserService]
})
export class LoginModule { }
