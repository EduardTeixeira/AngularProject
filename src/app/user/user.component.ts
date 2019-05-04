import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ModalDirective } from 'ngx-bootstrap';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { UserService } from './user.service';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @BlockUI() blockUI: NgBlockUI;
  @ViewChild('modalCreate') public modalCreate: ModalDirective;

  public entityUser: User[] = [];

  constructor(
    public snackBar: MatSnackBar,
    public dialog: MatDialog,
    public _service: UserService) {

  }

  ngOnInit() {

  }

  public getUser() {

  }

  public saveUser() {

  }

  public deleteUser() {

  }

  public openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 4000,
    });
  }

}
