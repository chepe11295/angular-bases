import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
  <p>Bienvenido a angular</p>
  <p>contador {{counter}}</p>

  <button (click)="increaseBy(1)">+1</button> &nbsp;
  <button (click)="resetCounter()">Reset</button> &nbsp;
  <button (click)="increaseBy(-1)">--1</button>
  `
})
export class counterComponent {

  public counter: number = 10;

  increaseBy(value: number) : void {
    this.counter += value;
  };
  resetCounter(){
    this.counter = 10;
  }
}
