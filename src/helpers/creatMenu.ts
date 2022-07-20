type menuObject = '' | 'all' | 'dogs' | 'cats' | 'fish';



export const createMenu = (value: menuObject) => {
    let arrayValues  = {
        all: false,
        dogs: false,
        cats: false,
        fish: false
    }

    value != '' ? arrayValues[value] = true : '';
    return arrayValues;
}