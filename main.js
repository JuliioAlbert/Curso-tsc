"use strict";
(() => {
    class Mutante {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class Xmen extends Mutante {
        salvarMundo() {
            return `Salvar el mundo!`;
        }
    }
    class Villian extends Mutante {
        conquistarMundo() {
            return `Mundo Conquistado!`;
        }
    }
    const wolverine = new Xmen("Wolverine", "Logan");
    const magento = new Villian("Magneto", "Mage");
    const printName = (character) => {
    };
    printName(wolverine);
})();
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
})();
(() => {
    class Aveger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
        getFullName() {
            return `${this.name}  ${this.realName}`;
        }
    }
    class Xmen extends Aveger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
        }
        get fullName() {
            return `${this.name} - ${this.realName}`;
        }
        set fullName(name) {
            this.name = name;
        }
        getFullNameXmen() {
        }
    }
    const woll = new Xmen("Wolverine", 'Logan', true);
    woll.fullName = "Julio";
    woll.getFullNameXmen();
})();
(() => {
    class Apocalipsis {
        constructor(name) {
            this.name = name;
        }
        static callApocalipsis() {
            if (!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis("Soy Apocalipsis");
            }
            return Apocalipsis.instance;
        }
        changeName(newName) {
            this.name = newName;
        }
    }
    const apocalipsis = Apocalipsis.callApocalipsis();
    const apocalipsis1 = Apocalipsis.callApocalipsis();
    const apocalipsis2 = Apocalipsis.callApocalipsis();
    apocalipsis1.changeName("Sas");
    console.log(apocalipsis, apocalipsis1, apocalipsis2);
})();
//# sourceMappingURL=main.js.map