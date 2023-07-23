import { Component } from '@angular/core';
import { Personagens } from '../interfaces/personagens.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-sbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  constructor(
    private dbzService: DbzService
  ) { }

  get personagens(): Personagens[] {
    return [...this.dbzService.personagens];
  }

  onDeletePersonagem( id: string ):void {
    this.dbzService.deletePersonagemById( id );
  }

  onNewPersonagem( personagem: Personagens ):void {
    this.dbzService.addPersonagem( personagem )
  }
}
