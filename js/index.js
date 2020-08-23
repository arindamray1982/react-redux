// variable declaration
var x = 10;
const PI = 3.14;
let y = 40;

console.log(x);
console.log(PI);
console.log(y);

// if-else
var num = 12;
if (num % 2 == 0) {
   console.log("Even number");
} else {
   console.log("Odd number");
}

// switch
var grade = "A";
switch(grade) {
   case "A": {
      console.log("Excellent");
      break;
   }
   case "B": {
      console.log("Good");
      break;
   }
   case "C": {
      console.log("Fair");
      break;
   }
   case "D": {
      console.log("Poor");
      break;
   }
   default: {
      console.log("Invalid choice");
      break;
   }
}

// for
var num = 5;
var factorial = 1;
for(; num >= 1; num--) {
    factorial = factorial * num;
}
console.log(factorial);

// while
var num = 5;
var factorial = 1;
while(num >= 1) {
   factorial *= num;
   num--;
}

// do-while
var i = 10;
do {
   console.log(i);
   i = i - 2;
} while(i >= 0);

// function
function getGreetingMessage() { 
    return "hello world!!!";
}  
var val = getGreetingMessage();
console.log(val);

// anonymous function
var f = function(){
    return "hello";
} 
console.log(f());

// arrow function
var greetings = () => console.log("Hello World");
greetings();

// array
var numbers = [2, 4, 8, 7, 3, 5, 6];
console.log(numbers[1]);
numbers[1] = 9;
console.log(numbers);

var names = new Array("Mary","Tom","Jack","Jill");
names.forEach(element => {
   console.log(element);
});
names.sort();
console.log(names);
names.reverse();
console.log(names);

// array de-structuring
var cities = ["Delhi", "Mumbai", "Kolkata", "Chennai"];
var [first, ...others] = cities;
console.log(first);
console.log(others);