function EventDispatcher() {
    this.events = {}
}

EventDispatcher.prototype.on = function(eventName, callback){
    if(!eventName || !callback) return;

    this.events[eventName] = callback

    return this
}

EventDispatcher.prototype.emit = function(eventName, args) {
    var callback = this.events[eventName]
    if (!callback) return;

    callback.apply(this, args)

    return this
}

EventDispatcher.prototype.off = function (eventName) {
    if( eventName && this.events[eventName]) {
        delete this.events[eventName]
    }

}

class EventDispatcher2 {
    constructor(){
        this.events = {}
    }

    on(eventName, callback){
        if (!eventName || !callback) return;

        this.events[eventName] = callback

        return this
    }

    emit(eventName, args){
        var callback = this.events[eventName]
        if (!callback) return;

        callback.apply(this, args)

        return this
    }

    off(eventName) {
        if (eventName && this.events[eventName]) {
            delete this.events[eventName]
        }
    }
}

var ed = new EventDispatcher();
ed.on('say', function(){
    console.log('this is say function')
}).on('print', function(a, b, c){
    console.log('this is print function');
    
    console.log(a);
    console.log(b);
    console.log(c);
    
})

ed.emit('say', [1, 2, 3])
.emit('print', [1, 2, 3])

var ed2 = new EventDispatcher();
ed2.on('say', function () {
    console.log('this is say function')
}).on('print', function (a, b, c) {
    console.log('this is print function');

    console.log(a);
    console.log(b);
    console.log(c);

})

ed2.emit('say', [1, 2, 3]).emit('print', [1, 2, 3])