# 输入URL后，发生了什么

在浏览器地址栏输入URL后，浏览器发生了什么？

1. 导航和请求
   1. 查询本地是否有缓存
      1. 强缓存和协商缓存
   2. 解析主机名
   3. DNS查询，查询IP
   4. TCP链接
   5. SSL/TLS链接，即HTTPS中的安全握手
   6. http请求
   7. http响应
2. HTML解析   HTML parse
   1. 构建DOM树
   2. 预加载JS和CSS
      1. js async，异步下载，下载完成后执行；根据下载情况，决定执行时机
      2. js defer，异步下载，下载完成后，在DOMContentLoad之前执行
   3. 同时构建CSSOM树
   4. 结合生成渲染规则树 render tree
3. 渲染
   1. 布局 Layout
      1. Reflow
   2. 绘制 Paint
      1. repaint
   3. 合成层
4. 最后
   1. JS执行
