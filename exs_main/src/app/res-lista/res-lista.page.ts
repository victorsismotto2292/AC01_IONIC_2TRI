import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-res-lista',
  templateUrl: './res-lista.page.html',
  styleUrls: ['./res-lista.page.scss'],
  standalone: false
})
export class ResListaPage implements OnInit {
  media: any;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.media = this.activatedRoute.snapshot.paramMap.get('media')
  }

}
