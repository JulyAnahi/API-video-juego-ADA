import { Character} from "../models/characters";
import { Mission, MissionType} from "../models/mission";
import { Enemy} from "../models/enemy";
import { Item } from "../models/items";

//
const characters: Character[] = [];
const missions: Mission[] = [];
const enemies: Enemy[] = [];
const inventory:Item[]=[];

// Crear un enemigo
export function createEnemy(name: string, health: number, power:number): Enemy {
  const enemy = new Enemy(name, health, power);
  enemies.push(enemy);
  return enemy;
}

// Listar enemigos
export function listEnemies(): Enemy[] {
  return enemies;
}

// Crea el inventario de Items
export function createInventory( name: string,power:number):Item{
    const item=new Item(name,power);
     inventory.push(item)
     return item
 }
 
 // funcion asincrona para generar efectos de batalla
 export async function specialEffects(): Promise<void> {
  const efectos = ["🔥", "⚔", "💥"];
  
  for (const efecto of efectos) {
    console.log(efecto); // Imprime cada efecto
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Pausa de 1 segundo
  }

  console.log(" ");
}


export async function battle(character: Character, enemy: Enemy, item: Item, missions:Mission): Promise<void> {

  try{ //bloque try/catch para caturar errores sin controlar

      //validación de personajes
      if(enemy.getHealth()<= 0){
        console.log('El enemigo no tiene vida o no existe.Ingrese uno nuevo por favor.');
            }else if(character.getHealth()<=0){
                console.log('El personaje no tiene vida o no existe.Por favor ingrese uno nuevo');
                    }else if(!item){
                      console.log('No existe el item o no fue seleccionado');
                      return
                    }else{
                      console.log(`¡La batalla comienza entre ${character.getName()} y ${enemy.getName()}!`);
                    }

      // Mientras ambos personajes tengan vida, continúa la batalla
      while (character&& enemy&& character.getHealth() > 0 && enemy.getHealth() > 0) {
        console.log("\nTurno del personaje:");
        character.attack(enemy, item);
        await specialEffects();

        // Verificar si el enemigo ha sido derrotado
        if (enemy.getHealth() <= 0) {
          console.log(`¡${enemy.getName()} ha sido derrotado!`);
          character.levelUp();
          character.gainExperience(enemy.getPower());
              if(missions){
                character.gainReward(missions)
              }else{
                console.log('No hay misiones cargadas')
              }
          break; // Sale del bucle
        }

        console.log("\nTurno del enemigo:");
        enemy.counterattack(character);
        await specialEffects();

        // Verifica si el personaje ha sido derrotado
        if (character.getHealth() <= 0) {
          console.log(`¡${character.getName()} ha sido derrotado!`);
          break; // Sale del bucle
        }
      }
    }catch(error){
      console.error('Ha ocurrido un error en la ejecucion de la batalla',error);
    } 
}



export function createCharacter(name: string, level: number, health: number, experience: number): Character {
  const character = new Character(name, level, health, experience);
  characters.push(character);
  return character;
}

export function createMission(description: string, difficulty: number, reward: number, type: string): Mission {
  const mission = new Mission(description, difficulty, reward, type as MissionType);
  
     missions.push(mission);

  return mission;
  }


export function listInventory():Item[]{
    return inventory;
}
export function assignMission(character: Character, mission: Mission): void {
  console.log(`${character.getName()} ha recibido la mision: ${mission.description}`);
}

export function listCharacters(): Character[] {
  return characters;
}

export function listMissions(): Mission[] {
  return missions;
}
