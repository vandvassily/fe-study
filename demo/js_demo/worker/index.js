var worker = new Worker('worker.js');

// worker.postMessage('Hello World');

worker.onmessage = function (event) {
    console.log('Received message ' + event.data);
    doSomething();
};

// 主线程
var uInt8Array = new Uint8Array(new ArrayBuffer(10));
for (var i = 0; i < uInt8Array.length; ++i) {
    uInt8Array[i] = i * 2; // [0, 2, 4, 6, 8,...]
}
worker.postMessage({ eventName: 'print', data: uInt8Array });

function doSomething() {
    // 执行任务
    // worker.postMessage('Work done!');
    console.log(`dosomething`);
}
