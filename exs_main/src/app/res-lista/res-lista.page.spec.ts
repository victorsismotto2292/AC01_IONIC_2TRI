import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResListaPage } from './res-lista.page';

describe('ResListaPage', () => {
  let component: ResListaPage;
  let fixture: ComponentFixture<ResListaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ResListaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
