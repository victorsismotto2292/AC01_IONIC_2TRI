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

    // USANDO UM ARRAY PARA ARMAZENAR OS VALORES DAS TEMPERATURAS:

    const temperaturas: string[] = 
    ["-3⁰C a 20⁰C", "0⁰C a 15⁰C", "5⁰C a 22⁰C", "12⁰C a 25⁰C", "15⁰C a 20⁰C", 
    "18⁰C a 30⁰C", "22⁰C a 32⁰C", "25⁰C a 35⁰C", "25⁰C a 38⁰C", "30⁰C a 45⁰C"];

    const cultivos: string[] =
    ["1. Couve-galega ou Couve-Kale", "2. Alho", "3. Maçã", "4. Trigo", "5. Alface", 
    "6. Feijão", "7. Melancia", "8. Algodão", "9. Sorgo", "10. Tamareira (Tâmara)"];

    const infos: string[] =
    ["O frio intenso converte o amido da planta em açúcar, tornando as folhas mais saborosas após uma geada.",
      "Exige frio. O bulbo precisa passar por um período de baixas temperaturas para se dividir em dentes",
      "Muitas macieiras precisam de centenas de horas de frio (abaixo de 7°C) para quebrar a dormência e produzir.",
      "Versátil, mas prefere climas amenos para o enchimento dos grãos.",
      "Essencial para o cultivo em climas predominantemente temperados e frios.",
      "Clássico de clima temperado/quente; para de crescer se a temperatura cair muito.",
      "Adora sol pleno e calor constante para concentrar açúcar no fruto.",
      "Exige muito calor e luz para que os capulhos se abram corretamente.",
      "O campeão da seca. Substitui o milho em regiões onde o calor é excessivo e a água é pouca.",
      "Uma das poucas que prospera no calor extremo do deserto, desde que tenha acesso a água subterrânea."
    ]

    // CONDIÇÕES:

    this.router.navigateByUrl(`res-lista/${media.toFixed(1)}/${this.resultado}`);        
  }

}
