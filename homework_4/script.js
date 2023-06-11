const strArray = ['Велосипед', 'Торт', 'Тенис', 'Ракетка', 'Город'];
function isInteger(arr) {
    return arr.some(el => Math.sqrt(el.length) % 2 === 0);
}
console.log(isInteger(strArray));

const numbers = [1, 2, 3, -4, 5, -6, 7, -8, 9, 10];
function negativeValues(arr) {
    let negativeNum = arr.filter(el => el < 0);
    return negativeNum;
}
console.log(negativeValues(numbers));

let numbers1 = [10, 20, 33, 55, 100];
function sumOfNumbers(arr) {
    let counter = 0;
    let result = arr.reduce((acc, val) => {
        if (acc <= 50) {
            acc += val;
            counter++;
        }
        return acc;
    })
    return counter;
}
console.log(sumOfNumbers(numbers1));

let values = ["100", "30", "Не число", "20", "Тоже не число"];
function sumOfNum(arr) {
    let number = arr.map(elem => +elem);
    let result = number.reduce((acc, val) => {
        if (!isNaN(val)) {
            acc += val;
        }
        return acc;
    }, 0)
    return result;
}
console.log(sumOfNum(values));

let array_1 = [1, 4, 7, 8, 2];
let array_2 = [1, 5, 11, 6, 2];
function intersection(arr1, arr2) {
    let result = arr1.filter(el => arr2.indexOf(el) > -1);
    return result;
}
console.log(intersection(array_1, array_2));

