import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from './views/about/about.component';
import {ResumeComponent} from './views/resume/resume.component';
import {NotFoundComponent} from './shared/components/not-found/not-found.component';
import {ContactsComponent} from './views/contacts/contacts.component';
import {PortfolioComponent} from './views/portfolio/portfolio.component';
import {BlogComponent} from './views/blog/blog.component';

import {BlogDetailsComponent} from './views/blog/blog-details/blog-details.component';
import {AdminComponent} from './admin/admin.component';
import {AuthComponent} from './auth/auth.component';
import {AuthGuard} from './auth/auth.guard';
import {AddPortfolioComponent} from './admin/admin-portfolio/add-portfolio/add-portfolio.component';
import {AddExperienceComponent} from './admin/admin-experience/add-experience/add-experience.component';
import {EditPortfolioComponent} from './admin/admin-portfolio/edit-portfolio/edit-portfolio.component';


const appRouters: Routes = [
  {
    path: '',
    redirectTo: '/about',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    data: {title: 'Admin page'},
    children: [
      {path: 'add-portfolio', component: AddPortfolioComponent, canActivate: [AuthGuard], data: {title: 'Add portfolio'}},
      {path: 'add-experience', component: AddExperienceComponent, canActivate: [AuthGuard], data: {title: 'Add experience'}},
      {path: 'edit-portfolio/:id', component: EditPortfolioComponent, canActivate: [AuthGuard], data: {title: 'Edit portfolio'}},
    ],
  },
  {
    path: 'login',
    component: AuthComponent,
    data: {title: 'Login page'}
  },
  {
    path: 'about',
    component: AboutComponent,
    data: {title: 'About page'}
  },
  {
    path: 'resume',
    component: ResumeComponent,
    data: {title: 'Resume page'}
  },
  {
    path: 'contacts',
    component: ContactsComponent,
    data: {title: 'Contacts page'}
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
    data: {title: 'Portfolio page'}
  },
  {
    path: 'blog',
    component: BlogComponent,
    data: {title: 'Blog page'}
  },
  {
    path: 'blog/:id',
    component: BlogDetailsComponent,
    data: {title: 'Portfolio page'}
  },
  {
    path: '*',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRouters)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
