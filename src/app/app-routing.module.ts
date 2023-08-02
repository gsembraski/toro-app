import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard, LoginGuard } from './core/guards/auth-guard';
import { HomeComponent } from './home/home.component';
import { BasePageComponent } from './base-page/base-page.component';

const routes: Routes = [
  {
    path: '', component: BasePageComponent, canActivate: [AuthGuard], children: [
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  },
  
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
