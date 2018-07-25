import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

// import {SystemComponent} from './system.component';
import {AboutComponent} from './views/about/about.component';
import {ResumeComponent} from './views/resume/resume.component';
import {NotFoundComponent} from './shared/components/not-found/not-found.component';
import {ContactsComponent} from './views/contacts/contacts.component';
import {PortfolioComponent} from './views/portfolio/portfolio.component';
import {BlogComponent} from './views/blog/blog.component';
import {InfiniteScrollComponent} from './views/infinite-scroll/infinite-scroll.component';
import {BlogDetailsComponent} from './views/blog/blog-details/blog-details.component';


// const routes: Routes = [
//     { path: '', component: SystemComponent}
// ];
const appRouters: Routes = [
  {
    path: '',
    redirectTo: '/about',
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: AboutComponent,
    data: {title: 'About page'}
  },
  {
    path: 'resume',
    component: ResumeComponent,
    data: {
      title: 'Resume page'
    }
  },
  {
    path: 'contacts',
    component: ContactsComponent,
    data: {
      title: 'contacts page'
    }
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
    data: {
      title: 'portfolio page'
    }
  },
  {
    path: 'blog',
    component: BlogComponent,
    data: {
      title: 'Blog page'
    }
  },
  {
    path: 'blog/:id',
    component: BlogDetailsComponent,
    data: {
      title: 'portfolio page'
    }
  },

  {
    path: 'test',
    component: InfiniteScrollComponent,
    data: {
      title: 'Blog page'
    }
  },
  {
    path: '**',
    component: NotFoundComponent,
    data: {
      title: 'Page not found'
    }
  }];

@NgModule({
  imports: [RouterModule.forRoot(appRouters)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
