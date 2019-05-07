import { ProviderComponent } from './provider.component';
import { ProviderService } from './provider.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog, MatTableDataSource, MatSnackBar } from '@angular/material';
import { BlockUI, NgBlockUI } from "ng-block-ui";
import * as moment from 'moment-timezone';
moment.tz.setDefault('America/Sao_Paulo');

@Component({
    selector: 'provider-dialog',
    templateUrl: 'provider-dialog.html',
})
export class ProviderDialog implements OnInit {

    @BlockUI() blockUI: NgBlockUI;

    public entity;

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: ProviderDialog,
        public dialog: MatDialog,
        public _service: ProviderService,
        public dialogRef: MatDialogRef<ProviderDialog>,
        public snackBar: MatSnackBar) {

        this.entity = data.entity;

    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    ngOnInit(): void {
        this.blockUI.start('Carregando...');
        this.blockUI.stop();
    }

    public saveProvider(item) {

        this.blockUI.start('Carregando...');

        this._service.saveProvider(item).subscribe(
            data => {
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