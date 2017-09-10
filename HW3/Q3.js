const EventEmitter = require('events');
class Clock extends EventEmitter {
    constructor(){
        super();
        this.message = "woo hoo";
    }

    tick(){
        setInterval((()=> this.emit('tick')), 1000);
    }
}

const myClock = new Clock();

myClock.on('tick',function () {
    console.log(this.message);
});

myClock.tick();
