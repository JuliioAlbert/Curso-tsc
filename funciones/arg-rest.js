"use strict";
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
//# sourceMappingURL=arg-rest.js.map