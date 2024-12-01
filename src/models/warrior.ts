import { character } from "./characters";
class warrior extends character{
    constructor(
        public name:string,
        public level:number,
        public health:number,
        public experience:number,
        public attack:number,
        public defense: number
    ){
        super(name, level, health,experience)
    }
}