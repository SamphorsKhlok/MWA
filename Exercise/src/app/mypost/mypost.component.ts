import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-mypost',
  templateUrl: './mypost.component.html',
  styleUrls: ['./mypost.component.css']
})
export class MypostComponent implements OnInit {
  @Input() data;
  post = {};
  constructor() { }

  ngOnInit() {
    this.post = this.data;
  }

}
