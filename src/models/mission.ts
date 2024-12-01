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
  
    getDescription(): string {
      return this.description;
    }
  
    getDifficulty(): number {
      return this.difficulty;
    }
  
    getReward(): number {
      return this.reward;
    }
  }
  