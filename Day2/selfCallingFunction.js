// if you want to call the function only once over the life time.
//gets executed only once

(function(a,b){
    console.log(arguments[1]);
    console.log("Self calling function")
})(4,5); 

// we can also self calling arrow functions
((a,b)=>{
   
    console.log("Self calling function")
})(4,5); 



//(whole function defination paste here)()  // () this implies the calling the function like normally we call in the old style function 
