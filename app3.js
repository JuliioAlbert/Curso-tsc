"use strict";
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
//# sourceMappingURL=app3.js.map