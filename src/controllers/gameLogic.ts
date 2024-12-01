import { Character, Item } from "../models/character";
import { Mission } from "../models/mission";

const characters: Character[] = [];
const missions: Mission[] = [];

// Crear personaje
export function createCharacter(name: string, level: number, health: number, experience: number): Character {
  const character = new Character(name, level, health, experience);
  characters.push(character);
  return character;
}

// Crear misión
export function createMission(description: string, difficulty: number, reward: number, type: string): Mission {
  const mission = new Mission(description, difficulty, reward, type as any);
  missions.push(mission);
  return mission;
}

// Asignar misión
export function assignMission(character: Character, mission: Mission): void {
  console.log(`${character.getName()} ha recibido la misión: ${mission.getDescription()}`);
}

// Completar misión
export function completeMission(character: Character, mission: Mission): void {
  if (character.getLevel() >= mission.getDifficulty()) {
    console.log(`${character.getName()} ha completado la misión: ${mission.getDescription()}`);
    character.addExperience(mission.getReward());
  } else {
    console.log(`${character.getName()} no puede completar la misión: ${mission.getDescription()}. Nivel insuficiente.`);
  }
}

// Listar personajes
export function listCharacters(): Character[] {
  return characters;
}

// Listar misiones
export function listMissions(): Mission[] {
  return missions;
}
