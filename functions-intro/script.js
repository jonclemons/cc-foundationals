'use strict'
// Please don't delete the 'use strict' line above


// function simpleHelloA() {
// console.log("hello");
// }

// function simpleHelloB() {
// return "hello";
// }

// const a = simpleHelloA();
// const b = simpleHelloB();
// console.log(a, b);


// Medium homework

function createGreeting(greetingPhrase, instructorName) {
return greetingPhrase + ", " + instructorName + "!";
}

let morningGreeting = createGreeting("Good morning","Mike");
let dayGreeting = createGreeting("Hello","Beau");
let eveningGreeting = createGreeting("Good evening","Alex");

  console.log(morningGreeting); // should print "Good morning, Mike!"
  console.log(dayGreeting); // should print "Hello, Beau!"
  console.log(eveningGreeting); // should print "Good evening, Alex!"

  