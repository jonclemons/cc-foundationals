'use strict'
// Please don't delete the 'use strict' line above


// /**
// * @param {string} firstName - the first name
// * @param {string} lastName - the last name
// * @returns {string} the first name and last name joined with a space
// */
// function getFullName(firstName, lastName) {
//     return firstName + lastName;
// }

// let actual = getFullName("Ken ", "Watanabe");
// let expected = "Ken Watanabe";

// if (actual === expected) {
//     console.log("Test PASSED!");
// } else {
//     console.error("Test FAILED. Keep trying!");
//     console.group("Result:");
//     console.log("  actual:", actual);
//     console.log("expected:", expected);
//     console.groupEnd();
// }


   /**
    * @param {string} name - the person's name
    * @param {boolean} isFormal - whether or not a formal greeting should be used
    * @returns {string} a greeting (formal or informal) for the given person's name
    */
   function simpleGreeting(name, isFormal) {
     if (isFormal = true){
        return `Hello, ${name}-san.`
     } else {
        return `Hello, ${name}.`
     }
   }

   let actual3 = simpleGreeting("Amy", true);
   let expected3 = "Hello, Amy-san.";

   if (actual3 === expected3) {
     console.log("Test PASSED!");
   } else {
     console.error("Test FAILED. Keep trying!");
     console.group("Result:");
     console.log("  actual:", actual);
     console.log("expected:", expected);
     console.groupEnd();
   }

   actual3 = simpleGreeting("Matt", false);
   expected3 = "Hello, Matt.";

   if (actual3 === expected3) {
     console.log("Test PASSED!");
   } else {
     console.error("Test FAILED. Keep trying!");
     console.group("Result:");
     console.log("  actual:", actual);
     console.log("expected:", expected);
     console.groupEnd();
   }

   /**
    * @param {string} name - the person's name
    * @param {boolean} isFormal - whether or not a formal greeting should be used
    * @returns {string} a greeting (formal or informal) for the given person's name
    */

   
      actual = simpleGreeting("Amy", true);
      expected = "Hello, Amy-san.";
   
      if (actual === expected) {
        console.log("Test PASSED!");
      } else {
        console.error("Test FAILED. Keep trying!");
        console.group("Result:");
        console.log("  actual:", actual);
        console.log("expected:", expected);
        console.groupEnd();
      }
   
      actual = simpleGreeting("Matt", false);
      expected = "Hello, Matt.";
   
      if (actual === expected) {
        console.log("Test PASSED!");
      } else {
        console.error("Test FAILED. Keep trying!");
        console.group("Result:");
        console.log("  actual:", actual);
        console.log("expected:", expected);
        console.groupEnd();
      }

         /**
    * @param {number} ??? - the first number
    * @param {number} ??? - the second number
    * @returns {boolean} whether or not the given first number is greater than the given second number
    */
   // Declare your function here.

   actual = isGreaterThan(5, 4);
   expected = true;

   if (actual === expected) {
     console.log("Test PASSED!");
   } else {
     console.error("Test FAILED. Keep trying!");
     console.group("Result:");
     console.log("  actual:", actual);
     console.log("expected:", expected);
     console.groupEnd();
   }

   actual = isGreaterThan(3, 4);
   expected = false;

   if (actual === expected) {
     console.log("Test PASSED!");
   } else {
     console.error("Test FAILED. Keep trying!");
     console.group("Result:");
     console.log("  actual:", actual);
     console.log("expected:", expected);
     console.groupEnd();
   }