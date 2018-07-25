import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModulesModule} from './shared/moduls/material-modules/material-modules.module';

import { StoreModule } from '@ngrx/store';
import {portfolioReducer} from './redux/portfolio.reducer';

import {CoreModule} from './core/core.module';
import {ViewsModule} from './views/views.module';
import {AppRoutingModule} from './app-routing.module';
import {SidebarComponent} from './shared/components/sidebar/sidebar.component';
import {NotFoundComponent} from './shared/components/not-found/not-found.component';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,

    HttpClientModule,
    NgbModule.forRoot(),
    MaterialModulesModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    // FontAwesomeModule,
    // MaterialModulesModule,
    BrowserAnimationsModule,
    // AppRouting,
    // SharedModule,
    CoreModule,
    ViewsModule,
    AppRoutingModule,
    StoreModule.forRoot({portfolioPage: portfolioReducer}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
