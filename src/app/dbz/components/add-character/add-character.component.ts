import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/characters.interface';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  @Output()
  onNewEmitter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0,
    id: ''
  };


  emitCharacter(){

    if ( this.character.name.length === 0 ) return;

    this.onNewEmitter.emit(this.character);

    this.character = {id:'', name: '', power: 0};
    // this.character.name = '';
    // this.character.power = 0;
  };


}
