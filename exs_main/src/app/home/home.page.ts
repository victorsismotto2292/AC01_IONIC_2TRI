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

    // USANDO UM ARRAY PARA ARMAZENAR OS TIPOS DE CULTIVOS:
    const cultivos: string[] =
    ["1. Couve-galega ou Couve-Kale", "2. Alho", "3. Maçã", "4. Trigo", "5. Alface", 
    "6. Feijão", "7. Melancia", "8. Algodão", "9. Sorgo", "10. Tamareira (Tâmara)"];

    // USANDO UM ARRAY PARA ARMAZENAR AS INFORMAÇÕES DOS CULTIVOS:
    const infos: string[] =
    ["O frio intenso converte o amido da planta em açúcar, tornando as folhas mais saborosas após uma geada.",
      "Exige frio. O bulbo precisa passar por um período de baixas temperaturas para se dividir em dentes.",
      "Muitas macieiras precisam de centenas de horas de frio para quebrar a dormência e produzir.",
      "Versátil, mas prefere climas amenos para o enchimento dos grãos.",
      "Essencial para o cultivo em climas predominantemente temperados e frios.",
      "Clássico de clima temperado/quente; para de crescer se a temperatura cair muito.",
      "Adora sol pleno e calor constante para concentrar açúcar no fruto.",
      "Exige muito calor e luz para que os capulhos se abram corretamente.",
      "O campeão da seca. Substitui o milho em regiões onde o calor é excessivo e a água é pouca.",
      "Uma das poucas que prospera no calor extremo do deserto, desde que tenha acesso a água subterrânea."
    ]

    // CONSTANTES EXPLORATÓRIAS DOS ARRAYS:
    let t0 = temperaturas[0]; // BUSCA O ELEMENTO DA POSIÇÃO 0 DO ARRAY DE TEMPERATURAS
    let c0 = cultivos[0]; // BUSCA O ELEMENTO DA POSIÇÃO 0 DO ARRAY DE CULTIVOS
    let i0 = infos[0]; // BUSCA O ELEMENTO DA POSIÇÃO 0 DO ARRAY DE INFOS

    let t1 = temperaturas[1]; // BUSCA O ELEMENTO DA POSIÇÃO 1 DO ARRAY DE TEMPERATURAS
    let c1 = cultivos[1]; // BUSCA O ELEMENTO DA POSIÇÃO 1 DO ARRAY DE CULTIVOS
    let i1 = infos[1]; // BUSCA O ELEMENTO DA POSIÇÃO 1 DO ARRAY DE INFOS

    let t2 = temperaturas[2]; // BUSCA O ELEMENTO DA POSIÇÃO 2 DO ARRAY DE TEMPERATURAS
    let c2 = cultivos[2]; // BUSCA O ELEMENTO DA POSIÇÃO 2 DO ARRAY DE CULTIVOS
    let i2 = infos[2]; // BUSCA O ELEMENTO DA POSIÇÃO 2 DO ARRAY DE INFOS

    let t3 = temperaturas[3]; // BUSCA O ELEMENTO DA POSIÇÃO 3 DO ARRAY DE TEMPERATURAS
    let c3 = cultivos[3]; // BUSCA O ELEMENTO DA POSIÇÃO 3 DO ARRAY DE CULTIVOS
    let i3 = infos[3]; // BUSCA O ELEMENTO DA POSIÇÃO 3 DO ARRAY DE INFOS

    let t4 = temperaturas[4]; // BUSCA O ELEMENTO DA POSIÇÃO 4 DO ARRAY DE TEMPERATURAS
    let c4 = cultivos[4]; // BUSCA O ELEMENTO DA POSIÇÃO 4 DO ARRAY DE CULTIVOS
    let i4 = infos[4]; // BUSCA O ELEMENTO DA POSIÇÃO 4 DO ARRAY DE INFOS

    let t5 = temperaturas[5]; // BUSCA O ELEMENTO DA POSIÇÃO 5 DO ARRAY DE TEMPERATURAS
    let c5 = cultivos[5]; // BUSCA O ELEMENTO DA POSIÇÃO 5 DO ARRAY DE CULTIVOS
    let i5 = infos[5]; // BUSCA O ELEMENTO DA POSIÇÃO 5 DO ARRAY DE INFOS

    let t6 = temperaturas[6]; // BUSCA O ELEMENTO DA POSIÇÃO 6 DO ARRAY DE TEMPERATURAS
    let c6 = cultivos[6]; // BUSCA O ELEMENTO DA POSIÇÃO 6 DO ARRAY DE CULTIVOS
    let i6 = infos[6]; // BUSCA O ELEMENTO DA POSIÇÃO 6 DO ARRAY DE INFOS

    let t7 = temperaturas[7]; // BUSCA O ELEMENTO DA POSIÇÃO 7 DO ARRAY DE TEMPERATURAS
    let c7 = cultivos[7]; // BUSCA O ELEMENTO DA POSIÇÃO 7 DO ARRAY DE CULTIVOS
    let i7 = infos[7]; // BUSCA O ELEMENTO DA POSIÇÃO 7 DO ARRAY DE INFOS

    let t8 = temperaturas[8]; // BUSCA O ELEMENTO DA POSIÇÃO 8 DO ARRAY DE TEMPERATURAS
    let c8 = cultivos[8]; // BUSCA O ELEMENTO DA POSIÇÃO 8 DO ARRAY DE CULTIVOS
    let i8 = infos[8]; // BUSCA O ELEMENTO DA POSIÇÃO 8 DO ARRAY DE INFOS

    let t9 = temperaturas[9]; // BUSCA O ELEMENTO DA POSIÇÃO 9 DO ARRAY DE TEMPERATURAS
    let c9 = cultivos[9]; // BUSCA O ELEMENTO DA POSIÇÃO 9 DO ARRAY DE CULTIVOS
    let i9 = infos[9]; // BUSCA O ELEMENTO DA POSIÇÃO 9 DO ARRAY DE INFOS

    // CALCULANDO POSSÍVEIS RESPOSTAS:

    let r0: string[] = [c0, t0, i0]; // TRANSFORMANDO A VARIÁVEL EM UM ARRAY COM TODOS OS ELEMENTOS
    const r0_fix = r0.join('\n\n'); // ADICIONANDO UMA QUEBRA DE LINHA PARA MELHOR EXIBIÇÃO DO RESULTADO

    // Mesmo esquema para os sucessores abaixo:    
    let r1: string[] = [c1, t1, i1];
    const r1_fix = r1.join('\n\n');

    let r2: string[] = [c2, t2, i2];
    const r2_fix = r2.join('\n\n');
    let r3: string[] = [c3, t3, i3];
    const r3_fix = r3.join('\n\n');

    let r4: string[] = [c4, t4, i4];
    const r4_fix = r4.join('\n\n');

    let r5: string[] = [c5, t5, i5];
    const r5_fix = r5.join('\n\n');

    let r6: string[] = [c6, t6, i6];
    const r6_fix = r6.join('\n\n');

    let r7: string[] = [c7, t7, i7];
    const r7_fix = r7.join('\n\n');

    let r8: string[] = [c8, t8, i8];
    const r8_fix = r8.join('\n\n');

    let r9: string[] = [c9, t9, i9];
    const r9_fix = r9.join('\n\n');

    // CONDIÇÕES:
    if(media < -3){
      const res: string[] = ['Nenhuma cultura encontrada'];
      const r_fix = res.join('\n________________\n\n');

      this.resultado = r_fix;
    }
    else if(media >= -3 && media < 0){
      const res: string[] = [r0_fix];
      const r_fix = res.join('\n________________\n\n');

      this.resultado = r_fix;
    }
    else if(media >= 0 && media < 5){
      const res: string[] = [r0_fix, r1_fix];
      const r_fix = res.join('\n________________\n\n');

      this.resultado = r_fix;
    }
    else if(media >= 5 && media < 12){
      const res: string[] = [r0_fix, r1_fix, r2_fix];
      const r_fix = res.join('\n________________\n\n');

      this.resultado = r_fix;
    }
    else if(media >= 12 && media < 15){
      const res: string[] = [r0_fix, r1_fix, r2_fix, r3_fix];
      const r_fix = res.join('\n________________\n\n');

      this.resultado = r_fix;
    }
    else if(media >= 15 && media < 18){
      const res: string[] = [r0_fix, r1_fix, r2_fix, r3_fix, r4_fix];
      const r_fix = res.join('\n________________\n\n');

      this.resultado = r_fix;
    }
    else if(media >= 18 && media < 20){
      const res: string[] = [r0_fix, r2_fix, r3_fix, r4_fix, r5_fix];
      const r_fix = res.join('\n________________\n\n');

      this.resultado = r_fix;
    }
    else if(media >= 20 && media < 22){
      const res: string[] = [r0_fix, r2_fix, r3_fix, r5_fix];
      const r_fix = res.join('\n________________\n\n');

      this.resultado = r_fix;
    }
    else if(media >= 22 && media < 25){
      const res: string[] = [r2_fix, r3_fix, r5_fix, r6_fix];
      const r_fix = res.join('\n________________\n\n');

      this.resultado = r_fix;
    }
    else if(media >= 25 && media < 30){
      const res: string[] = [r5_fix, r6_fix, r7_fix, r8_fix];
      const r_fix = res.join('\n________________\n\n');

      this.resultado = r_fix;
    }
    else if(media >= 30 && media <= 32){
      const res: string[] = [r5_fix, r6_fix, r7_fix, r8_fix, r9_fix];
      const r_fix = res.join('\n________________\n\n');

      this.resultado = r_fix;
    }
    else if(media > 32 && media <= 35){
      const res: string[] = [r7_fix, r8_fix, r9_fix];
      const r_fix = res.join('\n________________\n\n');

      this.resultado = r_fix;
    }
    else if(media > 35 && media <= 38){
      const res: string[] = [r8_fix, r9_fix];
      const r_fix = res.join('\n________________\n\n');

      this.resultado = r_fix;
    }
    else if(media > 38 && media <= 40){
      const res: string[] = [r9_fix];
      const r_fix = res.join('\n________________\n\n');

      this.resultado = r_fix;
    }
    else{
      const res: string[] = ['Nenhuma cultura encontrada'];
      const r_fix = res.join('\n________________\n\n');

      this.resultado = r_fix;
    }
    this.router.navigateByUrl(`res-lista/${media.toFixed(1)}/${this.resultado}`);        
  }
}