function validateNumbers(num1, num2) {
    if (num1 >= 0 && num2 > 0) {
        return true
    }
    return false;

}

function validateNum1(num1) {
    if (num1 > 0 && num1 <= 5) {

        return true
    }
    return false;
}
function calcuLateAdd() {

    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);

    if (validateNumbers(num1, num2)) {
        var result = num1 + num2;
        document.getElementById("result").innerHTML = "Addition is:" + result
    }

    else {
        document.getElementById("err").innerHTML = "Num1 and Num2 should be positive"
    }


}

function calcuLateFact() {

    var num1 = parseInt(document.getElementById("num1").value);
    if (validateNum1(num1)) {
        var fact = 1;
        for (var i = num1; i >= 1; i--) {
            fact = fact * i;
        }

        document.getElementById("result1").innerHTML = "Factorial of Num1 is:" + fact

    }
    else {
        document.getElementById("err1").innerHTML = "Num1 should be positive and <=5"
    }


}

function reset() {

    document.getElementById("num1").value = ""
    document.getElementById("num2").value = ""

    document.getElementById("result").innerHTML = ""
    document.getElementById("result1").innerHTML = ""
    document.getElementById("err").innerHTML = ""
    document.getElementById("err1").innerHTML = ""


}



