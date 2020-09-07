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
          index: '/practice/index.html'  // 或者下面的配型形式
          // rewrites: [{
          //     from: /.*/,
          //     // to: '/practice/index.html'  或者下面的路径形式
          //     // path.posix.join(__dirname, '../practice/index.html')
          // }]
        },
        hot: true,
        proxy: {
          '/dev_api': {
            target: 'http://127.0.0.1:3000',
            changeOrigin: true,
            pathRewrite: {
              '^dev_api': ''
            }
          }
        }      
    },
  //   optimization: {
  //   splitChunks: {
  //     chunks: 'all', // 这表明将选择哪些模块进行优化.有效值为all，async和initial。默认情况下支队异步chunks生效，且不需要配置
  //     minSize: 30000, // 生成块的最小大小。数字（以字节为单位）
  //     minRemainingSize: 0,
  //     maxSize: 0,
  //     minChunks: 1,
  //     maxAsyncRequests: 6,
  //     maxInitialRequests: 4,
  //     automaticNameDelimiter: '~', // 提取的文件名称的分隔符，默认是 ~
  //     cacheGroups: {
  //       // 当一个模块同时符合多个cacheGroup时，会根据其中的priority配置项确定优先级
  //       defaultVendors: { // 用于提取node_module中所有符合条件的模块
  //         test: /[\\/]node_modules[\\/]/,
  //         priority: -10
  //       },
  //       default: { // 作用于被入口多次引用的模块
  //         minChunks: 2,
  //         priority: -20,
  //         reuseExistingChunk: true
  //       }
  //     }
  //   }
  // },
   plugins: [
       // 定义全局变量
       new webpack.DefinePlugin({
         'process.env': require('../build/dev.env')
       }),
       // 热启动插件
       new webpack.HotModuleReplacementPlugin({
      })
   ]
})