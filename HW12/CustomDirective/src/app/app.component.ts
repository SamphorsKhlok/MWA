import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  arrElement = ["item 1","item 2","item 3","item 4"];
  color: string;
  dataHandler(data){
    this.color = data;
  }
}
