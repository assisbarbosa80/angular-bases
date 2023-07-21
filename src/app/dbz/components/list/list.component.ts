import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Personagens } from '../../interfaces/personagens.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {
  @Output()
  public onDeletePersonagem: EventEmitter<number> = new EventEmitter();

  @Input()
  public listaPersonagens: Personagens[] = [
    {
      nome: 'Trunks',
      poder: 7000
    }
  ];

  emitPersonagemId(index: number):void {
    // TODO: Emitir o ID do personagem
    this.onDeletePersonagem.emit(index);
  }
}
