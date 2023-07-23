import { Injectable } from '@angular/core';
import { Personagens } from '../interfaces/personagens.interface';
import { v4 as uuid } from 'uuid';
@Injectable({providedIn: 'root'})
  export class DbzService {

    public personagemId: number = 0;
    public personagens: Personagens[] = [
      {
        id: uuid(),
        nome: 'Krillin',
        poder: 1000
      },{
        id: uuid(),
        nome: 'Goku',
        poder: 9500
      }, {
        id: uuid(),
        nome: 'Vegeta',
        poder: 7500
      }
    ];
    addPersonagem( personagem: Personagens ):void {

      const novoPersonagem: Personagens = {
        id: uuid(),
        ...personagem
      };
      this.personagens.push(novoPersonagem);
    }

    // onDeletePersonagem( index: number): void{
    //   this.personagens.splice(index, 1);
    // }

    deletePersonagemById( id: string ) {
      this.personagens = this.personagens.filter( personagem => personagem.id !== id );
    }

}
