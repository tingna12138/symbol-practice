const merge = require('webpack-merge');
const base = require('./webpack.base.js');
const path = require('path')
const webpack = require('webpack')

module.exports = merge(base, {
    mode: "development",
    
    // 生成map映射文件
    devtool: "source-map",
	
    // 开发服务器配置
    devServer: {
        port: 8080,// 默认端口是8080
        stats: 'errors-only',   // + 只打印报错信息
        // history模式下的url会请求到服务器端，但是服务器端并没有这一个资源文件，就会返回404.所以需要配置这一项,使当出现404报错或者请求特定的url时，跳转到指定的页面。
        // 服务器会把请求路径交给router路由，路由在对路径进行解析
		historyApiFallback: {
          index: '/practice/index.html'   // 听说不要在practice前面加 .
          // rewrites: [{
          //     from: /.*/g,
          //     to: '/practice/index.html'
          // }]
          }
   },
   plugins: [
       // 定义全局变量
       new webpack.DefinePlugin({
           'process.env': require('../build/dev.env')
       })
   ]
})