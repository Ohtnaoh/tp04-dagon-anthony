import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountClientComponent } from './account-client.component';
import { RouterModule, Routes, RoutesRecognized } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component:AccountClientComponent
  }
];


@NgModule({
  declarations: [AccountClientComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AccountClientModule { 

}
