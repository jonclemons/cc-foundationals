'use strict'
// Please don't delete the 'use strict' line above


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

