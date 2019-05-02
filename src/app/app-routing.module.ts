import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { AuthenticateLayoutComponent } from './layouts/authenticate-layout/authenticate-layout.component';

const routes: Routes = [{
    path: '', redirectTo: '/authenticate', pathMatch: 'full'
  },
  {
    path: 'authenticate',
    component: AuthenticateLayoutComponent, 
    children: [
      { path: '', component: LoginPageComponent }, 
      { path: 'signup', component: SignupPageComponent } 
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
