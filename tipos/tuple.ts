(() => {
    const hero: [string, number,boolean] = ['Dr.Strage', 1000, true];

    hero[1] = 123,
    hero[0] = 'Spidy';
    hero[2] = false;
    console.log(hero);

})()