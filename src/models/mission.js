"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mission = exports.MissionType = void 0;
var MissionType;
(function (MissionType) {
    MissionType["Main"] = "Main";
    MissionType["Side"] = "Side";
    MissionType["Event"] = "Event";
})(MissionType || (exports.MissionType = MissionType = {}));
class Mission {
    constructor(description, difficulty, reward, type) {
        this.description = description;
        this.difficulty = difficulty;
        this.reward = reward;
        this.type = type;
    }
    getDescription() {
        return this.description;
    }
    getReward() {
        return this.reward;
    }
    get typeMision() {
        return this.type;
    }
}
exports.Mission = Mission;
