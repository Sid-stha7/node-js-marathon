
const EventEmmitter = require('events')
const emitter = new EventEmmitter()

//now create event listener and call a call back function
//addlistener or on takes two arguments 1 is event name and another is callback function
emitter.on("eventname ", ()=>{
    console.log("listener called ");
})

//not only that we can call multiple callback functions through same event 
emitter.on("eventname ", ()=>{
    console.log("listener2 called ");
})

emitter.on("eventname ", ()=>{
    console.log("listener3 called ");
})

//raise an event 
emitter.emit('eventname ')
