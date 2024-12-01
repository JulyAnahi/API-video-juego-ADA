"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
class Item {
    constructor(name, power) {
        this.name = name;
        this.power = power;
    }
    getname() {
        return this.name;
    }
    getPower() {
        return this.power;
    }
}
exports.Item = Item;
