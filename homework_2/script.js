function checkString(arg) {
    if (typeof arg === "string") {
        console.log(arg[0])
    } else {
        console.log("Это не строка")
    }
    return
}
checkString("Test");

function checkMiddleValue(num1, num2) {
    let result = (num1 + num2) / 2
    return result.toFixed(1)
}
console.log(checkMiddleValue(10, 27.3))

function changeValue(arg1, arg2) {
    if (arg1) {
        return Math.pow(arg2, 2)
    } else {
        return Math.sqrt(arg2)
    }
}
console.log(changeValue(true, 25))

function countString(arg) {
    const excludedLetters = ['а', 'А', 'о', 'О', 'у', 'У', 'с', 'С'];
    const filteredString = arg.split('').filter((char) => !excludedLetters.includes(char));
    return filteredString.length;
  }
console.log(countString("строка"))

function createQuence(num) {
    let sequence = '';
    for (let i = 1; i <= num; i++) {
      sequence += '*';
      console.log(sequence);
    }
  }
  createQuence(5);

  function checkEven(array,callback) {
    for(let elem of array) {
        if(!callback(elem)){
            return "Не все элементы удовлетворяют указанному условию"
        } 
     } return "Все элементы удовлетворяют указанному условию"
    }
    
  
  let array = [1,2,3,4,5]
  console.log(checkEven(array, (elem) => elem < 4))

  function checkSome(array,callback) {
    if(array.some(callback)) {
        return "Минимум 1 элемент удовлетворяет указанному условию"
    } else {
        return "Ни один элемент не удовлетворяют указанному условию"
    }
  }

  let arr = [1,2,3,4,5]
  console.log(checkSome(arr, (elem) => elem === 4))
