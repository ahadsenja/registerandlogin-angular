import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertComponent } from './components/alert/alert.component';
import { HomeComponent } from './components/home/home.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserAddEditComponent } from './users/user-add-edit/user-add-edit.component';
import { UserLayoutComponent } from './users/user-layout/user-layout.component';
import { AccountLayoutComponent } from './account/account-layout/account-layout.component';
import { AccountLoginComponent } from './account/account-login/account-login.component';
import { AccountRegisterComponent } from './account/account-register/account-register.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    UserListComponent,
    UserAddEditComponent,
    UserLayoutComponent,
    AccountLayoutComponent,
    AccountLoginComponent,
    AccountRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
