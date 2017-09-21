import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Rx';
import {DbService} from "../db.service";

@Component({
  selector: 'app-profile',
  template:
  `
    <div><label>Name :</label>{{profile.name}}</div>
    <div><label>Student ID :</label>{{profile.stuID}}</div>
    <div><label>eMail :</label>{{profile.email}}</div>
  `
})
export class ProfileComponent implements OnInit {
  subscription: Subscription;
  id: string;
  profile = {};
  constructor(private activatedRoute: ActivatedRoute,private service: DbService) {
    this.subscription = activatedRoute.params.subscribe(
      (params)=> this.id = params['id']
    );
  }

  ngOnInit() {
    if(this.id){
      this.profile = this.service.getData(this.id);
    }
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
