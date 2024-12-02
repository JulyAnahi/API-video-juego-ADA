# SIMULACION DE UN JUEGO EN NODE JS

## DESCRIPCIÓN

    Esta aplicación fue diseñada siguiendo el patrón MVC la intención de simular un juego interactivo en el que los usuarios tienen la libertad de crear y personalizar sus propios personajes, enemigos, misiones e inventario de armas, ofreciendo una experiencia original y única para cada jugador.Contiene un menú dinámico que te guiará en la selección de opciones de manera intuitiva.


## INDICE

- [Instalación](#instalación)
- [Ejecutar](#ejecutar)
- [Estructura](#estructura)
- [Uso](#uso)
- [Funciones](#Funciones)
- [Autor](#autor)

    
## Instalación
    cd /ruta/donde/quieres/guardar
    git clone https://github.com/JulyAnahi/API-video-juego-ADA.git

### Configuración del entorno
    Instalar las dependencias con:
        Previamente tener instalado nodeJS.
        Inicializar Node con npm init -y
        Instalar TypeScript con(local) npm install typescript --save-dev.
        Generar tsconfig.json con npx tsc --init.
        Instalar readline-sync npm install readline-sync  para TypeScript npm install --save-dev @types/readline-sync
    Configurar package.json:
        "scripts":{
        "start": "ts-node src/index.ts",
        "build": "tsc",
        "run": "node dist/index.js",
        "clean": "rimraf dist"
        }

## Ejecutar
    Para compilar y ejecutar el proyecto: 
    npm run build y npm run start

## Estructura

API PARA UN VIDEO JUEGO:
API PARA UN VIDEO JUEGO
├── node_modules
├── src
│   ├── config
│   ├── controllers
│   └── models
├── index.ts
├── package.json
├── README.md
└── tsconfig.json

## Uso
    
    Para crear los personajes, misiones, enemigos e inventario utilize las siguiente opciones numericas del menú:

        ¡Bienvenido al juego 🎮!

        --- MENÚ PRINCIPAL ---
        1. Crear personaje
        2. Crear mision
        6. Crear enemigo
        8. Crear inventario
    
    Para listar lo creado las siguientes opciones:

        ¡Bienvenido al juego 🎮!

        --- MENÚ PRINCIPAL ---
        
        4. Listar personajes
        5. Listar misiones
        7. Listar enemigos
        9. Listar inventario
    
    Para la función batalla la siguiente opción:

        ¡Bienvenido al juego 🎮!

        --- MENÚ PRINCIPAL ---
        10. Atacar enemigo

    Para salir del juego:

         ¡Bienvenido al juego 🎮!

        --- MENÚ PRINCIPAL ---
        0. Salir

    [!IMPORTANT]
    Asegurate siempre de que los personajes seleccionados para la battalla tengan vida.

## Funciones principales

    ---Funcion Main---
    async function startGame(): Promise <void> Función principal ubicada en config/view.ts que contiene el menú principal desde el cual se llama a las demás funciones.

    En controller/gameLogic.ts se encuentran las funciones para crear y listar:

    --Crea personajes--
    createCharacter(name: string, level: number, health: number, experience: number): Character 

    --Crea misiones--
    createMission(description: string, difficulty: number, reward: number, type: string): Mission 

    --Crea el inventario--
    createInventory( name: string,power:number):Item

    ---Funcion Batalla--
     async function battle(character: Character, enemy: Enemy, item: Item, missions:Mission): Promise<void> 

    ---funcion para efectos especiales---
     async function specialEffects(): Promise<void> funcion que genera los ejectos de iconos en la batalla.

## Autor
    creado por Julieta Ruiz 💙
  













