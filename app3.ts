(() => {

    // Tipos
    const batman:string = 'Bruce';
    const superman:string = 'Clark';
  
    const existe:boolean = false;
  
    // Tuplas
    const parejaHeroes:[string,string] = [batman,superman];
    const villano:[string, number,boolean] = ['Lex Lutor',5,true];
  
    // Arreglos
    const aliados: string[] = ['Mujer Maravilla','Acuaman','San', 'Flash'];
  
    //Enumeraciones
    enum Poder{
      Superman = 100,
      Flash = 0,
      batman = 1,
      acuaman = 0
    }
    const fuerzaFlash:Poder = Poder.Flash;
    const fuerzaSuperman:Poder = Poder.Superman;
    const fuerzaBatman:Poder = Poder.batman;
    const fuerzaAcuaman:Poder = Poder.acuaman;
  
    // Retorno de funciones
    function activar_batiseñal():string{
      return 'activada';
    }
  
    function pedir_ayuda():void{
      console.log('Auxilio!!!');
    }
  
    // Aserciones de Tipo
    const poder: any = '100';
    const largoDelPoder:number = (poder as string).length
    console.log( largoDelPoder );
  
  
  })()
  
  