import { ProductService } from './product.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ModalDirective } from 'ngx-bootstrap';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Product } from './product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @BlockUI() blockUI: NgBlockUI;
  @ViewChild('modalCreate') public modalCreate: ModalDirective;

  public entityProduct: Product[] = [];

  constructor(
    public snackBar: MatSnackBar,
    public dialog: MatDialog,
    public _service: ProductService) {

  }

  ngOnInit() {

  }

  public getProduct(){

  }

  public saveProduct(){

  }

  public deleteProduct(){

  }

  public openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 4000,
    });
  }

}
