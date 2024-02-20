const m1 = require("./module1")
exports.combination = function (n, r) {
   
    return m1.factorial(n) / m1.factorial(n - r);
}



