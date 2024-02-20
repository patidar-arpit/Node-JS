// Asynchrounous function 
// set some fixed amount of intervAL

//IF WE WANT TO CALL THE FUNCTION AGAIN AND AGAIN AFTER SOME TIME OF INTERVAL

var func1 = ()=>{
    console.log("Inside the func1")
}
var s1 = setInterval(func1,1000);  // IT WILL NEVER STOP  IF WE NOT STOP IT

var func2 =() =>{
    clearInterval(s1)   // clear the interval of the func1
}


setTimeout(func2,3000)
