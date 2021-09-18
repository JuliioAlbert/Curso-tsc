"use strict";
(function () {
    // Tipos
    var batman = 'Bruce';
    var superman = 'Clark';
    var existe = false;
    // Tuplas
    var parejaHeroes = [batman, superman];
    var villano = ['Lex Lutor', 5, true];
    // Arreglos
    var aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
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
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    var poder = '100';
    var largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
