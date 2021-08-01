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
