import { Injectable } from '@angular/core';
import { EventEmitter} from '@angular/core';

@Injectable()
export class DbService {
  emitter = new EventEmitter();
  data = [
    {id:'1', name:'Asaad Saad1', stuID:'12341', email:'asaad@mum.edu'},
    {id:'2', name:'Asaad Saad2', stuID:'12342', email:'asaad@mum.edu'},
    {id:'3', name:'Asaad Saad3', stuID:'12343', email:'asaad@mum.edu'},
  ];

  constructor() { }
  getAllData(){
    return this.data;
  }

  getData(id:string){
    let result = {};
    this.data.forEach(function (item) {
      if(item.id == id){
        result = item;
      }
    });

    return result;
  }

  isIDAvailable(id:string):boolean{
    let available:boolean = false;
    this.data.forEach(function (item) {
      if(item.id == id){
        available = true;
      }
    });

    return available;
  }
}
