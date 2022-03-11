import {Component} from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
    <h1>{{title}}</h1>
    <h3>La base es: <strong>{{base}}</strong></h3>
    <button (click)="acumular()">+ {{base}}</button>
    <span>{{numero}}</span>
    <button (click)="reducir()">- {{base}}</button>
    `
})

export class ContadorComponent{
    title = 'bases';
  numero: number = 10;
  base: number = 5;

  acumular(valor: number = this.base){
    this.numero +=valor;
  }

  reducir(valor: number = this.base){
    this.numero -=valor;
  }
}