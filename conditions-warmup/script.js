'use strict'
// Please don't delete the 'use strict' line above

function isHot(temperature) {
    if (temperature>30) {
    return "It's hot!";
    } else {
    return "It's not hot.";
    }
  }

  console.log(isHot(31)); // should print "It's hot!";
  console.log(isHot(2)); // should print "It's not hot.";
  console.log(isHot(30)); // should print "It's not hot.";




  
  function getTypeOfSchool(age) {
    if (age < 6){
    return "kindergarten";
    } else if (age < 11 && age >= 6) {
          return "elementary school";
    } else if (age < 15 && age >= 11 ) {
  return "junior high school";
    }
    else if (age < 18 && age >= 15) {
  return "high school";
    }
    else {
    return "after high school";
    }
  }

  console.log(getTypeOfSchool(3)); // should print "kindergarten";
  console.log(getTypeOfSchool(8)); // should print "elementary school";
  console.log(getTypeOfSchool(13)); // should print "junior high school";
  console.log(getTypeOfSchool(16)); // should print "high school";
  console.log(getTypeOfSchool(30)); // should print "after high school";