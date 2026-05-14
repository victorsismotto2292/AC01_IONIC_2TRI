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
  Range_m3 = -5 // TEMPERATURA MÍNIMA
  Range_m4 = -5 // TEMPERATURA MÍNIMA

  resultado = '' // APARECER NA TELA

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

  mes3(event: RangeCustomEvent){
    this.Range_m3 = Number(event.detail.value);
  }

  mes4(event: RangeCustomEvent){
    this.Range_m4 = Number(event.detail.value);
  }

  abrirTela(){
    // O QUE VAI APARECER NA TELA:
    const media = (this.Range_m1 + this.Range_m2 + this.Range_m3 + this.Range_m4)/4;

    const texto1 =     
    '1. Couve-galega ou Couve-Kale -> -3⁰C e 20⁰C'

    const desc_t1 = `O frio intenso converte o amido da planta em açúcar, tornando as folhas mais saborosas após uma geada.`

    const texto2 = '2. Alho -> 0⁰C a 15⁰C'

    const desc_t2 = 'Exige frio. O bulbo precisa passar por um período de baixas temperaturas para se dividir em "dentes".'

    // CONDIÇÕES:

    if(media <= 0){
      this.resultado = `${texto1} | ${desc_t1}
      ----------------------------------------------
      ${texto2} | ${desc_t2}`;
    }


    this.router.navigateByUrl(`res-lista/${media.toFixed(1)}/${this.resultado}`);        
  }

}
