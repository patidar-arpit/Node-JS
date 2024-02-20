// var duplicate declaration is possible in the case of the var

var res1 = 10;
var res1 = "Hello"   //  re-declaraation of the variable
console.log(res1)

//let in the case of the let we cannot re-declare the variable

let lres1 = "Hiii"
//let lres1 = 10;  // Not possible give error because of the redeclaration of h the variable



//var is te global or function scope
//let is the blocked scope

for (var i = 0; i < 5; i++) {
    var l = 100;  // this is available outside the function also
    let k = 200;   // available only inside this block it is blocked scope
}
console.log(l);    // avaialble outside the function 
//console.log(k);  // cannot accesss the let variable outside the scope



function scoped() {
    var i = 10;   // this variable canot be accessed out the function it is function scoped
    let j = 200  // this variable canot be accessed out the function it is function scoped
    if (true) {
        let n = 10;
    }


}


// variable hoisting is possible in var 
//hoisting is not possible in case of the let


// var p;  // compiler generates this line  if we access the  var variable before declaring it
console.log("variable without the declaration :var variable", p);   // give the ans as undefined
var p = 23;

//console.log("variable without the declaration :let variable", q);  //Cannot access 'q' before initialization in case of the let variable
let q = 100;



//const

const c1 = 100;
//c =45  // change of the value of the constant is not allowed

//const c2;  // must be intitalized other wise give error

// echma5
const f1 = function () {
    console.log("Inside the echma5")

}
f1();

//echma6
const f2 = (a,b) => {
    console.log("Inside the echma6")
    console.log(a+b);
}
f2(10,200);
