import { Component, EventEmitter, Output } from '@angular/core';
import { Personagens } from '../../interfaces/personagens.interface';

@Component({
  selector: 'dbz-add-personagem',
  templateUrl: './add-personagem.component.html',
  styleUrls: ['./add-personagem.component.css']
})
export class AddPersonagemComponent {
  @Output()
  public onNewPersonagem: EventEmitter<Personagens> = new EventEmitter();
  public personagem: Personagens = {
    nome: '',
    poder: 0
  }

  emitPersonagem():void {
    if( this.personagem.nome.length === 0 ) return;
    console.log(this.personagem);
    this.onNewPersonagem.emit(this.personagem);


    this.personagem = {
      nome: '',
      poder: 0
    }
  }
}
