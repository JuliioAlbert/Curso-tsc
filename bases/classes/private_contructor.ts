(() => {
    class Apocalipsis{
        static instance:Apocalipsis;
        private constructor(public name:string){

        }

        static callApocalipsis():Apocalipsis{
            if(!Apocalipsis.instance){
                Apocalipsis.instance = new Apocalipsis("Soy Apocalipsis");
            }
            return Apocalipsis.instance;
        }

        changeName(newName:string){
            this.name = newName;
        }
    }


    const apocalipsis = Apocalipsis.callApocalipsis()
    const apocalipsis1 = Apocalipsis.callApocalipsis()
    const apocalipsis2 = Apocalipsis.callApocalipsis()

    apocalipsis1.changeName("Sas");


    // const apocalipsis = new Apocalipsis("Apoca ");
    // const apocalipsis1 = new Apocalipsis("Apoca");
    // const apocalipsis2 = new Apocalipsis("Apoca");

    console.log(apocalipsis,apocalipsis1, apocalipsis2);

})()