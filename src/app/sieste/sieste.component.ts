import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LaSiesteService} from "../la-sieste.service";


@Component({
  selector: 'app-sieste',
  templateUrl: './sieste.component.html',
  styleUrls: ['./sieste.component.css']
})
export class SiesteComponent implements OnInit {

  public siesteForm: FormGroup;
  public resultat: Number = 0;
  public duree: FormControl
    = new FormControl<number>(0, [
    Validators.min(1),
    Validators.max(60),
    Validators.required
  ]);

  public name: FormControl
    = new FormControl<string | null>('', Validators.required);


  constructor(public sieste: LaSiesteService) {
    this.siesteForm = new FormGroup({
    name:this.name,
    duree:this.duree

  })
  }

  ngOnInit(): void {
  }

  faireSieste(): void {
    this.sieste.faitLaSieste(
      this.name.value,
      this.duree.value
    );

  }
}
