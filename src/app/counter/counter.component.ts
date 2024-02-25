
// }
import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  template: `<h3>Counter:{{counter}}</h3>
  <button (click)="decreaseBy(1)">-1</button>
  <button (click)="resetBy(0)">Reset</button>
  <button (click)="increaseBy(1)">+1</button>`
})

export class CounterComponent  {

  public counter:number = 10;

  increaseBy(value:number):void{
    this.counter += value;
  }

  decreaseBy(value:number):void{
    this.counter -= value;
  }
  resetBy(value:number):void{
    this.counter = 10;
  }
}
