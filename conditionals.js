/*  Example 1
const raining = true;
const cold = false;

if (raining) {
  console.log("Don't forget your umbrella!");
}

if (cold) {
  console.log("Make sure you pick out a scarf!");
}

console.log("Now you're ready to go outside!");
*/

/* Example 2

const cold = false;

if (cold) {
  console.log("Make sure you pick out a scarf!");
} else {
  console.log("Short sleeves are fine.");
}
*/

// 

// const isCitizen = true;
// const age = 26;

// if (isCitizen && age > 18) {
//   console.log("You are eligible to vote.");
// }

// let temperature = 45
// if (temperature < -40 || temperature > 40) {
//   console.log("Maybe going outside isn't such a great idea…");
// }

// let raining = false
// if (!raining) {
//   console.log("Leave your umbrella at home!");
// }


function whichSchool(age) { 
  if (age < 13) {
    return "Elementary School";
  }
  else if (age >= 13 && age <= 18) {
    return "Secondary School";
  }
  else {
    return "Lighthouse Labs"
  }  
}

console.log("I am 35. Which school should I go to?");
console.log(whichSchool(35));
console.log("I am 8. Which school should I go to?");
console.log(whichSchool(8));
console.log("I am 14. Which school should I go to?");
console.log(whichSchool(14));