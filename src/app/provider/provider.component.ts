import { ProviderService } from './provider.service';
import { Provider } from './provider.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ModalDirective } from 'ngx-bootstrap';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.css']
})
export class ProviderComponent implements OnInit {

  @BlockUI() blockUI: NgBlockUI;
  @ViewChild('modalCreate') public modalCreate: ModalDirective;

  public entityProvider: Provider[] = [];

  constructor(
    public snackBar: MatSnackBar,
    public dialog: MatDialog,
    public _service: ProviderService) {

  }

  ngOnInit() {

  }

  public getProvider() {

  }

  public saveProvider() {

  }

  public deleteProvider() {

  }

  public openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 4000,
    });
  }

}
