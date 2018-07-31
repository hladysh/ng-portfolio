import {NgModule} from '@angular/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {LoaderComponent} from '../components/loader/loader.component';
import {RouterModule} from '@angular/router';



const modules = [
  CommonModule,
  RouterModule,
  FormsModule,
  ReactiveFormsModule,
];

@NgModule({
  declarations: [
    // LoaderComponent
  ],
  imports: [...modules],
  exports: [...modules],
})
export class SharedModule {

}
