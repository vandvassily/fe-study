# Nginx概念与使用

## 概念

- 正向代理
- 反向代理
- 负载均衡
- 动静分离
- 高可用集群

### 反向代理

用户不直接访问服务，通过反向代理服务器，转发请求

### 负载均衡

通过负载均衡算法和配置，分配高并发到不同的服务、服务器中
        
#### 负载均衡的方式

1. 轮询（默认）
   
   每个请求按时间顺序逐一分配到不同的后端服务器，如果后端服务器 down 掉，能自动剔除。
2. 权重 weight
   
   1. weight 代表权,重默认为 1,权重越高被分配的客户端越多指定轮询几率
   2. weight 和访问比率成正比，用于后端服务器性能不均的情况
   
3. ip_hash
   
   每个请求按访问 ip 的 hash 结果分配，这样每个访客固定访问一个后端服务器，可以解决 session 的问题
4. fair
   
   按后端服务器的响应时间来分配请求，响应时间短的优先分配

### 动静分离
    
- 静态文件服务
- 接口、jsp服务
        
### 高可用集群
    
- 主从模式 keepalived + nginx
- 双主模式

### 其他

- Gzip压缩
- 缓存

## 指令

### 常用指令

1. 启动 `nginx`
2. 停止 `nginx -s stop`
3. 重载 `nginx -s reload`
4. 查询端口占用 `ps -ef | grep nginx`

### 负载均衡

```nginx
    upstream myBalance {
        ip_hash;
        server 192.168.1.103:3000;
        server 192.168.1.103:3001;
    }

    location /balance/ {
        proxy_pass http://myBalance;
    }       
```

### Gzip配置

```nginx
    gzip  on;
    gzip_min_length 1k;
    gzip_comp_level 2;
    gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/javascript application/x-httpd-php;
    gzip_vary on;
    gzip_disable "MSIE [1-6]\.";
```

### 缓存

```nginx

    location / {
        root   /usr/local/var/www/;
        index  index.html index.htm;
        add_header  Cache-Control  max-age=no-cache;
    }

    location ~* \.(css|js|png|jpg|jpeg|gif|gz|svg|mp4|ogg|ogv|webm|htc|xml|woff)$ {
        access_log off;
        add_header Cache-Control "public,max-age=15";
    }
```


## 配置实例

```nginx

#user  nobody;
worker_processes  1;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;

#pid        logs/nginx.pid;


events {
    worker_connections  1024;
}

http {
    include       mime.types;
    default_type  application/octet-stream;

    #access_log  logs/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    keepalive_timeout  65;

    gzip  on;
    gzip_min_length 1k;
    gzip_comp_level 2;
    gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/javascript application/x-httpd-php;
    gzip_vary on;
    gzip_disable "MSIE [1-6]\.";

    upstream myBalance {
        ip_hash;
        server 192.168.1.103:3000;
        server 192.168.1.103:3001;
    }

    server {
        listen       80;
        server_name  192.168.1.103;

        #charset koi8-r;

        #access_log  logs/host.access.log  main;

        location /fe-study/ {
            root /usr/local/var/www/;
            index index.html index.htm;
        }

        location / {
            root   /usr/local/var/www/;
            index  index.html index.htm;
            add_header  Cache-Control  max-age=no-cache;
        }

        location /balance/ {
            proxy_pass http://myBalance;
        }

        location ~* \.(css|js|png|jpg|jpeg|gif|gz|svg|mp4|ogg|ogv|webm|htc|xml|woff)$ {
            access_log off;
            add_header Cache-Control "public,max-age=15";
        }

        #error_page  404              /404.html;

        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }

    # HTTPS server
    #
    #server {
    #    listen       443 ssl;
    #    server_name  localhost;

    #    ssl_certificate      cert.pem;
    #    ssl_certificate_key  cert.key;

    #    ssl_session_cache    shared:SSL:1m;
    #    ssl_session_timeout  5m;

    #    ssl_ciphers  HIGH:!aNULL:!MD5;
    #    ssl_prefer_server_ciphers  on;

    #    location / {
    #        root   html;
    #        index  index.html index.htm;
    #    }
    #}
    include servers/*;
}
```

### 参考

[nginx缓存配置及开启gzip压缩](https://www.cnblogs.com/tugenhua0707/p/10841267.html)
