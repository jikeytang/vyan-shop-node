# vyan-shop-node
[微燕商城微信端 - vyan-shop-weixin](https://github.com/jikeytang/vyan-shop-weixin)  
[微燕商城admin管理 - vyan-shop-admin](https://github.com/jikeytang/vyan-shop-admin)

---

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
Nodemon  |  自启动工具 | [https://github.com/remy/nodemon](https://github.com/remy/nodemon)


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
[tree 命令输出结构](https://blog.csdn.net/qq673318522/article/details/53713903) `tree -L 3 -I "node_modules"`
```javascript
.
├── app                                     // 所有相关代码
│   ├── controller                          // 控制器
│   │   ├── adv.controller.js               // 常用操作/广告管理
│   │   ├── index.js                        // 所有相关代码
│   │   ├── order.controller.js             // 订单管理
│   │   └── user.controller.js              // 登录用户相关
│   └── models                              // 所有Model
│       ├── adv.model.js                    // 常用操作/广告管理
│       ├── connect.js                      // 数据库连接
│       ├── order.model.js                  // 订单管理
│       └── user.model.js                   // 登录用户相关
├── app.js                                  // 逻辑入口
├── config                                  // 配置目录
│   └── index.js                            // 配置文件
├── nodemon.json                            // nodemon配置文件
├── package-lock.json                       
├── package.json                            
├── routes                                  // 路由控制
│   └── index.js                            
└── uploads                                 // 上传目录
    └── test.txt
```

PS：

- `user.controller.js，user.model.js` 取名的目的为多次打开相同文件容易区分
- 纯接口项目无 `public,views` 目录


### 2. 开发约定
#### 2.1 [nodeman](https://github.com/remy/nodemon) 
项目采用nodeman来启动整个服务，关于他的[介绍](https://juejin.im/post/5b5005f7f265da0f66401fe7)，可以在命令行直接输入`rs`快速启动，在script中增加方便启动项目。
```shell
"scripts": {
  "dev": "nodemon app.js",
  "start": "nodemon app.js"
},
```
#### 2.2 [mlab](https://mlab.com/)
数据库使用在线免费mlab服务，参考自[N-blog教程](https://github.com/nswbmw/N-blog)，本地客户端[robo 3T](https://robomongo.org/)连接[教程](https://stackoverflow.com/questions/44422694/how-would-someone-connect-their-mlab-mongodb-database-to-robomongo-when-mlab-onl)，备选[方案](https://university.mongodb.com/)。

#### 2.3 代码风格
遵守eslint，并且文件`vyan-shop-node/.eslintrc.json`可被修改

### 3. 开发说明
#### 3.1 用户登录
#### 3.2 商品管理
#### 3.3 订单管理 此模块由[广州-天蝎](https://github.com/yhtx1997)完成

### 4. 待开发的


- [ ] 系统设置
- [ ] 友情链接







