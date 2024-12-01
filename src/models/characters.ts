
import { Enemy } from "./enemy";
import { Item } from "./items";
import { Mission } from "./mission";

  export class Character {
    private name: string;
    private level: number;
    private health: number;
    private experience: number;
  
    constructor(name: string, level: number, health: number, experience: number) {
      this.name = name;
      this.level = level;
      this.health = health;
      this.experience = experience;
    }
  
    // Getters y Setters
    getName(): string {
      return this.name;
    }
  
    getLevel(): number {
      return this.level;
    }
  
    getHealth(): number {
      return this.health;
    }

    reduceHealth(damage: number): void {
      this.health = Math.max(0, this.health - damage);
    }

    getExperience(): number {
      return this.experience;
    }
  
    setHealth(health: number): void {
      this.health = health;
    }
    
    gainExperience(exp: number): void {
      this.experience += exp;
      console.log(`${this.name} gana ${exp} puntos de experiencia.`);
      
      if (this.experience >= this.level * 100) {
        this.levelUp();
      }
    }
    
    levelUp(): void {
      this.level++;
      this.health += 20; // Incrementa salud máxima al subir de nivel
      console.log(`${this.getName()} sube al nivel ${this.getLevel()}! 🎉 Salud incrementada a ${this.getHealth()}.`);
    }
  
    gainReward(mission:Mission):void{

      console.log(` ${this.getName()} ha recibido ${mission.getReward()} puntos de recompensa por su victoria 🏆!`)
    }
   attack( enemy: Enemy, item: Item): void {

    if (this.getHealth() <= 0) {
      console.log(`${this.name} no puede atacar porque está fuera de combate.`);
      return;
    }
  
    if (enemy.getHealth() <= 0) {
      console.log(`${enemy.getName()} ya ha sido derrotado.`);
      return;
    }
    console.log(`${this.getName()} utiliza ${item.getname()} para atacar a su enemigo el ${enemy.getName()}`)
    // reduce la salud del enemigo
      enemy.reduceHealth(item.getPower());

      }

  }
 