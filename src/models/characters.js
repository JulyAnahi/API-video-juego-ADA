"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Character = void 0;
class Character {
    constructor(name, level, health, experience) {
        this.name = name;
        this.level = level;
        this.health = health;
        this.experience = experience;
    }
    // Getters y Setters
    getName() {
        return this.name;
    }
    getLevel() {
        return this.level;
    }
    getHealth() {
        return this.health;
    }
    reduceHealth(damage) {
        this.health = Math.max(0, this.health - damage);
    }
    getExperience() {
        return this.experience;
    }
    setHealth(health) {
        this.health = health;
    }
    gainExperience(exp) {
        this.experience += exp;
        console.log(`${this.name} gana ${exp} puntos de experiencia.`);
        if (this.experience >= this.level * 100) {
            this.levelUp();
        }
    }
    levelUp() {
        this.level++;
        this.health += 20; // Incrementa salud máxima al subir de nivel
        console.log(`${this.getName()} sube al nivel ${this.getLevel()}! 🎉 Salud incrementada a ${this.getHealth()}.`);
    }
    gainReward(mission) {
        console.log(` ${this.getName()} ha recibido ${mission.getReward()} puntos de recompensa por su victoria 🏆!`);
    }
    attack(enemy, item) {
        if (this.getHealth() <= 0) {
            console.log(`${this.name} no puede atacar porque está fuera de combate.`);
            return;
        }
        if (enemy.getHealth() <= 0) {
            console.log(`${enemy.getName()} ya ha sido derrotado.`);
            return;
        }
        console.log(`${this.getName()} utiliza ${item.getname()} para atacar a su enemigo el ${enemy.getName()}`);
        // reduce la salud del enemigo
        enemy.reduceHealth(item.getPower());
    }
}
exports.Character = Character;
