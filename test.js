// class Cat {
//     constructor() {
//         let heart = '❤'

//         this.name = 'dundun'
//         this.jump = () => {
//         }
//     }

//     static desc = '家猫'
//     static specialSkill = '偷鸡蛋'

//     color = 'white';
//     cleanTheBody = function (params) {
//         console.log('我会');
//     }

//     hitTheShit() {
//         console.log('hehe');

//     }
// }

// let cat = new Cat()

// console.log(cat);
// console.log(Object.getOwnPropertyNames(cat));
// cat.cleanTheBody()
// cat.hitTheShit()
// "use strict";
// let a = '123';
// console.log(this);
// console.log(a);


// class Cat {
//     constructor() {
//         let heart = '❤'

//         this.name = 'dundun'
//         this.jump = () => {
//         }
//     }

//     type = 'ame'
//     getType = () => {
//         console.log(this.type)
//         console.log(type)
//     }
// }
// var type = 'window'
// var guaiguai = new Cat()
// guaiguai.getType()

// console.log(this);
var fs = require('fs');
var path = require('path');

// function findLargest(dir, cb) {
//     // 读取目录下的所有文件
//     fs.readdir(dir, function (er, files) {
//         if (er) return cb(er);

//         var counter = files.length;
//         var errored = false;
//         var stats = [];

//         files.forEach(function (file, index) {
//             // 读取文件信息
//             fs.stat(path.join(dir, file), function (er, stat) {
//                 if (errored) return;

//                 if (er) {
//                     errored = true;
//                     return cb(er);
//                 }

//                 stats[index] = stat;

//                 // 事先算好有多少个文件，读完 1 个文件信息，计数减 1，当为 0 时，说明读取完毕，此时执行最终的比较操作
//                 if (--counter == 0) {
//                     console.log(stats);

//                     var largest = stats
//                         .filter(function (stat) {
//                             return stat.isFile();
//                         })
//                         .reduce(function (prev, next) {
//                             if (prev.size > next.size) return prev;
//                             return next;
//                         });

//                     cb(null, files[stats.indexOf(largest)]);
//                 }
//             });
//         });
//     });
// }

// // 查找当前目录最大的文件
// findLargest('./', function (er, filename) {
//     if (er) return console.error(er);
//     console.log('largest file was:', filename);
// });

// 读取文件
function readdir(dir) {
    return new Promise((resolve, reject) => {
        fs.readdir(dir, (err, files) => {
            if (err) reject(err);
            resolve(files);
        });
    });
}

function getStats(path) {
    return new Promise((resolve, reject) => {
        fs.stat(path, (err, stats) => {
            if(err) reject(err);
            resolve(stats)
        })
    });
}

function findLargest2(dir) {
    return readdir(dir).then(files => {
        let promises = files.map( file => {
            return getStats(path.join(dir, file))
        })

        return Promise.all(promises).then(stats => {
            return {stats, files}
        })
    }).then(data => {
        console.log(data)
        let largest = data.stats.filter(stat => {
            return stat.isFile()
        }).reduce((prev, next) => {
            if(prev.size > next.size) return prev
            return next
        })

        console.log(`最大文件为: ${data.files[data.stats.indexOf(largest)]}`);
    })
}

findLargest2('./');
