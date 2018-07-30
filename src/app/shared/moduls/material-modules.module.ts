import {NgModule} from '@angular/core';
import {MatCheckboxModule, MatFormFieldModule, MatSidenavModule} from '@angular/material';


@NgModule({
  imports: [
    MatSidenavModule,
    MatCheckboxModule,
    MatFormFieldModule,
  ],
  exports: [
    MatSidenavModule,
    MatCheckboxModule,
    MatFormFieldModule
  ],
  declarations: []
})
export class MaterialModulesModule {
}
