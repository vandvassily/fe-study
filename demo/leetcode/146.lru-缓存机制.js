/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存机制
 */

// @lc code=start
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.caches = Object.create(null);
    this.keys = new Array(capacity);
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (typeof this.caches[key] === 'number') {
        remove(this.keys, key);
        this.keys.push(key)

        return this.caches[key]
    }
    else {
        return -1
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    this.caches[key] = value;
    remove(this.keys, key);
    this.keys.push(key)
    if(this.keys.length > this.capacity) {
        this.caches[this.keys[0]] = null
        this.keys.shift()
    }
};

// 删除数组中的项
function remove(arr, item) {
    if (arr.length) {
        const index = arr.indexOf(item)
        if (index > -1) {
            return arr.splice(index, 1)
        }
    }
}


/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

