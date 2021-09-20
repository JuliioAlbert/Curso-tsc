(() => {
    class Avenger {
        name;
        power;
        constructor(name= "No Name",power= 0){
            this.name = name;
            this.power=power;
        }
    }

    class FlyAvenger extends Avenger{
        flying;
        constructor(name, power){
            super(name,power);
            this.flying= true;
        }
    }

    const hulk = new Avenger("Hulk", 900);
    const falcon = new FlyAvenger("Falcon", 50);
    console.log(hulk);
    console.log(falcon);
})()