(() => {
    let avenger:any= 123;
    
    let exist;
    let power;


    avenger= `Dr-Strage`;

    console.log(avenger .charAt(0));

    //Cast 1
    console.log((avenger as string) .charAt(0));

    avenger= 124.23433;
    console.log(avenger.toFixed(2));

    ///Cast 2
    console.log(<number>avenger.toFixed(2));


    console.log(exist);
    console.log(power);


})()