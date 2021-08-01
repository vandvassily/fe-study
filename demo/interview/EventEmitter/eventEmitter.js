// ES5版本

function Events() {
  // 事件对象
  this.events = {}
}

// 注册事件
Events.prototype.on = function(eventName, fn) {
  var args = [].slice.call(arguments, 2)
  var eventArr = this.events[eventName] || []
  eventArr.push({
    key: fn,
    fn: function(params) {
      fn.apply(null, args.concat(params))
    },
    isOnce: false,
  })

  this.events[eventName] = eventArr
}

// 注册一次性事件
Events.prototype.once = function(eventName, fn) {
  var args = [].slice.call(arguments, 2)
  var eventArr = this.events[eventName] || []
  eventArr.push({
    key: fn,
    fn: function(params) {
      fn.apply(null, args.concat(params))
    },
    isOnce: true,
  })

  this.events[eventName] = eventArr
}

// 执行
Events.prototype.fire = function(eventName) {
  if (this.events[eventName]) {
    var eventArr = []
    var params = [].slice.call(arguments, 1)
    this.events[eventName].forEach(function(value) {
      value.fn(params)
      if (!value.isOnce) {
        eventArr.push(value)
      }
    })

    this.events[eventName] = eventArr
  }
}

// 销毁
Events.prototype.off = function(eventName, fn) {
  if (this.events[eventName]) {
    var eventArr = []
    this.events[eventName].forEach(function(value) {
      if (value.key !== fn) {
        eventArr.push(value)
      }
    })

    this.events[eventName] = eventArr
  }
}
