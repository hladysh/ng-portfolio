import {NgModule} from '@angular/core';
import {MatCheckboxModule, MatSidenavModule} from '@angular/material';


@NgModule({
  imports: [
    MatSidenavModule,
    MatCheckboxModule,
  ],
  exports: [
    MatSidenavModule,
    MatCheckboxModule,
  ],
  declarations: []
})
export class MaterialModulesModule {
}
