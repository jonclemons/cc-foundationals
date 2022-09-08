'use strict'
// Please don't delete the 'use strict' line above


console.log("hello advanced.js!");



function guessMyNumber(n) {
  if (n > 6) {
    return "Please try a number between 0 and 6.";
  } else if (n === randomNumber(6)) {
    return "You guessed my number!";
  }
  return "Nope! Wrong number!";
}

function randomNumber(n) {
  return Math.floor(Math.random() * (n + 1));
}

let n = 4;

console.log(guessMyNumber(n));
console.log(randomNumber(n));