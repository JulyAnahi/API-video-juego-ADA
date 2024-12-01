import { Character } from "./characters";
export enum MissionType {
    Main = "Main",
    Side = "Side",
    Event = "Event",
  }
  
  export class Mission {
    constructor(
      public description: string,
      public difficulty: number,
      public reward: number,
      public type: MissionType
    ) {}
  
  getDescription() :string{
    return this.description
  }
  
  getReward():number{
    return this.reward;
  }
  get typeMision():MissionType{
    return this.type;
  }
  
  
  }

  