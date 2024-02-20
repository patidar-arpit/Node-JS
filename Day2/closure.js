//if thier is function which has acesss to its parent function scope then it is  is called closure function
// function inside another function 


function combination(n,r){
    // if the code is repetative we make a func
    // and if we dont want to write the logic outside the function we make inner function inside te outer function
 
    var d = 100;

    //closure function 
    function factorial(n) {

        //insdie this we can acesss the variable d;
        var f = 1
        for (var i = 1; i < n; i++) {
            f = f * 1;
        }
        return f;
    }

    nf = factorial(n);
    nrf = factorial(n-r)

    var ans = nf/nrf;

    console.log(ans);
}