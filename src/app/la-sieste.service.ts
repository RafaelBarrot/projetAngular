import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";
 interface Utilisateurr {
   name: string;
   id:number;
   sieste: string;
   message:string;

 }

interface utilisateur {
}

@Injectable({
  providedIn: 'root'
})
export class LaSiesteService {
   private _sieste = new BehaviorSubject<utilisateur[]>([]);
   private dataStore: {utilisateur: utilisateur[]} = {utilisateur:[]};
   readonly terminees = this._sieste.asObservable();



  constructor(private http: HttpClient) { }

  lesSiestes() {
    return this._sieste.asObservable();
  }

  faitLaSieste(nom:string, duree:number) {
    return this.http.get<utilisateur>('http://localhost/rbarr/escha_laravel_reactive_api/public/'+
    nom+ '_please_sleep_'+
    duree+'_secs')
      .subscribe(
        data => {
          this.dataStore.utilisateur.push(data);
          this._sieste.next(this.dataStore.utilisateur);
        },
        error => console.log('Sieste impossible')
      )
  }




}
