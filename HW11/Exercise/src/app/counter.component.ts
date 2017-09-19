import { Component, OnInit, ViewEncapsulation, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-counter',
  //templateUrl: './counter.component.html',
  template:`
    <div class="orange">
      <h3>{{title}}</h3>
      <button (click)="getParentInput()">Get Parent Input</button>
      <div style="padding: 10px">
        <button (click)="decrease()">  -  </button>
        <label>{{counterValue}}</label>
        <button (click)="increase()">  +  </button>
      </div>
      <p>Parent Input : {{paraCounter}}</p>
    </div>
  `,
  styles:['div.orange {border: solid 1px orange; margin: 5px}'],
  encapsulation: ViewEncapsulation.Emulated
})
export class CounterComponent implements OnInit {

  counterValue:number;
  title: string = "Counter Component";
  @Input() paraCounter;
  @Input() paraCounter2;
  @Output() counterChange = new EventEmitter();

  constructor() {
    this.counterValue = 0;
  }

  ngOnInit() {
    console.log("component is loaded");
  }

  decrease(){
    this.counterValue = this.counterValue - 1;
    this.emitData();
  }

  increase(){
    this.counterValue = this.counterValue + 1;;
    this.emitData();
  }

  getParentInput(){
    this.counterValue = parseInt(this.paraCounter);
  }

  // ngOnChanges(){
  //   console.log("change detected");
  //   if(this.paraCounter){
  //     this.counterValue = parseInt(this.paraCounter);
  //   }
  // }

  emitData(){
    this.counterChange.emit(this.counterValue);
  }

}