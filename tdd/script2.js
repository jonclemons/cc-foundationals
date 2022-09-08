'use strict'
// Please don't delete the 'use strict' line above


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

   let actual = simpleGreeting("Amy", true);
   let expected = "Hello, Amy-san.";

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
