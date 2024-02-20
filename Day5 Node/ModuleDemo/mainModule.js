var m1 = require("./module1");       // imporing the module1 and we can access the fun with the help of m1 
const m2 = require("./module");

console.log(m1.addition(10, 20));        // calling m1 function of the module1
console.log(m1.multiplication(10, 5))
console.log(m2.combination(4, 1));
console.log(m1.factorial(5));


