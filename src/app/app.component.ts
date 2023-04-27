import { Component } from '@angular/core';
import { Animale } from './models/animale.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lista_animali : Animale[]

  constructor(){
    this.lista_animali = [
      {
         "nome": "cane",
         "verso": "bau",
         "zampe": 4,
         "movimento": "cammina"
      },
      {
         "nome": "rana",
         "verso": "cra",
         "zampe": 4,
         "movimento": "salta"
      },
      {
         "nome": "canarino",
         "verso": "fiu",
         "zampe": 2,
         "movimento": "vola"
      },
      {
         "nome": "serpente",
         "verso": "fss",
         "zampe": 0,
         "movimento": "striscia"
      }
   ]
  }
  ordinaPerNome(){
    this.lista_animali = this.lista_animali.sort((a, b) => a.nome.localeCompare(b.nome));
  }

  ordinaPerZampe(){
    this.lista_animali.sort((a: Animale, b: Animale) => b.zampe - a.zampe);
  }
}
