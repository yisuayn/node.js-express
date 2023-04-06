#node.js+express

node.js+express connects to sql server to realize data communication and lightweight development of back-end services(node.js+express连接sql server，实现数据通信和后端服务的轻量级开发).

本文主要介绍怎么通过node.js——express去连接sql server数据库

#文件

##创建文件和文件夹创建新的文件方便代码的保存和整理

##安装连接数据库的插件
express
```美人鱼
npm install mssql
```

##利用express命令创建

express
```美人鱼
npx express-generator

npm install
```
##创建dbconfig.js文件 用于配置数据库连接池
dbconfig.js
```美人鱼
const  config = {
			user:  "xx",//数据库连接名
			password:  "xxxxxx",//密码
			server:  "xxxxxxxx",//用户名（一般本地是localhost，线上以实际的服务器IP）
			database:  "xxxxxxxx",//数据库表名
			pool: {
			max:  10,
			min:  0,
			idleTimeoutMillis:  30000
},
options: {
trustedConnection:  true,//是否使用windows身份验证
enableArithAbout:  true,
instancename:  "",
encrypt:  true, // for azure
trustServerCertificate:  true  //本地dev /自签名证书更改为true
},
port:  1433  /端口号
};
module.exports = config;
```
##创建dboperation.js ,配置数据库相关操作
```美人鱼
var  config = require('./dbconfig');
const  sql = require("mssql");
async  function  getdata() {//按id查找
try {
		console.log("sql server connected............");
		let  pool = await  sql.connect(config);//通过dbconfig连接数据库
		let  res = await  pool.request().query("SELECT * FROM “数据库名” ORDER BY id desc");
		return  res.recordsets;
		} catch (error) {
		console.log("mathus-error :" + error);
		}
}
module.exports = {
getdata:  getdata,
}
```
