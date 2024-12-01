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
exports.createEnemy = createEnemy;
exports.listEnemies = listEnemies;
exports.createInventory = createInventory;
exports.specialEffects = specialEffects;
exports.battle = battle;
exports.createCharacter = createCharacter;
exports.createMission = createMission;
exports.listInventory = listInventory;
exports.assignMission = assignMission;
exports.listCharacters = listCharacters;
exports.listMissions = listMissions;
const characters_1 = require("../models/characters");
const mission_1 = require("../models/mission");
const enemy_1 = require("../models/enemy");
const items_1 = require("../models/items");
//
const characters = [];
const missions = [];
const enemies = [];
const inventory = [];
// Crear un enemigo
function createEnemy(name, health, power) {
    const enemy = new enemy_1.Enemy(name, health, power);
    enemies.push(enemy);
    return enemy;
}
// Listar enemigos
function listEnemies() {
    return enemies;
}
// Crea el inventario de Items
function createInventory(name, power) {
    const item = new items_1.Item(name, power);
    inventory.push(item);
    return item;
}
// funcion asincrona para generar efectos de batalla
function specialEffects() {
    return __awaiter(this, void 0, void 0, function* () {
        const efectos = ["🔥", "⚔", "💥"];
        for (const efecto of efectos) {
            console.log(efecto); // Imprime cada efecto
            yield new Promise((resolve) => setTimeout(resolve, 1000)); // Pausa de 1 segundo
        }
        console.log(" ");
    });
}
function battle(character, enemy, item, missions) {
    return __awaiter(this, void 0, void 0, function* () {
        try { //bloque try/catch para caturar errores sin controlar
            //validación de personajes
            if (enemy.getHealth() <= 0) {
                console.log('El enemigo no tiene vida o no existe.Ingrese uno nuevo por favor.');
            }
            else if (character.getHealth() <= 0) {
                console.log('El personaje no tiene vida o no existe.Por favor ingrese uno nuevo');
            }
            else if (!item) {
                console.log('No existe el item o no fue seleccionado');
                return;
            }
            else {
                console.log(`¡La batalla comienza entre ${character.getName()} y ${enemy.getName()}!`);
            }
            // Mientras ambos personajes tengan vida, continúa la batalla
            while (character && enemy && character.getHealth() > 0 && enemy.getHealth() > 0) {
                console.log("\nTurno del personaje:");
                character.attack(enemy, item);
                yield specialEffects();
                // Verificar si el enemigo ha sido derrotado
                if (enemy.getHealth() <= 0) {
                    console.log(`¡${enemy.getName()} ha sido derrotado!`);
                    character.levelUp();
                    character.gainExperience(enemy.getPower());
                    if (missions) {
                        character.gainReward(missions);
                    }
                    else {
                        console.log('No hay misiones cargadas');
                    }
                    break; // Sale del bucle
                }
                console.log("\nTurno del enemigo:");
                enemy.counterattack(character);
                yield specialEffects();
                // Verifica si el personaje ha sido derrotado
                if (character.getHealth() <= 0) {
                    console.log(`¡${character.getName()} ha sido derrotado!`);
                    break; // Sale del bucle
                }
            }
        }
        catch (error) {
            console.error('Ha ocurrido un error en la ejecucion de la batalla', error);
        }
    });
}
function createCharacter(name, level, health, experience) {
    const character = new characters_1.Character(name, level, health, experience);
    characters.push(character);
    return character;
}
function createMission(description, difficulty, reward, type) {
    const mission = new mission_1.Mission(description, difficulty, reward, type);
    missions.push(mission);
    return mission;
}
function listInventory() {
    return inventory;
}
function assignMission(character, mission) {
    console.log(`${character.getName()} ha recibido la mision: ${mission.description}`);
}
function listCharacters() {
    return characters;
}
function listMissions() {
    return missions;
}
