// exports is a object which is available globally and we ccan acess the fun of it anywhere

exports.addition = function (a, b) {

    return a + b;
}

exports.factorial = function (s) {

    let res = 1
    for (let i = 1; i <= s; i++) {
        res = res * i;
    }
    return res;
}

exports.multiplication = function (a, b) {
    return a * b;
}