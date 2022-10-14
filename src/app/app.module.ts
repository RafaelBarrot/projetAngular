import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComposantRouteurComponent } from './composant-routeur/composant-routeur.component';
import { ComposantSelecteurComponent } from './composant-selecteur/composant-selecteur.component';
import { CalculetteComponent } from './calculette/calculette.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { SiesteComponent } from './sieste/sieste.component';
import {LaSiesteService} from "./la-sieste.service";
import { Affichage1Component } from './affichage1/affichage1.component';
import { Affichage2Component } from './affichage2/affichage2.component';


@NgModule({
  declarations: [
    AppComponent,
    ComposantRouteurComponent,
    ComposantSelecteurComponent,
    CalculetteComponent,
    SiesteComponent,
    Affichage1Component,
    Affichage2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    LaSiesteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
