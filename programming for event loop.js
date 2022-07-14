
const fs = require("fs")// file system module of node js
const filename = "target.txt";

// fs has watch function which takes two arguments , it is the basic overview of the working mechanism of node js
//watch takes two arguments file name and callback function
// node js provides event loop where it always waits for the change  

fs.watch(filename, ()=>{
    console.log("file changed");
})
