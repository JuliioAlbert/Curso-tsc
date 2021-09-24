(() => {
    const hero:string='Flash';
    function returnName():string{
        return hero;
    }

    const activeBati = ():string => 'Bati Señal Activada';
    const heroName:string= returnName();

    
    console.log(returnName());
    console.log(activeBati());
})()