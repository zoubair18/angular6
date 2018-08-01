import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';
import { LoginComponent } from './views/login/login.component';


import { RegisterComponent } from './views/register/register.component';
import { AccueilComponent } from './views/page/accueil/accueil.component';
import { ActivationComponent} from './views/page/accueil/activation/activation.component';
import { LoginAssComponent} from './views/login/loginAss/login-ass/login-ass.component';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },

  {
    path: 'accueil',
    component: AccueilComponent,
    data: {
      title: 'Acceuil'
    }
  },


  {
    path: 'activation',
    component: ActivationComponent,
    data: {
      title: 'activation'
    }
  },

  {
    path: 'loginAss',
    component: LoginAssComponent,
    data: {
      title: 'loginAss'
    }
  },



  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
     {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'theme',
        loadChildren: './views/theme/theme.module#ThemeModule'
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
