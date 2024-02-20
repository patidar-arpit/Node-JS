// two asynchrounous functions in js
// 1.setTimeout()

function f1() {
    console.log("in f1")
}
console.log("before f1");
f1();
console.log("after f1");

// output  ->  before f1
 //             in f1
 //             after f1


 //

function f1() {
    console.log("in f1")
}
console.log("before f1");
setTimeout(f1,2000) ;    // asynchronous fun and get execute the f1 function after the 2000 ms
console.log("after f1");
