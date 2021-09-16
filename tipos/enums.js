"use strict";
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
