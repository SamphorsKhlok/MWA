import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-arr-comp',
  template: `
    <div>
      <h3>Array Component</h3>
      <ul>
        <li *ngFor="let item of list">{{item}}</li>
      </ul>
    </div>
  `,
  styles: []
})
export class ArrCompComponent implements OnInit {
  @Input("elements") arrElement : string[];
  list : string[];
  constructor() { }

  ngOnInit() {
    this.list = this.arrElement;
    //console.log(this.list);
  }

}
