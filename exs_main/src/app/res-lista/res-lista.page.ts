import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-res-lista',
  templateUrl: './res-lista.page.html',
  styleUrls: ['./res-lista.page.scss'],
  standalone: false
})
export class ResListaPage implements OnInit {
  media: any;
  resultado: any;

  constructor(private activatedRoute: ActivatedRoute, public router: Router) { }

  ngOnInit() {
    this.media = this.activatedRoute.snapshot.paramMap.get('media');
    this.resultado = this.activatedRoute.snapshot.paramMap.get('resultado');
  }

}
