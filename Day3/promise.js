const promise1 = new Promise(function (resolve, reject) {

    // aysnchronous task
    setTimeout(() => {
        console.log("Task completed..!!");
        resolve("Arpit")   // we are telling that the promise is get resolved
    }, 2000);


})

promise1.then(function(str) {
    console.log(str)     /// when the promise1 will get resolved the then() function is get called
}).catch().finally()


///------------

const promise2 = new Promise(function(resolve,reject){

    setTimeout(() => {
        let flag  = false;
        if(flag){
            resolve("Promise Resolved")
        }
        else{
            reject("Promise not Resolved")
        }

    }, 2000);
})


promise2.then((res)=>{
    console.log(res);
})
.catch((res)=>{
    console.log(res);
})
.finally(()=>{
    console.log("Inside the finally block")
})
