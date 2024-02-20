const cart = ["shoes","caps","belts"]


const createOrder = (cart,a)=>{
   
    setTimeout(() => {
        
        console.log("Cresting the order ")
        a();
    }, 3000);

}

const proceedToPayment = (a) => {

    setTimeout(() => {

        console.log("proceeding to the payment")
        a()
    }, 3000);

}

const showOrderSummary =(a)=>{
    setTimeout(() => {
        console.log("summary is showing ")
        a();
    }, 2000);
}

const UpdateWalllet = () => {
    console.log("upadating to  the wallet")
}



createOrder(cart, function () {
    proceedToPayment(function(){
        showOrderSummary(function(){
            UpdateWalllet();
        })
    })
})


//Now they are execute in the proper way and heirarchy and dependency
//createOrder() -> proceedToPayment() -> showOrderSummary() -> UpdateWallet()


