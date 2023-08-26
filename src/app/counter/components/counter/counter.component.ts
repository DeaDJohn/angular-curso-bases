import { Component } from "@angular/core";

@Component({
    selector: 'app-counter',
    template: `
    <h2>Counter: {{ counter }}</h2>
    <button (click)="increaseBy(1)">+1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="degreaseBy(1)">-1</button>
`
}
)
export class CounterComponent {
    public counter: number = 10;
    increaseBy( value:number ):void {
        this.counter += 1;
      }
      degreaseBy( value:number):void {
        this.counter -= 1;
      }
      reset(): void{
        this.counter = 10;
      }
}
