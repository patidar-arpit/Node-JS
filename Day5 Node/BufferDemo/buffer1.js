// var buf1 = new Buffer("Jayesh");    //Deprecated - creating the buffer 
// console.log(buf1.toString());

var buf = Buffer.alloc(26);   ///creating the buffer and allocating the size of buffer 

for (var i = 0; i < 26; i++) {
    buf[i] = i +65; // storing the chars into the buffer
}

console.log(buf.toString());
console.log(buf.toString('utf8'));      //Default format for parsing
console.log(buf.toString('ascii'));
console.log(buf.toString('ascii', 0, 5));


console.log(buf.length); /// gives the length of buffer 






