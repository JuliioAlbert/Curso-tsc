(() => {
    interface addTwoNumber {
        (a:number, b:number):number;
    }


    let addNumberFunc:addTwoNumber;
    addNumberFunc = (a:number, b:number) => {
        return 10;
    }
})()