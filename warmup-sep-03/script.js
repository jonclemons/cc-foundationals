'use strict'
// Please don't delete the 'use strict' line above


function greeting(name){
    return `Hello, ${name}!`;
}

console.log(greeting("Kana"));
console.log(greeting("Kimiko"));

function isMultipleOfThree(n) {
    return n % 3 === 0;
  }

console.log(isMultipleOfThree(6)); // => true
console.log(isMultipleOfThree(10)); // => false

function isMultipleOf(num1, num2) {
    return num1 % num2 === 0;
  }

// Test cases
console.log(isMultipleOf(6, 3)); // => true
console.log(isMultipleOf(10, 4)); // => false


let number = 3;
function whichCOndition(number) {
    if(number % 4 === 0){
        return "A";
    } else if (number - 1 > 7) {
        return "B";
    } else {
        return "C";
    }
}
console.log(whichCOndition(number));

