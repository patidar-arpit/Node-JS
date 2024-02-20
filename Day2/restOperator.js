
// in the arroew function the argument array is not available so we can use rest operator;

const func1 = (a, ...z) => {
    //first parameter goes into the a
    //& another parameter are goes into the z (it is an array)

    console.log(a);
    console.log(z);  
}

func1(10, 20);
func1(10, 20, 30, 40);