
(() => {

    abstract class Mutante {
        constructor(public name:string, public realName:string) {
            
        }
    }

    class Xmen extends Mutante{
        salvarMundo(){
            return `Salvar el mundo!`;
        }
    }
    class Villian extends Mutante{
        conquistarMundo(){
            return `Mundo Conquistado!`;
        }
    }

    const wolverine = new Xmen("Wolverine","Logan");
    const magento   = new Villian("Magneto","Mage");

    console.log(wolverine.salvarMundo());
    console.log(magento.conquistarMundo());



    const printName = (character:Mutante) => {
        console.log(character.name);
    }

    printName(wolverine)
})()