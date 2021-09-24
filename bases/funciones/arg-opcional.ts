(() => {
    const fullName = (fistName:string, lastName?:string) :string=> {
        return `${fistName} ${lastName ?? 'No lastName'}`;
    }

    const name = fullName("Tony");
    console.log({name});
})()