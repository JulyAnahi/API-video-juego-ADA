export class Item {
    constructor(public name: string, public quantity: number) {}
  }
  
  export class Character {
    private inventory: Item[] = [];
  
    constructor(
      private name: string,
      private level: number,
      private health: number,
      private experience: number
    ) {}
  
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
  
    getExperience(): number {
      return this.experience;
    }
  
    setHealth(health: number): void {
      this.health = health;
    }
  
    addExperience(points: number): void {
      this.experience += points;
      console.log(`${this.name} ha ganado ${points} puntos de experiencia.`);
    }
  
    // Métodos adicionales
    addItem(item: Item): void {
      this.inventory.push(item);
      console.log(`${this.name} ha recibido el objeto: ${item.name}`);
    }
  
    attack(target: Character, damage: number): void {
      console.log(`${this.name} ataca a ${target.getName()} y causa ${damage} de daño.`);
      target.setHealth(target.getHealth() - damage);
      if (target.getHealth() <= 0) {
        console.log(`${target.getName()} ha sido derrotado.`);
      }
    }
  }
  