var arr = [1, 2, 3, 4, 5, 6, 7]

var res = arr.reduce((acc, i) => acc + i)
console.log(res)

var res1 = arr.reduce((acc, i) => {
    return acc > i ? acc : i;
});

console.log(res1);