import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AboutComponent} from './about/about.component';
import {ResumeComponent} from './resume/resume.component';
import {ContactsComponent} from './contacts/contacts.component';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {BlogComponent} from './blog/blog.component';
import {BlogDetailsComponent} from './blog/blog-details/blog-details.component';
import {BlogService} from './blog/blog.service';
import {RouterModule} from '@angular/router';

import {MaterialModule} from '../shared/moduls/material.module';
import {SharedModule} from '../shared/moduls/shared.module';
import {LoaderComponent} from '../shared/components/loader/loader.component';



@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    // RouterModule,
    MaterialModule,
  ],
  declarations: [
    AboutComponent,
    ResumeComponent,
    ContactsComponent,
    PortfolioComponent,
    BlogComponent,
    BlogDetailsComponent,
    LoaderComponent,
  ],
  providers: [BlogService],
})
export class ViewsModule {
}
