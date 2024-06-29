import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/characters.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Output()
  onDelete: EventEmitter<number> = new EventEmitter();

  @Output()
  onDeleteByID: EventEmitter<string> = new EventEmitter();

  // onDeleteCharacter(index : number) : void{

  //   this.onDelete.emit(index);

  //   // console.log(index);
  // }

  onDeleteCharacterById(id? : string) : void{

    if(!id) return;
    this.onDeleteByID.emit(id);

    // console.log(index);
  }

  @Input()
  public characterList: Character[] = [{
    id: '',
    name: 'Trunk',
    power: 10
  }]



}
