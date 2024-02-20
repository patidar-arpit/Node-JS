const carts = ["pants", "kurtas", "pencils"]
const promise = createOrder(carts)          // createOrder is returning the promise

//console.log(promise)   // it show the promise in the pending state 
promise
    .then(function (id) {
        console.log(id);

    })
    .catch(function (err) {

        console.log(err)

    })
    .finally(function () {
        console.log(" Inside the Finally ")
    })


// createOrder() is a function which is returning the promise 
//producer 
function createOrder(carts) {

    // creating the promise

    const promise1 = new Promise(function (resolve, reject) {


        setTimeout(() => {
            // validating the card and and doing validation 
            // take it now dummy as validation are successfull
            let flag = true;   // also make it false yo check whethe the catch() function is get exectuded or not
            if (flag) {

                var orderId = 100 // hard coded now but have difff logic
                resolve(orderId)
            }
            else {
                const err = new Error("Somthing is wrong or cart not validated")
                reject(err)           // when flag is false the promise is get rejeccted 
            }
        }, 3000);

    })

    return promise1;  // retuning the promise to the consumer

}


