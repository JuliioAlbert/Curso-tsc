(() => {

    class Aveger{
        //Propiedades en el constructor
        // private name:string;
        // public team:string;
        // public realName: string;

        static age:number= 35;
        static getAvgAge(){
            return this.name;
        }
        constructor(
            private name:string, 
            private team:string,
             public realName?:string
        ) {}
        public bio(){
            return `${this.name} (${this.team})`;
        }

    }

    const antMan:Aveger = new Aveger('AntMan','Capitan','Scott Lang');
    console.log(antMan);

    console.log(antMan.bio());


    console.log(Aveger.getAvgAge());

})()