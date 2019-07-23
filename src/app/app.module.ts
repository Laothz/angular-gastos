import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgxSpinnerModule } from "ngx-spinner";
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LinkMenuComponent } from './home/link-menu/link-menu.component';
import { LoginComponent } from './login/login.component';
import { TesteComponent } from './home/teste/teste.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';

import { AuthGuardService } from './guards/auth-guard.service';
import { FormLoginComponent } from './login/form-login/form-login.component';
import { FormInputComponent } from './login/form-input/form-input.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LinkMenuComponent,
    LoginComponent,
    TesteComponent,
    DashboardComponent,
    FormLoginComponent,
    FormInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    NgxSpinnerModule,
    MatGridListModule,
    MatButtonModule
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
