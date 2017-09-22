import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class HttpService {
  urlPost: string = "http://jsonplaceholder.typicode.com/posts?userId=1";

  constructor(public http:Http) { }

  getPosts(){
    return this.http.get(this.urlPost);
  }

}
