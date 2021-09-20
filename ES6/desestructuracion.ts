(() => {
    type Avengers = {
            nick: string;
            ironman: string;
            vision: string;
            activos: boolean;
            poder: number;
        }
    

    const avengers:Avengers = {
        nick: 'Samuel L. Jackson',
        ironman: "Robert Downey Jr.",
        vision : 'Paul Bettan',
        activos: true,
        poder : 1234.23456,
    }

    // const {poder, activos, vision} = avengers;

    // console.log(poder.toFixed(2), vision.toUpperCase() );

    const printAvenger = ({ironman, ...resto}:Avengers) => {
        console.log({ironman}, resto.vision);
    }

    // printAvenger(avengers);


    const avengersArr:[string, boolean, number ] = ['Cap.America', true, 150.144];

    const [capitan,ironMan,num] = avengersArr;

    console.log({ironMan, capitan});
})()