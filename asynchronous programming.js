
const fs = require ("fs")
const filename= ("target.txt")


//readfile method takes two arguments which is file name and data of the file 
// here we will be executing two functions and each fucntions has different runtime one takes longer another takes shorter 
//what node js basically does is that it executes both fucntions but the return value of the second function is printed at first because
//the first function is still running while another fucntion had beed already executed when the first is done the event is sent to stack and again and returned the value
fs.readFile(filename, (err, data) => {

    if(err){
        console.log(err);
    }
        console.log(data.toString());

})

console.log("Node is asychronous programming ");