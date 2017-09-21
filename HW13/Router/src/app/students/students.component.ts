import { Component, OnInit } from '@angular/core';
import {DbService} from "../db.service";

@Component({
  selector: 'app-students',
  template:`
  <ul>
    <li *ngFor="let item of data"><a href="/profile/{{item.id}}">{{item.name}}</a></li>
  </ul>
  `
})
export class StudentsComponent implements OnInit {
  data = [];
  constructor(private service : DbService) { }

  ngOnInit() {
    this.data = this.service.getAllData();
  }

}
