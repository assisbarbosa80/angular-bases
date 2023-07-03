import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public nome: string = 'Ironman'
  public idade: number = 45;

  get nomeCapitalizado():string {
    return this.nome.toUpperCase();
  }

  getHeroDescription():string {
    return `${ this.nome } - ${ this.idade }`;
  }

  mudarHero():void {
    this.nome = 'Spiderman';
  }

  mudarIdade():void {
    this.idade = 25;
  }

  resetarValores():void {
    this.nome = 'Ironman';
    this.idade = 45;
  }

}
