// event listener with parameters 
const EventEmmitter= require('events')

const emitter= new EventEmmitter();

//defining the event 
emitter.on("myeventname", (statusCode, msg)=>{

    console.log(`the status code is ${statusCode} and msg is ${msg}`);

})



//raising an event

emitter.emit("myeventname", 200, "ok")