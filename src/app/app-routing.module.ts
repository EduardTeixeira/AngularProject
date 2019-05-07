import { ProductComponent } from './product/product.component';
import { ProviderComponent } from './provider/provider.component';
import { UserComponent } from './user/user.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [];

/*
export const AppRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'provider',
    component: ProviderComponent
  },
  {
    path: 'product',
    component: ProductComponent
  }
];
*/

export const AppRoutes: Routes = [{
  path: '',
  redirectTo: 'login',
  pathMatch: 'full',
}, {
  path: '',
  children: [{
    path: 'user',
    component: UserComponent
  }, {
    path: 'product',
    component: ProductComponent
  }, {
    path: 'provider',
    component: ProviderComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
