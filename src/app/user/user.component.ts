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
    public dialog: MatDialog,
    public snackBar: MatSnackBar,
    public _service: UserService) {

  }

  ngOnInit() {

  }

  public search() {

    this.blockUI.start('Carregando...');

    this._service.getUser().subscribe(
      (data: any[]) => {
        if (data) {
          this.entityUser = data;
        } else {
          this.entityUser = [];
        }
        this.blockUI.stop();
      }
    );

  }

  public saveUser(item) {

    this.blockUI.start('Carregando...');

    this._service.saveUser(item).subscribe(
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

  public deleteUser(item) {

    this.blockUI.start('Carregando...');

    this._service.deleteUser(item.id).subscribe(
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
