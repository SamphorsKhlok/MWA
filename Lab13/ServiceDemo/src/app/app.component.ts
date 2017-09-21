import { Component } from '@angular/core';

import { DataService } from './service/data.service';
import { LogService } from './service/log.service';

@Component({
  selector: 'app-root',
  template: `
      <app-comp1></app-comp1><hr>
      <app-comp2></app-comp2>
  `,
  // because LogService is here now both Components will have same instance
  // we moved LogService here because it's been used in DataService 
  // we can move it to a higher level in module!
  // we have DataService here so both Components will have same instance
  // basically they now share same data
  // Also both Components will communicate through this service
  // One Component will emit() an event and the other Component will subscribe to the same Emitter 
  providers: [DataService, LogService]
})
export class AppComponent {
  

}
