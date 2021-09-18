"use strict";
(function () {
    var addNumber = function (a, b) { return a + b; };
    var greet = function (nombre) { return "Hola " + nombre; };
    var saveToWorld = function () { return "El Mundo est\u00E1 salvado!"; };
    var myFunction;
    //!myFunction=10;
    //!console.log(myFunction);
    //?myFunction=addNumber
    //?console.log(myFunction(1 , 2) );
    //* myFunction=greet
    //* console.log(myFunction('Pedo') );
    myFunction = saveToWorld;
    console.log(myFunction());
})();
