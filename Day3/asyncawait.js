const  p = new Promise(function(resolve,reject){
    let flag = true;
    if (flag) {
        resolve("Namaste JS")
    }
    else {
        reject("Promise Not Resolved")
    }

})

async function handlePromises(){
    const val = await p;   //   promise p is get resolved here
    console.log(val);
}

handlePromises();