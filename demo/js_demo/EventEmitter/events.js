class Events {
    events = {};

    static version = '1.0.0';

    addEvent(eventName, func, isOnce, ...args) {
        const currentEventMap = this.events[eventName] || new Map();
        currentEventMap.set(func, {
            func: func.bind(null, ...args),
            isOnce
        });
        this.events[eventName] = currentEventMap;
    }
    on(eventName, func, ...args) {
        this.addEvent(eventName, func, false, ...args);
    }

    once(eventName, func, ...args) {
        this.addEvent(eventName, func, true, ...args);
    }

    off(eventName, func) {
        if (this.events[eventName] && this.events[eventName].has(func)) {
            this.events[eventName].delete(func);
        }
    }

    fire(eventName, ...args) {
        this.events[eventName].forEach((value, key, map) => {
            value.func && value.func(...args);
            if (value.isOnce) {
                map.delete(key);
            }
        });
    }
}


// class Events {
//     eventObj = {};
//     addEvent(name, fn, isOnce, ...params) {
//         let currentWeakMap = this.eventObj[name] || new Map();
//         let mapValue = {
//             fn: isOnce
//                 ? (...params) => {
//                       fn(...params);
//                       currentWeakMap.delete(fn);
//                   }
//                 : fn,
//             params
//         };

//         currentWeakMap.set(fn, mapValue);
//         this.eventObj[name] = currentWeakMap;
//     }
//     on(name, fn, ...params) {
//         this.addEvent(name, fn, false, ...params);
//     }
//     once(name, fn, ...params) {
//         this.addEvent(name, fn, true, ...params);
//     }
//     off(name, fn) {
//         this.eventObj[name].delete(fn);
//     }
//     fire(name, ...params) {
//         const currentEvent = this.eventObj[name];
//         currentEvent.forEach((mapValue) => void mapValue.fn(...mapValue.params, ...params));
//     }
// }
