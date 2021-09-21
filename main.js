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
(() => {
    class Aveger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log("constructor -> Aveger");
        }
        getFullName() {
            return `${this.name}  ${this.realName}`;
        }
    }
    class Xmen extends Aveger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
            console.log("Constructor Xmen");
        }
        getFullNameXmen() {
            console.log(super.getFullName());
        }
    }
    const woll = new Xmen("Wolverine", 'Logan', true);
    console.log(woll);
    woll.getFullNameXmen();
})();
//# sourceMappingURL=main.js.map