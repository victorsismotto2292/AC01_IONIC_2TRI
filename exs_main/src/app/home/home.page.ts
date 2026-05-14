import { Component } from '@angular/core';
import { RangeCustomEvent } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false
})
export class HomePage {

  constructor(public router: Router) {}

  // VARIÁVEIS (TEMPERATURA MÁXIMA: 40⁰C):
  Range_m1 = -5 // TEMPERATURA MÍNIMA
  Range_m2 = -5 // TEMPERATURA MÍNIMA

  /* 
  VALORES DOS CULTIVOS:

  - Couve-galega/Kale -> -3⁰C a 20⁰C
  - Alho -> 0⁰C a 15⁰C
  - Maçã (Variedades de Frio) -> 5⁰C a 22⁰C
  - Trigo -> 12⁰C a 25⁰C
  - Alface -> 15⁰C a 20⁰C
  - Feijão -> 18⁰C a 30⁰C
  - Melancia -> 22⁰C a 32⁰C
  - Algodão -> 25⁰C a 35⁰C
  - Sorgo -> 25⁰C a 38⁰C
  - Tamareira (Tâmara) -> 30⁰C a 45⁰C
  */

  // FUNÇÕES PARA RECEBER O VALOR DOS ION RANGES:

  mes1(event: RangeCustomEvent){
    this.Range_m1 = Number(event.detail.value);
  }

  mes2(event: RangeCustomEvent){
    this.Range_m2 = Number(event.detail.value);
  }

  abrirTela(){
    // O QUE VAI APARECER NA TELA:
    const media = (this.Range_m1 + this.Range_m2)/2
    this.router.navigateByUrl(`res-lista/${media}`);        
  }

}
