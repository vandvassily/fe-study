# indexedDB 浏览器数据库

## 代码

```js
// 操作indexedDB
class ErrorDB {
    constructor() {
        this.db = null;

        this.init();
    }

    init() {
        const self = this;
        if (!window.indexedDB) {
            return;
        }
        const version = 4;
        const connection = window.indexedDB.open("test", version);

        connection.onsuccess = (e) => {
            this.db = e.target.result;

            if (!this.db.objectStoreNames.contains("logs")) {
                this.db.createObjectStore("logs", {
                    autoIncrement: true,
                });
            }
        };

        connection.onupgradeneeded = function (e) {
            const db = e.target.result;
            if (!db.objectStoreNames.contains("logs")) {
                db.createObjectStore("logs", {
                    autoIncrement: true,
                });
            }
        };
    }

    getStore() {
        const transaction = this.db.transaction(
            "logs",
            "readwrite"
        );
        return transaction.objectStore("logs");
    }

    addLogs(logs) {
        if (!this.db) return;
        logs.forEach((log) => {
            this.insertToDB(log);
        });
    }

    insertToDB(log) {
        const store = this.getStore();
        store.add(log);
    }
}

const db = new ErrorDB();
const logs = [];
for (let i = 0; i < 4; i++) {
    logs.push({
        error: "error",
        uid: "223223322",
    });
}
setTimeout(() => {
    db.addLogs(logs);
}, 1000);
```


## 参考

[浏览器数据库 IndexedDB 入门教程](https://www.ruanyifeng.com/blog/2018/07/indexeddb.html)