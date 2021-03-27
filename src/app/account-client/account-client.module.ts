import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountClientComponent } from './account-client.component';
import { RouterModule, Routes, RoutesRecognized } from '@angular/router';
import { ResultformComponent } from './resultform/resultform.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path:'',
    component:AccountClientComponent
  }
];


@NgModule({
  declarations: [AccountClientComponent, ResultformComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes), 
    FormsModule
  ]
})
export class AccountClientModule { 

}
