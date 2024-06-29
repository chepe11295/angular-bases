import { Injectable } from '@angular/core';
import { Character } from '../interfaces/characters.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'krillin',
    power: 1000
  },{
    id: uuid(),
    name: 'goku',
    power: 10000
  },{
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }
  ];

  addCharacter( character: Character): void {
    const newCharacter : Character = { ...character, id: uuid() };

    this.characters.push(newCharacter);

    // console.log('Main page');
    // console.log(character);
  }

  // onDeleteCharacter(index: number) : void{
  //   this.characters.splice(index, 1);
  // }

  onDeleteCharacterById (id: string) : void {
    this.characters = this.characters.filter(characters => characters.id !== id);
  }

}
