import {Component, OnInit, ViewEncapsulation, Input, EventEmitter, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-counter',
  //templateUrl: './counter.component.html',
  template:`
    <div class="orange">
      <h3>{{title}}</h3>
      <p>Parent Input : {{paraCounter}}</p>
      <div style="padding: 10px">
        <button (click)="decrease()">  -  </button>
        <label>{{counterValue}}</label>
        <button (click)="increase()">  +  </button>
      </div>
    </div>
  `,
  styles:['div.orange {border: solid 1px orange; margin: 5px}'],
  encapsulation: ViewEncapsulation.Emulated
})
export class CounterComponent implements OnInit {

  counterValue:number = 0;
  title: string = "Counter Component";

  private _paraCounter;
  @Input() set paraCounter(value: number) {
    this.counterValue = this._paraCounter = value;
  }

  get paraCounter(): number{
    return this._paraCounter;
  }

  @Input() paraCounter2;
  @Output() counterChange = new EventEmitter();

  constructor() {
    this.counterValue = 0;
  }

  ngOnInit() {
    console.log("component is loaded");
  }

  decrease(){
    this.counterValue--;
    //console.log("After decrease " + this.counterValue);
    this.emitData();
  }

  increase(){
    this.counterValue++;
    //console.log("after increase " + this.counterValue);
    this.emitData();
  }

  emitData(){
    this.counterChange.emit(this.counterValue);
  }

}
