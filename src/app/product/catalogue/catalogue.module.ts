import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogueComponent } from './catalogue.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes, RoutesRecognized } from '@angular/router';
import { DetailComponent } from '../detail/detail.component';

const routes: Routes = [
  {
    path:'poissons',
    component:CatalogueComponent
  },
  {
    path:'poissons/detail/:ref',
    component:DetailComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CatalogueModule { }
