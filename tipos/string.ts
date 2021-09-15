(() => {
    const batman:string= 'Batma\'n';
    const linternaV:string = 'Linterna Verde';
    const flash:string = `Flash`;
    const abc =123;

    console.log(`I'm ${batman}, ${ abc } `);

    console.log(batman[10]?.toUpperCase() || 'No hay caracter');


    console.log(flash.toUpperCase());

})()