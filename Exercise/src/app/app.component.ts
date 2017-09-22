import { Component } from '@angular/core';
import { HttpService} from "./http.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Practise exercise';
  posts = [];
  pipeargs : string = "";

  constructor( private http: HttpService){}

  ngOnInit(){
    this.http.getPosts().subscribe(
        (respond) => {
          console.log(respond.json());
          this.posts = respond.json();
          console.log(this.posts);
        },
        (error)=> console.log(error),
        () => {
          console.log("completed");
        });

  }

}
