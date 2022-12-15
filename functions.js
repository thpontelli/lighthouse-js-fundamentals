// // declares the sayHello function
// function sayHello(name) {
//   var message = "Hello!"
//   return message; // returns value instead of printing it
// }

// // function returns "Hello!" and console.log prints the return value
// console.log(sayHello());

// function findAverage(x, y) {
//   var answer = (x + y) / 2;
//   return answer;
// }

// var avg = findAverage(5, 9);
// console.log(findAverage(5, 9));

// // returns the sum of two numbers
// function add(x, y) {
//   return x + y;
// }

// // returns the value of a number divided by 2
// function divideByTwo(num) {
//   return num / 2;
// }

// var sum = add(5, 7); // call the "add" function and store the returned value in the "sum" variable
// var average = divideByTwo(sum); // call the "divideByTwo" function and store the returned value in the "average" variable

// console.log(sum, average);


// creates a line of * for a given length
function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
      line += "* ";
  }
  return line + "\n";
}

// your code goes here.  Make sure you call makeLine() in your own code.
function buildTriangle(rows) {
  for (var x = 1; x <= rows; x++) {
     console.log(makeLine(x));
  }
  return "\n";
} 

// test your code by uncommenting the following line
console.log(buildTriangle(10));