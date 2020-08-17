var x = 10;
const PI = 3.14;
let y = 40;

console.log(x);
console.log(PI);
console.log(y);

// If-else
var num = 12;
if (num % 2 == 0) {
   console.log("Even");
} else {
   console.log("Odd");
}

// Switch
var grade="A";
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