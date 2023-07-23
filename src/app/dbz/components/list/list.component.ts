import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Personagens } from '../../interfaces/personagens.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {
  @Output()
  public onDeletePersonagem: EventEmitter<string> = new EventEmitter();

  @Input()
  public listaPersonagens: Personagens[] = [
    {
      nome: 'Trunks',
      poder: 7000
    }
  ];

  emitPersonagemId(id?: string):void {
    // TODO: Emitir o ID do personagem
    if (!id ) return;

    this.onDeletePersonagem.emit( id );
  }
}
