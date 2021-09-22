(() => {

    interface Cliente {
        name:string,
        edad?:number,
        address:Address,
        getFullAddress(id:string):string,
    }

    interface Address {
        id: number,
        zip: string,
        city: string,
    }

    const cliente:Cliente = {
        name: "Julio",
        edad: 23,
        address: {
            id: 21,
            zip: 'KYW WE',
            city: 'San juan del Rio'
        },
        getFullAddress (id: string){
            return `${this.address.city}`;
        }
    }

    cliente.edad
})()