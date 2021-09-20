"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    const avengers = {
        nick: 'Samuel L. Jackson',
        ironman: "Robert Downey Jr.",
        vision: 'Paul Bettan',
        activos: true,
        poder: 1234.23456,
    };
    const printAvenger = (_a) => {
        var { ironman } = _a, resto = __rest(_a, ["ironman"]);
        console.log({ ironman }, resto.vision);
    };
    const avengersArr = ['Cap.America', true, 150.144];
    const [capitan, ironMan, num] = avengersArr;
    console.log({ ironMan, capitan });
})();
(() => {
    const name = `Julio`;
    const getName = () => {
        console.log("Viejo get Name");
    };
    getName();
})();
//# sourceMappingURL=main.js.map