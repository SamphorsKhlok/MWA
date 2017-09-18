"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Account {
    constructor() {
        this.money = 2000;
    }
    deposit(value) {
        this.money += value;
    }
}
exports.Account = Account;
