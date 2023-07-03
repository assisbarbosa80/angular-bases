import { Component } from '@angular/core';



@Component({
  selector: 'app-contador',
  template: `
    <h3>Contador: {{ contador }}</h3>
    <button (click)="aumentarPor(+1)">+1</button>
    <button (click)="resetarCont()">Resetar</button>
    <button (click)="aumentarPor(-1)">-1</button>
  `
})
export class ContadorComponent {
  constructor() {}
  public contador: number = 10;

  aumentarPor( value: number):void{
    this.contador += value;
  }

  diminuirPor( value: number ):void{
    this.contador -= value;
  }

  resetarCont():void {
    this.contador = 10;
  }
}
