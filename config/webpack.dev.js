const merge = require('webpack-merge');
const base = require('./webpack.base.js');
const path = require('path')

module.exports = merge(base, {
    mode: "development",
    
    // 生成map映射文件
    devtool: "source-map",
	
    // 开发服务器配置
    devServer: {
        port: 8080,// 默认端口是8080
        stats: 'errors-only',   // + 只打印报错信息
        // history模式下的url会请求到服务器端，但是服务器端并没有这一个资源文件，就会返回404，所以需要配置这一项
		historyApiFallback: {
			index: path.join(__dirname, '../practice/index.html') //与output的publicPath有关(HTMLplugin生成的html默认为index.html)
		}
   },
})