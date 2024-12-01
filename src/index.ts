import { createCharacter, createMission, assignMission, completeMission, listCharacters, listMissions } from "./controllers/gameLogic";
import { MissionType } from "./models/mission";

// Crear personajes
const hero = createCharacter("Héroe", 5, 100, 0);
const villain = createCharacter("Villano", 3, 80, 0);

// Crear misiones
const savePrincess = createMission("Salvar a la princesa", 4, 50, MissionType.Main);
const findTreasure = createMission("Encontrar el tesoro", 2, 30, MissionType.Side);

// Asignar misiones
assignMission(hero, savePrincess);
assignMission(villain, findTreasure);

// Completar misiones
completeMission(hero, savePrincess);
completeMission(villain, findTreasure);

// Simular un ataque
hero.attack(villain, 20);

// Listar personajes y misiones
console.log("\n--- Personajes ---");
listCharacters().forEach((character) => {
  console.log(`${character.getName()} (Nivel: ${character.getLevel()}, Salud: ${character.getHealth()}, Experiencia: ${character.getExperience()})`);
});

console.log("\n--- Misiones ---");
listMissions().forEach((mission) => {
  console.log(`${mission.getDescription()} (Dificultad: ${mission.getDifficulty()}, Recompensa: ${mission.getReward()})`);
});
