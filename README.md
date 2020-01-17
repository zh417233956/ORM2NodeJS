# ORM2NodeJS
Node.js 通过ORM实现mysql操作

# 项目初始化

```shell
# 获取源码
git clone https://github.com/zh417233956/ORM2NodeJS.git
# 安装npm包
npm install
# 在./db/dbConn.js中修改mysql连接

# 同步表结构
node db/sync.js
# 初始化数据
node initData.js
# 启动
node app.js

# 访问API
http://127.0.0.1:9009/api/index?id=1
```


# Sequelize 初步使用

## 1. 创建连接对象，并模块化
- 新建数据库连接模块dbConn.js，单独提出连接数据库的对象sequelize
- 根据数据库的一些参数，创建了sequelize数据库连接模块，并对外引用

## 2.定义数据表结构，将表结构写进代码里

> 每个表对应一个文档

- /db/models下

## 3. 同步数据表结构
> 批量同步数据结构

- 把数据模型放在一个目录下models，在models目录外，有一个sync.js文件
- 行执行node db/sync.js 会将models下所有的表接口写入数据库

## 4. 创建一些初始数据
> 用来初始化一些基础数据，如initData.js
