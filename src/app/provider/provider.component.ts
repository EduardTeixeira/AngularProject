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

  public search() {

    this.blockUI.start('Carregando...');

    this._service.getProvider().subscribe(
      (data: any[]) => {
        if (data) {
          this.entityProvider = data;
        } else {
          this.entityProvider = [];
        }
        this.blockUI.stop();
      }
    );

  }

  public saveProvider(item) {

    this.blockUI.start('Carregando...');

    this._service.saveProvider(item).subscribe(
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

  public deleteProvider(item) {

    this.blockUI.start('Carregando...');

    this._service.deleteProvider(item.id).subscribe(
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
