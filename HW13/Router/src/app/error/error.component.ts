import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  template: `
    <p>
    Error : Page not found, please contact your admin.
    </p>
  `
})
export class ErrorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
