export class Account{
    money: number;
    constructor(){
        this.money = 2000;
    }

    deposit(value:number):void {
        this.money += value;
    }
}