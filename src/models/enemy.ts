
import { Character } from "./characters";
export class Enemy {
    constructor(
      private name: string,
      private health: number,
      private power:number
    ) {}
  
    getName(): string {
      return this.name;
    }
  
    getHealth(): number {
      return this.health;
    }

    getPower():number{
        return this.power;
    }
  
    reduceHealth(damage: number): void {
      this.health = Math.max(0, this.health - damage);
    }

    counterattack(character:Character):void{
      if (this.getHealth()<= 0){
        console.log('El enemigo no puede atacar esta fuera de combate 🤕😵');
      }
      
      if(character.getHealth()<= 0){
        console.log(`El personaje ${character.getName()} ha sido derrotado!!!`);
      }
      
      console.log( `${this.getName()} contraataca con ${this.getPower()} 💪💪💪🤙`);
      character.reduceHealth(this.power);
    }

  }
  