var arr = [1, 2, 3, 4, 5, 6, 7]

var filterArray = arr.filter(i => i % 2 == 0)   //Return the array of the value which satisfies the given condition
                                              // include the ele for whom cond is true
filterArray.forEach(i => console.log(i + " "))