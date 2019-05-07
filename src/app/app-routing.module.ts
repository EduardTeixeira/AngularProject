import { ProductComponent } from './product/product.component';
import { ProviderComponent } from './provider/provider.component';
import { UserComponent } from './user/user.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'provider', component: ProviderComponent },
  { path: 'product', component: ProductComponent },
];

export const AppRoutes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'provider', component: ProviderComponent },
  { path: 'product', component: ProductComponent },
  { path: 'layout', component: LayoutComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo:'/login', pathMatch: 'full' },
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(AppRoutes)
  ]
})
export class AppRoutingModule { }
