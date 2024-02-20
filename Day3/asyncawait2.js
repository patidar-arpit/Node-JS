const p1 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve("Promise get Resolved")
    }, 10000);

})

const p2 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve("Promise get Resolved")
    }, 5000);

})

async function handlePromise() {
    console.log("Hello")
    const val = await p1;
    console.log("Namaste JS 1")
    console.log(val)

    ///-----

    const val1 = await p2;           // when the js engine comes to know about the promise p2 till that the promise is already get resolved beacause when js engins is 
                                    // waitinting for the p1 to be resolved as it is taking 10 seconds in that time p2 is get resolved
                                    // so now js engine will not wait for the p2 because the p2 is already get resolved
    
    console.log("Namaste JS 2")     // this line are executed immediately and promise p2 is in the fullfilled state 
    console.log(val)


}

handlePromise();
