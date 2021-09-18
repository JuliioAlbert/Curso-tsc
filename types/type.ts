(() => {

    type Hero = {
        name:string, 
        edad?:number, 
        powers:number[], 
        getName?:() => string
    }


    let flash:Hero = {
        name:"Barri Alen",
        edad: 14,
        powers: [1,2],
    }
    let superman:Hero = {
        name:"Clark Kent",
        edad: 30,
        powers: [1,3],
    }

 

    console.log( flash.getName()  );
})()