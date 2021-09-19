"use strict";
(function () {
    var fullName = function (fistName, lastName) {
        return fistName + " " + (lastName !== null && lastName !== void 0 ? lastName : 'No lastName');
    };
    var name = fullName("Tony");
    console.log({ name: name });
})();
//# sourceMappingURL=arg-opcional.js.map