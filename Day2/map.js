var arr = [1, 2, 3, 4, 5, 6, 7]
var newArray = arr.map(i => i * 2);   //it will iterate through all the array and pass one bv one
// all the element into the arrow function and it will return the element and that element is included into the another array

console.log(arr)
console.log(newArray)



// Another way of using the Map function

var newArray1 = arr.map(checkMap) // call the checkMap method on all the element one by one 

function checkMap(i) {
    return i * i;
}

console.log(newArray1);





