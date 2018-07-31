import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthComponent} from './auth.component';
import {LoginComponent} from './login/login.component';
import {MaterialModule} from '../shared/moduls/material.module';
import {AuthService} from './auth.service';
import {SharedModule} from '../shared/moduls/shared.module';


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    // FormsModule,
    // ReactiveFormsModule,
    MaterialModule,
    SharedModule,
  ],
  providers: [AuthService],
})
export class AuthModule {
}
