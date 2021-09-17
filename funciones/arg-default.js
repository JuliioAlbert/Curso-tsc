"use strict";
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
