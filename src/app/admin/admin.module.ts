import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AdminComponent} from './admin.component';
import {MaterialModule} from '../shared/moduls/material.module';
import {AdminNavComponent} from './admin-nav/admin-nav.component';
import {RouterModule} from '@angular/router';
import {AddPortfolioComponent} from './admin-portfolio/add-portfolio/add-portfolio.component';
import {AddExperienceComponent} from './admin-experience/add-experience/add-experience.component';
import {EditPortfolioComponent} from './admin-portfolio/edit-portfolio/edit-portfolio.component';
import {AddPortfolioService} from './admin-portfolio/add-portfolio/add-portfolio.service';
import {PortfolioFormService} from './admin-portfolio/portfolio-form/portfolio-form.service';
import {PortfolioFormComponent} from './admin-portfolio/portfolio-form/portfolio-form.component';
import {SharedModule} from '../shared/moduls/shared.module';


@NgModule({
  declarations: [
    AdminComponent,
    AddPortfolioComponent,
    AdminNavComponent,
    AddExperienceComponent,
    EditPortfolioComponent,
    PortfolioFormComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  providers: [AddPortfolioService, PortfolioFormService],
})
export class AdminModule {
}
