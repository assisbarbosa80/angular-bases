import { Component } from '@angular/core';
import { Personagens } from '../interfaces/personagens.interface';

@Component({
  selector: 'app-sbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  public personagemId: number = 0;
  public personagens: Personagens[] = [
    {
      nome: 'Krillin',
      poder: 1000
    },{
      nome: 'Goku',
      poder: 9500
    }, {
      nome: 'Vegeta',
      poder: 7500
    }
  ];
  onNewPersonagem( personagem: Personagens ):void {
    this.personagens.push(personagem);
  }

  onDeletePersonagem( index: number): void{
    console.log(index);
    this.personagens.splice(index, 1);
  }
}
