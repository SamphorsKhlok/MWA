import {Account} from "./Account";

class Person {
    name: string = "Asaad";
    bankAccount: Account;
    hobbies: string[] = ["Violin","Cooking"];
}

var myself = new Person();
myself.bankAccount.deposit(3000);
console.log(myself);