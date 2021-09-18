(() => {
    const fullName = (fistName:string, lastName?:string, upper:boolean = false ) :string=> {
        if(upper){
            return `${fistName} ${lastName ?? 'No lastName'}`.toUpperCase();
        }else{
            return `${fistName} ${lastName ?? 'No lastName'}`;
        }
    }

    const name = fullName("Tony",);
    console.log({name});
})()