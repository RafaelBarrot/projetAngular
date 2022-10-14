import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-calculette',
  templateUrl: './calculette.component.html',
  styleUrls: ['./calculette.component.css']
})


export class CalculetteComponent implements OnInit {

  public resultat: Number = 0;
  public operande1: FormControl
    = new FormControl('');

  public operateur: FormControl
    = new FormControl('');

  public operande2: FormControl
    = new FormControl('');



  constructor() { }



  ngOnInit(): void {


  }
  calcul(): void  {
    console.log('On calcule...' );

    this.resultat = eval(
      'this.operande1.value' +
      this.operateur.value +
      'this.operande2.value'
    );
  }





}
