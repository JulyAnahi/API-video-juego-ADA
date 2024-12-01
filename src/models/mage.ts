import { Character } from "./characters";
class mage extends Character{
    constructor(
        public name:string,
        public level:number,
        public health:number,
        public experience:number,
        public magicPower:number,
        public mana: number
    ){
        super(name, level, health,experience)
    }
    atacar(objetivo: Character): void {
        if(this.mana >=10){
            const damage= this.level*4; //el mago es mas poderoso
            this.mana -=10;
            console.log(`${this.getName} lanza un hechizo a ${objetivo.getName} causando ${damage} puntos de daño`)
            objetivo.recibirDanio(damage)
        }else{
            console.log(`${this.getName()} no tiene sufuciente mana para atacar.`)
        }
    }
}