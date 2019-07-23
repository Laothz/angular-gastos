import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { TesteComponent } from './home/teste/teste.component';
import { FormLoginComponent } from './login/form-login/form-login.component';


const routes: Routes = [
  { 
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'teste',
        component: TesteComponent
      },
      {
        path: 'teste2',
        component: TesteComponent
      }
    ]
  },
  {
    path: '',
    component: LoginComponent,
    children: [
      {
        path: '', component: FormLoginComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
