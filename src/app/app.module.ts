import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { NgxsModule } from '@ngxs/store';
import { PanierState } from '../shared/states/panier-state';
import { CatalogueComponent } from './product/catalogue/catalogue.component';
import { DetailComponent } from './product/detail/detail.component';
import { FilterComponent } from './product/filter/filter.component'
import { FormsModule } from '@angular/forms';
import { ApiHttpInterceptor } from './api-http.interceptor';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    HeaderComponent,
    CatalogueComponent,
    DetailComponent,
    FilterComponent,
    LoginComponent,
    SignupComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxsModule.forRoot ([PanierState])
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ApiHttpInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
