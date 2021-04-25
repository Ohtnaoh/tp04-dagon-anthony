import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'account',
    loadChildren: () => import('./account-client/account-client.module').then(m => m.AccountClientModule) 
  },
  {
    path:'catalogue',
    loadChildren: () => import('./product/catalogue/catalogue.module').then(m => m.CatalogueModule) 
  },
  {
    path:'panier',
    loadChildren: () => import('./panier/panier.module').then(m => m.PanierModule) 
  },
  {
    path:'**',
    component:ErrorComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
