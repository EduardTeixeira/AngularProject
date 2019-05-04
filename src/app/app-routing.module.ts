import { UserComponent } from './user/user.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];

export const AppRoutes: Routes = [
  {
  path: '',
  component: UserComponent,
  //canActivate: [PublicGuard],
  /*
  children: [{
    path: 'login',
    loadChildren: './session/session.module#SessionModule'
  }*/
  }];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }
