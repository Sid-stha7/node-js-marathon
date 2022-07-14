const express = require ("express")

const app = express(); //we stored whole express in a variable 

app.get("/", (req,res)=>{ //get method of express takes two argument one is url and another response

    res.send("hello from express ")
})

app.listen(3000);
