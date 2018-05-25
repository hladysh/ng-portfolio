import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AboutComponent} from './about/about.component';
import {ResumeComponent} from './resume/resume.component';
import {ContactsComponent} from './contacts/contacts.component';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {BlogComponent} from './blog/blog.component';
import {InfiniteScrollComponent} from './infinite-scroll/infinite-scroll.component';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import { BlogDetailsComponent } from './blog/blog-details/blog-details.component';

@NgModule({
  imports: [
    CommonModule,
    InfiniteScrollModule,
  ],
  declarations: [
    AboutComponent,
    ResumeComponent,
    ContactsComponent,
    PortfolioComponent,
    BlogComponent,
    InfiniteScrollComponent,
    BlogDetailsComponent
  ]
})
export class ViewsModule {
}
