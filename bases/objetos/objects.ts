(() => {
    let flash:{name:string, edad?:number, powers:string[], getName?:() => string} = {
        name:"Barri Alen",
        edad: 14,
        powers: ['Super Velocidad', 'Viajar en el tiempo'],
    }
    let superman:{name:string, edad?:number, powers:string[], getName?:() => string} = {
        name:"Clark Kent",
        edad: 30,
        powers: ['Super Velocidad', 'Volar'],
    }

     flash = {
        name:"Clark Kent",
        edad: 25,
        powers: ['Super Velocidad', 'Volar', 'SuperFuerza'],
        getName(){
            return this.name;
        }
    }

    console.log( flash.getName()  );
})()