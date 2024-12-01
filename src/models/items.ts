
export class Item{
    private name: string;
    private power:number;

    constructor(name: string,power:number){
        this.name= name;
        this.power=power;
    }

 getname():string{
    return this.name
 }
 getPower():number{
    return this.power
 }
}