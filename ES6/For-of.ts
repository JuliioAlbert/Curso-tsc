(() => {
    type Avenger = {
        name: string,
        weapon: string,
    }

    const capitanAmerica: Avenger = {
        name :"Capitán América",
        weapon: 'Escudo'
    }

    const IronMan: Avenger = {
        name :"Tony Stark",
        weapon: 'Arms suit'
    }

    const Thor: Avenger = {
        name :"Thor",
        weapon: 'Mjoint'
    }

    const avengers: Avenger[] = [IronMan, Thor, capitanAmerica];

    for (const avenger of avengers) {
        console.log(avenger.name, avenger.weapon);
    }

})()