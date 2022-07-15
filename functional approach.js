
//functional approach 

const fs = require ("fs")
const filename= ("target.txt")

const error = err =>console.log(err);
const datahandel = data => console.log(data.toString());

fs.readFile(filename, (err, data) => { //data comes from the fileaname which is target.txt 

    // if(err){
    //     console.log(err);
    // }
    //instead we can do this by calling our function 

    if (err) error(err)
    datahandel(data)

})

console.log("Node is asychronous programming ");