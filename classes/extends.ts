(() => {

    class Aveger {
        constructor(
            public name:string,
            public realName:string
        ){
            // console.log("constructor -> Aveger");

        }
        protected getFullName(){
            return `${this.name}  ${this.realName}`;
        }
    }

    class Xmen extends Aveger{
        constructor(
            name:string,
            realName:string,
            public isMutant: boolean,
            ){
            super(name,realName);
                // console.log("Constructor Xmen");
        }

        get fullName(){
            return `${this.name} - ${ this.realName }`;
        }

        set fullName(name: string){
            this.name = name;
        }

        public getFullNameXmen(){
            // console.log(super.getFullName());
        }
        
    }


    const woll = new Xmen("Wolverine", 'Logan',true);
    //onsole.log(woll.fullName);
    woll.fullName = "Julio";
    // console.log(woll.fullName);
    woll.getFullNameXmen()

})()