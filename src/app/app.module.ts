import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import {HttpModule} from '@angular/http';


import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { AccueilComponent } from './views/page/accueil/accueil.component';
import {NgForm, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DefaultLayoutComponent } from './containers';



import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule
} from '@coreui/angular';
import { ActivationComponent } from './views/page/accueil/activation/activation.component';
import { LoginAssComponent } from './views/login/loginAss/login-ass/login-ass.component';
import {UserService} from './services/user.service';
import { ScrappingService } from './services/scrapping.service';




const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};



const APP_CONTAINERS = [
  DefaultLayoutComponent
];


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    HttpModule,
    FormsModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule, FormsModule, ReactiveFormsModule ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,

    LoginComponent,
    RegisterComponent,
    AccueilComponent,
    ActivationComponent,
    LoginAssComponent
  ],
  providers: [ScrappingService, UserService, {
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
