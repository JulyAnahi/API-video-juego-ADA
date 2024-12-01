"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startGame = startGame;
const readlineSync = require("readline-sync");
const gameLogic_1 = require("../controllers/gameLogic");
const mission_1 = require("../models/mission");
function startGame() {
    return __awaiter(this, void 0, void 0, function* () {
        var option;
        do {
            console.log("\n--- MENÚ PRINCIPAL ---");
            console.log("1. Crear personaje");
            console.log("2. Crear mision");
            console.log("3. Asignar mision a personaje");
            console.log("4. Listar personajes");
            console.log("5. Listar misiones");
            console.log("6. Crear enemigo");
            console.log("7. Listar enemigos");
            console.log("8. Atacar enemigo");
            console.log("9. Crear inventario");
            console.log('10. Listar inventario');
            console.log("0. Salir");
            option = parseInt(readlineSync.question("\nSeleccione una opcion: "), 10);
            switch (option) {
                case 1:
                    handleCreateCharacter();
                    break;
                case 2:
                    handleCreateMission();
                    break;
                case 3:
                    handleAssignMission();
                    break;
                case 4:
                    handleListCharacters();
                    break;
                case 5:
                    handleListMissions();
                    break;
                case 6:
                    handleCreateEnemy();
                    break;
                case 7:
                    handleListEnemies();
                    break;
                case 8:
                    yield handleAttackEnemy();
                    break;
                case 9:
                    handleCreateInventory();
                    break;
                case 10:
                    handledListInventory();
                    break;
                case 0:
                    console.log("Saliendo del juego...");
                    break;
                default:
                    console.log("Opcion invalida. Intente nuevamente.");
            }
        } while (option !== 0);
    });
}
function handleCreateCharacter() {
    const name = readlineSync.question("Ingrese el nombre del personaje: ");
    const level = parseInt(readlineSync.question("Ingrese el nivel inicial del personaje(numerico): "), 10);
    const health = parseInt(readlineSync.question("Ingrese la salud inicial del personaje(numerico): "), 10);
    const experience = 0;
    (0, gameLogic_1.createCharacter)(name, level, health, experience);
    console.log(`\nPersonaje creado: ${name} (Nivel: ${level}, Salud: ${health})`);
}
function handleCreateMission() {
    const description = readlineSync.question("Ingrese la descripcion de la mision: ");
    const difficulty = parseInt(readlineSync.question("Ingrese la dificultad de la mision (numerico): "), 10);
    const reward = parseInt(readlineSync.question("Ingrese la recompensa de la mision: "), 10);
    console.log("Seleccione el tipo de mision:");
    console.log("1. Main");
    console.log("2. Side");
    console.log("3. Event");
    const typeOption = parseInt(readlineSync.question("Ingrese una opcion: "), 10);
    const type = typeOption === 1 ? mission_1.MissionType.Main : typeOption === 2 ? mission_1.MissionType.Side : mission_1.MissionType.Event;
    (0, gameLogic_1.createMission)(description, difficulty, reward, type);
    console.log(`\nMision creada: ${description} (Dificultad: ${difficulty}, Recompensa: ${reward}, Tipo: ${type})`);
}
function handleAssignMission() {
    const characters = (0, gameLogic_1.listCharacters)();
    const missions = (0, gameLogic_1.listMissions)();
    console.log("\n--- LISTA DE PERSONAJES ---");
    characters.forEach((character, index) => {
        console.log(`${index + 1}. ${character.getName()}`);
    });
    const characterIndex = parseInt(readlineSync.question("Seleccione un personaje (numero): "), 10) - 1;
    console.log("\n--- LISTA DE MISIONES ---");
    missions.forEach((mission, index) => {
        console.log(`${index + 1}. ${mission.description}`);
    });
    const missionIndex = parseInt(readlineSync.question("Seleccione una mision (numero): "), 10) - 1;
    (0, gameLogic_1.assignMission)(characters[characterIndex], missions[missionIndex]);
}
function handleListCharacters() {
    const characters = (0, gameLogic_1.listCharacters)();
    console.log("\n--- LISTA DE PERSONAJES ---");
    characters.forEach((character) => {
        console.log(`${character.getName()} (Nivel: ${character.getLevel()}, Salud: ${character.getHealth()})`);
    });
}
function handleListMissions() {
    const missions = (0, gameLogic_1.listMissions)();
    console.log("\n--- LISTA DE MISIONES ---");
    missions.forEach((mission) => {
        console.log(`${mission.description} (Dificultad: ${mission.difficulty}, Recompensa: ${mission.reward})`);
    });
}
function handleCreateEnemy() {
    const name = readlineSync.question("Ingrese el nombre del enemigo: ");
    const health = parseInt(readlineSync.question("Ingrese la salud del enemigo: "), 10);
    const power = parseInt(readlineSync.question("ingrese la fuerza del enemigo: "), 10);
    (0, gameLogic_1.createEnemy)(name, health, power);
    console.log(`\nEnemigo creado: ${name} (Salud: ${health}) Fuerza:${power}`);
}
function handleCreateInventory() {
    const name = readlineSync.question('Ingrese el nombre del arma : ');
    const power = parseInt(readlineSync.question('Ingrese el poder(numerico): '));
    //const value =parseInt(readlineSync.question('Ingrese el valor : '))
    (0, gameLogic_1.createInventory)(name, power);
    console.log(`\nInventario creado: ${name}, Poder: ${power}`);
}
function handledListInventory() {
    const inventory = (0, gameLogic_1.listInventory)();
    console.log("\n--- LISTA DE ITEMS EN EL INVENTARIO ---");
    inventory.forEach((item) => {
        console.log(`${item.getname()} (Poder: ${item.getPower()})`);
    });
}
function handleListEnemies() {
    const enemies = (0, gameLogic_1.listEnemies)();
    console.log("\n--- LISTA DE ENEMIGOS ---");
    enemies.forEach((enemy) => {
        console.log(`\n${enemy.getName()} (Salud: ${enemy.getHealth()}) Fuerza:${enemy.getPower}`);
    });
}
function handleAttackEnemy() {
    return __awaiter(this, void 0, void 0, function* () {
        const characters = (0, gameLogic_1.listCharacters)();
        const enemies = (0, gameLogic_1.listEnemies)();
        const items = (0, gameLogic_1.listInventory)(); // Obtener la lista de ítems
        const missiones = (0, gameLogic_1.listMissions)();
        if (characters.length === 0 || enemies.length === 0) {
            console.log("No hay personajes o enemigos disponibles.");
            return;
        }
        console.log("\n--- LISTA DE PERSONAJES ---");
        characters.forEach((character, index) => {
            console.log(`${index + 1}. ${character.getName()} (Salud:${character.getHealth()})`);
        });
        const characterIndex = parseInt(readlineSync.question("Seleccione un personaje (numero): "), 10) - 1;
        console.log("\n--- LISTA DE ENEMIGOS ---");
        enemies.forEach((enemy, index) => {
            console.log(`${index + 1}. ${enemy.getName()} (Salud: ${enemy.getHealth()})`);
        });
        console.log("\n--- LISTA DE MISIONES ---");
        missiones.forEach((missions, index) => {
            console.log(`${index + 1}. ${missions.getDescription()} (recompensa: ${missions.getReward()})\n`);
        });
        console.log("\n--- LISTA DE ITEMS EN EL INVENTARIO ---");
        items.forEach((i, index) => {
            console.log(`${index + 1}. ${i.getname()} (Poder: ${i.getPower()})\n`);
        });
        const enemyIndex = parseInt(readlineSync.question("Seleccione un enemigo (numero): "), 10) - 1;
        const itemIndex = parseInt(readlineSync.question("Seleccione un item del inventario(numero): "), 10) - 1;
        const missIndex = parseInt(readlineSync.question("Seleccione una mision (numero): "), 10) - 1;
        const character = characters[characterIndex];
        const enemy = enemies[enemyIndex];
        const item = items[itemIndex];
        const misio = missiones[missIndex];
        // attackEnemy(character, enemy, item);
        yield (0, gameLogic_1.battle)(character, enemy, item, misio);
    });
}
