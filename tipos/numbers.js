"use strict";
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
