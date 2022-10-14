import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComposantRouteurComponent } from './composant-routeur/composant-routeur.component';
import { ComposantSelecteurComponent } from './composant-selecteur/composant-selecteur.component';
import { CalculetteComponent } from './calculette/calculette.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ComposantRouteurComponent,
    ComposantSelecteurComponent,
    CalculetteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
