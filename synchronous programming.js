const fs = require( "fs")
const filename = "target.txt"


// we are using synchronous function so the below fucntion only executes when the fist function is completed
const data = fs.readFileSync(filename).toString(); 
console.log(data);

console.log("This is synchronous programming ");