"use strict";
(() => {
    class Aveger {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        static getAvgAge() {
            return this.name;
        }
        bio() {
            return `${this.name} (${this.team})`;
        }
    }
    Aveger.age = 35;
    const antMan = new Aveger('AntMan', 'Capitan', 'Scott Lang');
    console.log(antMan);
    console.log(antMan.bio());
    console.log(Aveger.getAvgAge());
})();
//# sourceMappingURL=main.js.map