import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { StoreModule } from '@ngrx/store';
import {portfolioReducer} from './redux/portfolio.reducer';

import {CoreModule} from './core/core.module';
import {ViewsModule} from './views/views.module';
import {AppRoutingModule} from './app-routing.module';
import {SidebarComponent} from './shared/components/sidebar/sidebar.component';
import {NotFoundComponent} from './shared/components/not-found/not-found.component';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {environment} from '../environments/environment';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireStorageModule} from 'angularfire2/storage';
import {AngularFirestoreModule} from 'angularfire2/firestore';

import {AdminModule} from './admin/admin.module';
import {AuthModule} from './auth/auth.module';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {MaterialModule} from './shared/moduls/material.module';
import {AuthGuard} from './auth/auth.guard';

import {LoaderComponent} from './shared/components/loader/loader.component';
import {SharedModule} from './shared/moduls/shared.module';
import {SidebarService} from './shared/servises/sidebar.service';

// import {AuthGuard} from './auth/auth.guard';



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NotFoundComponent,

  ],
  imports: [
    BrowserModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    HttpClientModule,
    NgbModule.forRoot(),
    MaterialModule,
    MatIconModule,
    FormsModule,
    BrowserAnimationsModule,
    AdminModule,
    AuthModule,
    CoreModule,
    ViewsModule,
    AppRoutingModule,
    StoreModule.forRoot({portfolioPage: portfolioReducer}),
  ],
  providers: [AuthGuard, SidebarService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
