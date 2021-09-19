"use strict";
(function () {
    var flash = {
        name: "Barri Alen",
        edad: 14,
        powers: ['Super Velocidad', 'Viajar en el tiempo'],
    };
    var superman = {
        name: "Clark Kent",
        edad: 30,
        powers: ['Super Velocidad', 'Volar'],
    };
    flash = {
        name: "Clark Kent",
        edad: 25,
        powers: ['Super Velocidad', 'Volar', 'SuperFuerza'],
        getName: function () {
            return this.name;
        }
    };
    console.log(flash.getName());
})();
//# sourceMappingURL=objects.js.map