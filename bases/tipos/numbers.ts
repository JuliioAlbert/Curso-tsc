(() => {
    let avengers:number = 10;
    console.log(avengers);

    const villians:number = 20;

    if(avengers < villians){
        console.log("Ya valio nepe");
    }else {
        console.log("Nos la pelan");
    }

    avengers=Number('1234A')
    console.log({avengers});

})()