import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatSidenavModule
} from '@angular/material';


const modules = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatCheckboxModule,
  MatSidenavModule,
  MatCardModule,
];

@NgModule({
  imports: [...modules],
  exports: [...modules],
})
export class MaterialModule {

}
