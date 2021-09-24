namespace Validation {
    export const validateText = (text: string): boolean => (text.length > 3) ? true : false;


    export const validateDate = (fecha: Date): boolean => {
        return (isNaN(fecha.valueOf())) ? false : true
    }



}

console.log(Validation.validateText("Juli"));