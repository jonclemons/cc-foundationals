'use strict'
// Please don't delete the 'use strict' line above

function simplePasswordLock(password) {
    if (password === "password") {
      return "Correct! Welcome.";
    }
    return "Incorrect password, please try again.";
}

console.log(simplePasswordLock("qwerty")); // => "Incorrect password, please try again."
console.log(simplePasswordLock("password")); // => "Correct! Welcome."

console.log("Hello".length);
console.log("The length of this string is 31".length);
console.log(" spaces! ".length);



function isItTooLong(astring) {
    return astring.length > 10;
}

console.log(isItTooLong("let's also put a long string here too"));

function biggerNumber(numOne, numTwo) {
    if(numOne > numTwo){
        return numOne;
    } else if(numTwo > numOne) {
        return numTwo;
    } else if(numOne === numTwo) {
        return `${numOne} and ${numTwo} are the same!`;
        // return numOne + " and " + numTwo + " are the same!"
    } else {
        return "Something went wrong...";
    }
}
console.log(biggerNumber(4, 3)); // should print 'The first argument is bigger.'
console.log(biggerNumber(3, 4)); // => 'The second argument is bigger.'
console.log(biggerNumber("short".length, "short".length)); // => 'The second argument is bigger.'
console.log(biggerNumber("short", "short".length)); // => 'The second argument is bigger.'


function printDataType(something){
    if (typeof something === "number"){
        return "This is a number.";
    } else if(typeof something === "boolean"){
        return "This is a boolean.";
    } else if(typeof something === "string") {
        return "This is a string.";
    } else {
        return "This is not a string, a boolean, or a number."
    } 
}

console.log(printDataType(printDataType));

console.log(printDataType(42)); // => "This is a number."
console.log(printDataType("Hello!")); // should print "This is a string."
console.log(printDataType(true)); // => "This is a boolean."
console.log(printDataType(undefined)); // should print "This is not a string, a 

function greeting(fullName, language){
    if (language === "Japanese"){
        return `Konnichiwa, ${fullName}!`
    } else if(language === "English"){
        return `Hello, ${fullName}!`
    } else if(language === "German"){
        return `Gutentag, ${fullName}!`
    } else if(language === "Spanish"){
        return `Hola, ${fullName}!`
    } else {
        return `42`
    }
}

console.log(greeting("Harry Potter", "Japanese")); // should print "Konnichiwa, Harry Potter!"
console.log(greeting("Harry Potter", "English")); // => "Hello, Harry Potter!"
console.log(greeting("Harry Potter", "German")); // => "Gutentag, Harry Potter!"
console.log(greeting("Harry Potter", "Spanish")); // => "Hola, Harry Potter!"

function isEven(aNumber){
    if(aNumber % 2 === 0){
        return `${aNumber} is even`;    
    } else if(typeof aNumber !== "number"){
        return "Not a number."
    } else if(aNumber % 2 !== 0) {
        return `${aNumber} is odd`;
    } else {
        return `Something else happened. ${aNumber} was entered.`
    }     
}

console.log(isEven(4)); // should print true
console.log(isEven(7)); // => false
console.log(isEven("7")); // => false
console.log(isEven(printDataType)); // => false


const min = -10;
const max = 10;
const number = Math.floor(Math.random() * (max - min) + min);

function isPositive(number){
    return Math.sign(number) === 1;    
}

function isNegative(number){
    return Math.sign(number) === -1;    
}

function isZero(number){
    return Math.sign(number) === 0;    
}

function isOdd(number){
    return number % 2 !== 0;    
}
console.log(number);
console.log(isPositive(number));
console.log(isNegative(number));
console.log(isZero(number));
console.log(isOdd(number));

