"use strict";
class Person {
    constructor() {
        this._firstName = "";
        this.enumerable = true;
        this.configurable = true;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value.toUpperCase();
    }
}
let person = new Person();
person.firstName = "Asaad";
console.log(person.firstName);
