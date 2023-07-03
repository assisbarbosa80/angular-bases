import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroiExcluido?: string;
  nomeDeHerois: string[] =
    [
      'Spiderman', 'Ironman', 'Hulk', 'She Hulk', 'Thor'
    ];
    apgarUltimoHerio():void {
      this.heroiExcluido = this.nomeDeHerois.pop();
    }

}
