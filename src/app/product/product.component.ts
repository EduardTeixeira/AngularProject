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

  public search() {

    this.blockUI.start('Carregando...');

    this._service.getProduct().subscribe(
      (data: any[]) => {
        if (data) {
          this.entityProduct = data;
        } else {
          this.entityProduct = [];
        }
        this.blockUI.stop();
      }
    );

  }

  public saveProduct(item) {

    this.blockUI.start('Carregando...');

    this._service.saveProduct(item).subscribe(
      data => {
        this.search()
        this.openSnackBar('Ação aplicada com sucesso.', 'Sucesso');
        this.blockUI.stop();
      },
      error => {
        this.openSnackBar('Não conseguimos aplicar a ação desejada. Estamos trabalhando pra resolver o problema.', 'Erro');
        this.blockUI.stop();
      });

  }

  public deleteProduct(item) {

    this.blockUI.start('Carregando...');

    this._service.deleteProduct(item.id).subscribe(
      data => {
        this.search()
        this.openSnackBar('Ação aplicada com sucesso.', 'Sucesso');
        this.blockUI.stop();
      },
      error => {
        this.openSnackBar('Não conseguimos aplicar a ação desejada. Estamos trabalhando pra resolver o problema.', 'Erro');
        this.blockUI.stop();
      });

  }

  public openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 4000,
    });
  }

}
