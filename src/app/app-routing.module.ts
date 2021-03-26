import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';

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
    path:'account',
    loadChildren: () => import('./account-client/account-client.module').then(m => m.AccountClientModule) 
  },
  {
    path:'catalogue',
    loadChildren: () => import('./product/catalogue/catalogue.module').then(m => m.CatalogueModule) 
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
