'use strict'
// Please don't delete the 'use strict' line above

function lineLength(x1, y1, x2, y2) {
    return (Math.sqrt(((x2 - x1)**2) + ((y2 - y1)**2)));
}

  
  // Add tests here.
expected = ; // whatever you expect the value of the EXPRESSION to be
actual = AreaOfTriangle(3, 5); // whatever EXPRESSION you are testing

if (actual === expected) {
console.log("Test PASSED!");
} else {
console.error("Test FAILED. Keep trying!");
console.group("Result:");
console.log("  actual:", actual);
console.log("expected:", expected);
console.groupEnd();
}

// Add more tests here.