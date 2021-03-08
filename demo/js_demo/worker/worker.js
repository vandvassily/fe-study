self.addEventListener(
    'message',
    function (e) {
        console.log(e);
        // self.postMessage('You said: ' + e.data);
          events[e.data.eventName](e.data.data);
    },
    false
);

const _self = self;
const events = Object.create(null)

events.print = function(text) {
    console.log(text)
}

events.close = function() {
    this.print('关闭');
    _self.close();
}
