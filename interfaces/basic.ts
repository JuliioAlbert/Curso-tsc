( () => {
    interface Hero  {
        name:string, 
        edad?:number, 
        powers:number[], 
        getName?:() => string
    }


    let myCustomVariable: string | number | Hero = 'Julio';
    console.log(typeof myCustomVariable); 
    myCustomVariable= 20;
    console.log(typeof myCustomVariable); 
    myCustomVariable= {
        name: "Julio",
        powers: [1],
        edad: 21,
        
    };
    console.log( myCustomVariable ); 
})()