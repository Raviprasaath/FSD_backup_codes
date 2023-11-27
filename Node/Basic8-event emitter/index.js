const logEvents = require ('./logEvents');

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

// here on is used to listen 

myEmitter.on('log', (msg) => {
    logEvents(msg);
})

myEmitter.emit('log', 'log event emitted');


