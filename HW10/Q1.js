"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Account_1 = require("./Account");
class Person {
    constructor() {
        this.name = "Asaad";
        this.bankAccount = new Account_1.Account();
        this.hobbies = ["Violin", "Cooking"];
    }
}
var myself = new Person();
myself.bankAccount.deposit(3000);
console.log(myself);
