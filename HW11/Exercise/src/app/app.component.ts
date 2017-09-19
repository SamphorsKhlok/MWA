import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter : number;
  title = 'App Component';
  ComponentCounterValue:number;

  //get data from emitter
  showOutputData(data){
    this.ComponentCounterValue = data;
  }
}
