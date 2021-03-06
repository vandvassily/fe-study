# 防抖 debounce

## 前言

在一些高频事件中，例如

1. resize scroll
2. mousedown mousedown
3. keyup keydown
    ...

这些事件会被高频率触发，导致机器卡顿

为了解决这个问题，一般有两种处理方案：

1. debounce 防抖
2. throttle 节流

## 原理

防抖的原理就是：你尽管触发事件，但是我一定在事件触发 n 秒后才执行，如果你在一个事件触发的 n 秒内又触发了这个事件，那我就以新的事件的时间为准，n 秒后才执行，总之，就是要等你触发完事件 n 秒内不再触发事件，我才执行，真是任性呐!

## 基本功能

1. 防抖
2. 添加this指向
3. 传参
4. 立刻执行
5. 返回值
6. 取消
