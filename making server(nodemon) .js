// const helpers = require('./helpers')

const {sum, add} = require("./helpers") //object destruction : we use it inorder to exract function of other function , code simple hunxa

const http  = require ("http")

const server = http.createServer((req, res)=>{

    res.end("this is server from scratch updated with nodemon package (test1)")

})

server.listen(3000) // to initialize port of theserver 

const total= sum(10,100);
console.log("total : ", total);
// //var let const var ma value chage bhairakhxa
// //fucntions are first class citizens they are flexival assigned as variable passed as arguments in
// const total = sum(10,200)
// console.log("total", total);

