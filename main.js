"use strict";
(() => {
    let myCustomVariable = 'Julio';
    console.log(typeof myCustomVariable);
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: "Julio",
        powers: [1],
        edad: 21,
    };
    console.log(myCustomVariable);
})();
(() => {
    class Mutant {
        mutantPower(id) {
            return this.name + this.realName;
        }
    }
})();
(() => {
    const cliente = {
        name: "Julio",
        edad: 23,
        address: {
            id: 21,
            zip: 'KYW WE',
            city: 'San juan del Rio'
        },
        getFullAddress(id) {
            return `${this.address.city}`;
        }
    };
    cliente.edad;
})();
(() => {
    let addNumberFunc;
    addNumberFunc = (a, b) => {
        return 10;
    };
})();
//# sourceMappingURL=main.js.map