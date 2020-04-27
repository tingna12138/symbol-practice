##package.json > script
  1. build: 打印右边的字符串
  2. pro、post: 在每个命令前都会执行对应命令的pre+scriptname 脚本，每个命令结束后会执行对应买了的post+scriptname脚本
  3. 生命周期事件: https://blog.csdn.net/starter_____/article/details/78935645?utm_source=blogxgwz3



  # 问题解决

## 1.项目配置

### vue-router 设置 `mode:'history'`没有效果。

  要在devServer中额外加一条配置

  ```js
// webpack.dev.js
...
devServer: {
    ...
   historyApiFallback: {
			index: '/index.html' //与output的publicPath有关(HTMLplugin生成的html默认为index.html)
	} 
}
  ```



### 请求头的问题

- 自定义的请求头



### 打包到客户端，出现不能识别node的插件

```js
// getData.js 

const path = require('path')
const fs = require('fs')

// ../data/menu.json 是一个json文件
const MENU = fs.readFileSync(path.join(__dirname, '../data/menu.json'), 'utf-8')

const menuPayload = JSON.parse(MENU)

// 用export的方式到处会报错
module.exports = {
  menuPayload
}

// 在页面组件中引入menuPayload，出现报错: vue-router.esm.js:2079 TypeError: fs.readFileSync is not a function
  // 但在node环境单独执行getData.js没有问题
// 解决思路：https://blog.csdn.net/qq_38333496/article/details/102474532
```

