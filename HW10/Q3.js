"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseObject_1 = require("./BaseObject");
class Rectangle extends BaseObject_1.BaseObject {
    constructor(width, length) {
        super();
        this.width = width;
        this.length = length;
    }
    calSize() {
        return this.width * this.length;
    }
}
console.log(new Rectangle(5, 2).calSize());
