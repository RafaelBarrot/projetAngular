import { Component, OnInit } from '@angular/core';
import {LaSiesteService} from "../la-sieste.service";
import {count} from "rxjs";

@Component({
  selector: 'app-affichage2',
  templateUrl: './affichage2.component.html',
  styleUrls: ['./affichage2.component.css']
})
export class Affichage2Component implements OnInit {

  constructor(public siestes: LaSiesteService,) { }

  ngOnInit(): void {
  }

}
