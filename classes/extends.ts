(() => {

    class Aveger {
        constructor(
            public name:string,
            public realName:string
        ){
            console.log("constructor -> Aveger");

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
                console.log("Constructor Xmen");
        }
        public getFullNameXmen(){
            console.log(super.getFullName());
        }
        
    }


    const woll = new Xmen("Wolverine", 'Logan',true);
    console.log(woll);
    woll.getFullNameXmen()

})()