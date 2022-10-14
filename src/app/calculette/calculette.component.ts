import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-calculette',
  templateUrl: './calculette.component.html',
  styleUrls: ['./calculette.component.css']
})


export class CalculetteComponent implements OnInit {

  public calculatrice: FormGroup;

  public resultat: Number = 0;
  public operande1: FormControl
    = new FormControl<number>(0,[
      Validators.min(1),
      Validators.required
  ]);

  public operateur: FormControl
    = new FormControl<string|null>('+', Validators.required);

  public operande2: FormControl
    = new FormControl<number>(0,[
      Validators.min(1),
      Validators.required
  ]);



  constructor() {
    this.calculatrice = new FormGroup({
      operande1:this.operande1,
      operateur:this.operateur,
      operande2: this.operande2,
    })
  }



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
