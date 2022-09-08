'use strict'
// Please don't delete the 'use strict' line above


// Medium

let age = 23;

function isOfAge(age) {
    if (age >= 20){
        return "Yes, you can drink in Japan!";
    } else {
        return "No, you cannot drink in Japan!";
    }
}

console.log(isOfAge(age));


function isEven(n) {
    if (n % 2 == 0) {
        return "It's even!";
    }
    return "It's odd!"
}

const n = 1;

console.log(isEven(n))


let username = "jon";
let password = "something"

function validCredentials(username, password) {
    if (username.length > 2 && password.length >= 8){
        return "Your credentials are long enough";
    } else {
        return "Your credentials aren't long enough";
    }
}

console.log(validCredentials(username, password));
