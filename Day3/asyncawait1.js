const p = new Promise(function (resolve, reject) {
    
    //lets assume our promise is taking much time to get to resolved

    setTimeout(() => {
        resolve("Promise get Resolved")
    }, 5000);

})

// this is how we handle the promise without async and await 
function handlingPromisesWithoutAyncAwait(){
    console.log("Before")
    p.then((res)=>console.log(res)).catch(res=>console.log(res))
    // in this method the js engine will not wait for the promise to get resolve
    // and js engine go ahead 
    console.log("after")  // and this line will get executed before the promise get resolved
}

async function handlingPromisesWithAyncAwait(){

     console.log("Before")
     const val = await p;        // at this line js engine will waiting for the promise to get resolved and what promise returned is get stored in the val
     //control will wait at line no 23 
     console.log("after")
     console.log(val)

}

//handlingPromisesWithoutAyncAwait();
handlingPromisesWithAyncAwait();