import {BaseObject} from "./BaseObject";
class Rectangle extends BaseObject{
    constructor(width:number, length:number){
        super();
        this.width = width;
        this.length = length;
    }

    calSize():number{
        return this.width * this.length;
    }
}

console.log(new Rectangle(5,2).calSize());
