import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ComposantRouteurComponent}
  from "./composant-routeur/composant-routeur.component";
import {CalculetteComponent}
  from "./calculette/calculette.component";


const routes: Routes = [
  { path: 'mon_composant', component: ComposantRouteurComponent},
  {path:'calculette', component: CalculetteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
