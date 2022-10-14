import { Component, OnInit } from '@angular/core';
import { LaSiesteService} from "../la-sieste.service";

@Component({
  selector: 'app-affichage1',
  templateUrl: './affichage1.component.html',
  styleUrls: ['./affichage1.component.css']
})
export class Affichage1Component implements OnInit {

  constructor(public siestes: LaSiesteService) { }

  ngOnInit(): void {
  }

}
