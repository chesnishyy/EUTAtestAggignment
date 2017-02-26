import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { AppComponent }  from './app.component';
import {LoginFormComponent} from "./login-form.component";

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    LoginFormComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
