import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ComposantRouteurComponent}
  from "./composant-routeur/composant-routeur.component";
import {CalculetteComponent}
  from "./calculette/calculette.component";
import {SiesteComponent}
  from "./sieste/sieste.component";


const routes: Routes = [
  { path: 'mon_composant', component: ComposantRouteurComponent},
  {path:'calculette', component: CalculetteComponent},
  {path:'sieste', component: SiesteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
