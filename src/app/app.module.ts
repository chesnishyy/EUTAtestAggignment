import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { AppComponent }  from './app.component';
import {LoginFormComponent} from "./login-form.component";
import {RouterModule, Routes} from "@angular/router";
import {UserComponent} from "./user.component";
import {NavbarComponent} from "./navbar.component";
import {SwitchLanguageComponent} from "./switch-language.component";
import {LoginService} from "./login.service";

const appRoutes: Routes = [
  { path: '', component: LoginFormComponent},
  { path: 'user', component: UserComponent}

];

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers:[ LoginService ],
  declarations: [
    AppComponent,
    LoginFormComponent,
    UserComponent,
    NavbarComponent,
    SwitchLanguageComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
