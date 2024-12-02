"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enemy = void 0;
class Enemy {
    constructor(name, health, power) {
        this.name = name;
        this.health = health;
        this.power = power;
    }
    getName() {
        return this.name;
    }
    getHealth() {
        return this.health;
    }
    getPower() {
        return this.power;
    }
    reduceHealth(damage) {
        this.health = Math.max(0, this.health - damage);
    }
    counterattack(character) {
        if (this.getHealth() <= 0) {
            console.log('El enemigo no puede atacar esta fuera de combate 🤕😵');
        }
        if (character.getHealth() <= 0) {
            console.log(`El personaje ${character.getName()} ha sido derrotado!!!`);
        }
        console.log(`${this.getName()} contraataca con ${this.getPower()} 💪💪💪🤙 de poder!`);
        character.reduceHealth(this.power);
    }
}
exports.Enemy = Enemy;
