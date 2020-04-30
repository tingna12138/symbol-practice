##package.json > script
  1. build: 打印右边的字符串
  2. pro、post: 在每个命令前都会执行对应命令的pre+scriptname 脚本，每个命令结束后会执行对应买了的post+scriptname脚本
  3. 生命周期事件: https://blog.csdn.net/starter_____/article/details/78935645?utm_source=blogxgwz3



  # 问题解决

## 1.项目配置

### # vue-router 设置 `mode:'history'`的坑。

  要在devServer中额外加一条配置

  ```js
// webpack.dev.js
...
devServer: {
    ...
   // 设置 history模式后，地址栏的url会请求到服务器，服务器没有这一资源路劲就会报404的错。需要配置这一项
   historyApiFallback: {
	  index: '/index.html' //与output的publicPath有关(HTMLplugin生成的html默认为index.html)
	} 
}
  ```



### # webpack的配置

#### 1. path 和 publicPath

1. `publicPath`:  会在你请求资源路径加一个`publicPath`对应值的前缀 。用于设置网站的根目录

   ```js
   outputPath: {
    publicPath: '/public/'  // 最好不要写成 `/public`，因为在请求一些 .woof和.ttf文件时，会和后面的路径混合，没有斜杠分开
   }
   // 相当于将 http://localhost:8000 设置成 http://localhost:8000/public/.所有资源相对于根目录的请求路径都会变成这个前缀
   ```

2. `path`:  储存你所有输出文件的本地目录，必须为绝对路径

   ```js
   // 在本项目中，配置如下
   output: {
            filename:'[name].js',
            path: path.resolve(__dirname, '../public'),
            publicPath: 'http://localhost:8080/practice/'
        },
   // 依然可以通过 http://localhost:8080/practice/main.js获取到文件
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



## 2.编写菜单与tab标签的映射关系

 ###  菜单结构搭建

### tabs标签页结构搭建

#### 1. 注册全局路由

- http请求304提示： 不算报错。服务器端没有更改页面，就会告诉前端直接提取缓存中的数据

- 报错找不到 `index.html`文件

  ![image-20200430083422446](../../../AppData/Roaming/Typora/typora-user-images/image-20200430083422446.png)

​        **原因：**我把public文件夹下的`index.html`删了。