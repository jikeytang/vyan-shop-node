# vyan-shop-node
[微燕商城 - vyan-shop-weixin](https://github.com/jikeytang/vyan-shop-weixin) server端
[微燕商城 - vyan-shop-admin](https://github.com/jikeytang/vyan-shop-admin) server端

---
[TOC]

[vyan-shop-admin](https://github.com/jikeytang/vyan-shop-admin) `0.1.0`版本成型之后，可以腾出点时间来继续下一步了，现在还处在mock数据阶段，各业务场景并不完善，数据也不能正常流转，从产品角度来看也是不可用的，这样看来服务端提供接口数据的项目也呼之欲出。初衷还是一样的，整个介绍语言通俗易懂，项目简单易跑，不求多复杂，至少要完整。有阶段性的结果，版本控制的意识，前期的需求收集做加法，后期的开发做减法。

能力有限，不足之外还有很多，正在努力完善中，路过的大佬多多指点。

纯服务端接口项目，暂无预览入口，代码地址 [vyan-shop-node - Github](https://github.com/jikeytang/vyan-shop-node)，[前端 vyan-shop-admin](https://github.com/jikeytang/vyan-shop-admin)。

参考自：

- [node-testShop](https://github.com/zengming00/node-testShop)
- [fancy-store-server](https://github.com/czero1995/fancy-store-server)

### 1. 相关介绍

#### 1.1 基本介绍


#### 1.2 技术栈

技术 | 说明 | 官网
----|----|----
Node | 基于 V8 开发平台 | [https://nodejs.org/zh-cn/](https://nodejs.org/zh-cn/)
Express |  Web 应用框架 | [https://expressjs.com/zh-cn/](https://expressjs.com/zh-cn/)
MongoDB |  面向文档的数据库 | [https://www.mongodb.com/](https://www.mongodb.com/)
Mongoose |  对象模型工具 | [https://mongoosejs.com/](https://mongoosejs.com/)
Morgan |  日志中间件 | [https://github.com/expressjs/morgan](https://github.com/expressjs/morgan)
CORS  |  跨域模块 | [https://www.npmjs.com/package/cors](https://www.npmjs.com/package/cors)
Dayjs  |  类似Moment日期库 | [https://github.com/iamkun/dayjs](https://github.com/iamkun/dayjs)
Utility  |  工具集合 | [https://github.com/node-modules/utility](https://github.com/node-modules/utility)


- MongoDB
MongoDB对象数据库，没有固定的模式和结构，数据以对象形式存储，对象内部为JSON。比如：
```javascript
{"_id":{"$oid":"58817f9c7c3b811cf88e463c"},"cat_name":"联通手机充值卡"}
{"_id":{"$oid":"58817fa97c3b811cf88e463d"},"cat_phone":"123232434324","cat_type:"1"}
```
由此可看出上一行与下一行字段可以完全不一致。

- Mongoose
Mongoose封装了对MongoDB对文档的日常操作，包括增删改查等常用方法。

    1. `Schema` 只是一种结构约定，并不具备操作数据库的方法，比如：
    ```javascript
    const UserSchema = new mongoose.Schema({
      username: { 
        type: String,
        required: true
      },
      password: { 
        type: String,
        required: true
      }
    })
    ```
    2. `Model` 除了具备Schema的结构约定之外还有操作数据库的API，比如
    ```javascript
    UserModel.save()
    UserModel.find()
    UserModel.update()
    UserModel.remove()
    ```
    
- Utility
md5，sha1，sha256， hmac， decode，encode


#### 1.3 开发工具

系统 | 工具 | 官网
----|----|----
VScode | 主开发工具 | [https://code.visualstudio.com/](https://code.visualstudio.com/)
Webstorm | 开发工具(兼Git提交) | [https://www.jetbrains.com/webstorm/](https://www.jetbrains.com/webstorm/)
Atom | 源码阅读工具 | [https://atom.io/](https://atom.io/)
Cmder | Cmd替代工具[windows] | [https://cmder.net/](https://cmder.net/)
Notepad2 | 临时单文件编辑[windows] | [http://www.flos-freeware.ch/notepad2.html](http://www.flos-freeware.ch/notepad2.html)
Postman | Http请求工具 | [https://www.getpostman.com/](https://www.getpostman.com/)
Robo 3T | MongoDB可视化工具 | [https://robomongo.org/](https://robomongo.org/)

#### 1.4 文件结构

```javascript

```

需要注意的点：


### 2. 开发约定

### 3. 


### 4. 

### 5. 待开发的






