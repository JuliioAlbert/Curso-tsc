"use strict";
(function () {
    var a = 10;
    console.log(a);
})();
(function () {
    var batman = 'Bruce';
    var superman = 'Clark';
    var existe = false;
    var parejaHeroes = [batman, superman];
    var villano = ['Lex Lutor', 5, true];
    var aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    var Poder;
    (function (Poder) {
        Poder[Poder["Superman"] = 100] = "Superman";
        Poder[Poder["Flash"] = 0] = "Flash";
        Poder[Poder["batman"] = 1] = "batman";
        Poder[Poder["acuaman"] = 0] = "acuaman";
    })(Poder || (Poder = {}));
    var fuerzaFlash = Poder.Flash;
    var fuerzaSuperman = Poder.Superman;
    var fuerzaBatman = Poder.batman;
    var fuerzaAcuaman = Poder.acuaman;
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    var poder = '100';
    var largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
(function () {
    var fullName = function (fistName, lastName, upper) {
        if (upper === void 0) { upper = false; }
        if (upper) {
            return (fistName + " " + (lastName !== null && lastName !== void 0 ? lastName : 'No lastName')).toUpperCase();
        }
        else {
            return fistName + " " + (lastName !== null && lastName !== void 0 ? lastName : 'No lastName');
        }
    };
    var name = fullName("Tony");
    console.log({ name: name });
})();
(function () {
    var fullName = function (fistName, lastName) {
        return fistName + " " + (lastName !== null && lastName !== void 0 ? lastName : 'No lastName');
    };
    var name = fullName("Tony");
    console.log({ name: name });
})();
(function () {
    var fullName = function (fistName, lastName) {
        return fistName + " " + lastName;
    };
    var name = fullName("Tony", "Stark");
    console.log({ name: name });
})();
(function () {
    var fullName = function (firstName) {
        var restArg = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restArg[_i - 1] = arguments[_i];
        }
        return firstName + " " + restArg.join(' ');
    };
    var superman = fullName("Clark", "Joseph", "Kent");
    console.log({ superman: superman });
})();
(function () {
    var addNumber = function (a, b) { return a + b; };
    var greet = function (nombre) { return "Hola " + nombre; };
    var saveToWorld = function () { return "El Mundo est\u00E1 salvado!"; };
    var myFunction;
    myFunction = saveToWorld;
    console.log(myFunction());
})();
(function () {
    var hero = 'Flash';
    function returnName() {
        return hero;
    }
    var activeBati = function () { return 'Bati Señal Activada'; };
    var heroName = returnName();
    console.log(returnName());
    console.log(activeBati());
})();
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
(function () {
    var myCustomVariable = 'Julio';
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
(function () {
    var avenger = 123;
    var exist;
    var power;
    avenger = "Dr-Strage";
    console.log(avenger.charAt(0));
    console.log(avenger.charAt(0));
    avenger = 124.23433;
    console.log(avenger.toFixed(2));
    console.log(avenger.toFixed(2));
    console.log(exist);
    console.log(power);
})();
(function () {
    var numbers = [1, 2, 3, 4];
    var villanos = ["Dormanu", "Duende Verde", "Caca"];
    villanos.forEach(function (e) { return console.log(e.toUpperCase()); });
    numbers.forEach(function (e) { return console.log(e); });
    console.log(numbers);
})();
(function () {
    var isSuperman = true;
    var isBatman = false;
    console.log({ isBatman: isBatman });
})();
(function () {
    var AudioLavel;
    (function (AudioLavel) {
        AudioLavel[AudioLavel["min"] = 0] = "min";
        AudioLavel[AudioLavel["medum"] = 1] = "medum";
        AudioLavel[AudioLavel["max"] = 2] = "max";
    })(AudioLavel || (AudioLavel = {}));
    var currentAudio = AudioLavel.max;
    console.log({ currentAudio: currentAudio });
    console.log(AudioLavel);
})();
(function () {
    var error = function (message) {
        if (false) {
            throw new Error(message);
        }
        return 1;
    };
    error('Auxilio');
})();
(function () {
    var isActive = true;
    console.log(isActive);
})();
(function () {
    var avengers = 10;
    console.log(avengers);
    var villians = 20;
    if (avengers < villians) {
        console.log("Ya valio nepe");
    }
    else {
        console.log("Nos la pelan");
    }
    avengers = Number('1234A');
    console.log({ avengers: avengers });
})();
(function () {
    var _a;
    var batman = 'Batma\'n';
    var linternaV = 'Linterna Verde';
    var flash = "Flash";
    var abc = 123;
    console.log("I'm " + batman + ", " + abc + " ");
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No hay caracter');
    console.log(flash.toUpperCase());
})();
(function () {
    var hero = ['Dr.Strage', 1000, true];
    hero[1] = 123,
        hero[0] = 'Spidy';
    hero[2] = false;
    console.log(hero);
})();
(function () {
    function callBatman() {
    }
    var callSuperman = function () {
    };
    var a = callBatman();
    console.log(a);
})();
//# sourceMappingURL=main.js.map