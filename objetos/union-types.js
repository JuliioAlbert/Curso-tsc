"use strict";
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