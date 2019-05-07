import { UserService } from './../user/user.service';
import { User } from './../user/user.model';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @BlockUI() blockUI: NgBlockUI;

  public entityLogin = <User>{};
  public router: Router;

  constructor(
    public snackBar: MatSnackBar,
    public _service: UserService,
    router: Router) {

    this.router = router;

  }

  ngOnInit() {

  }

  public login() {

    this.blockUI.start('Carregando...');

    this._service.login(this.entityLogin.username, this.entityLogin.password)
      .subscribe(
        (data: User) => {
          if (data.id > 0) {
            this.router.navigateByUrl('/provider');
          } else {
            console.log("Permaneça na tela de login");
          }
          this.blockUI.stop();
        }
      );

  }

  public openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 4000,
    });
  }

}
