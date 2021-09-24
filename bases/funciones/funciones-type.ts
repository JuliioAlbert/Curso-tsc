(() => {
    const addNumber = (a:number, b:number):number => a + b;
    const greet = (nombre:string):string => `Hola ${nombre}`;
    const saveToWorld= () => `El Mundo está salvado!`;

    let myFunction:() => string;

    //!myFunction=10;
    //!console.log(myFunction);

    //?myFunction=addNumber
    //?console.log(myFunction(1 , 2) );

    //* myFunction=greet
    //* console.log(myFunction('Pedo') );

    myFunction=saveToWorld
    console.log(myFunction() );
})()