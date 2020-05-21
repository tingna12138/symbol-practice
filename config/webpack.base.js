//webpack配置文件
//引入提取文件的插件
// const ExtractTextPlugin = require("extract-text-webpack-plugin");
//公共资源管理
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 导入清除插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// 引入vue-loader插件
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const path = require ('path')

module.exports = {
    devtool: 'source-map',
    node: {     
      fs: "empty"
    },
    //配置项目入口文件
    // entry: './src/index.js',
    // output: {
    //     filename: 'bundle.js',
    //     //path: path.resolve(__dirname, 'dist')   //默认是打包到dist文件夹
    // },

    //多入口文件
    entry: {
        //这里路径只能用 './src/*'
        main: path.resolve(__dirname,'../src/main.js')
     },
     output: {
         filename:'[name].js',
         path: path.resolve(__dirname, '../practice/'),
         publicPath: 'http://localhost:8080/practice/'
     },
    // mode: 'development',

    
    //模块加载器配置
    module: {
        rules: [
          //配置vue
          {
            test: /\.vue$/,
            use: ['vue-loader']
          },
          //配置css文件加载模块
          {   
            test: /\.css$/,
            use: [
                //把css代码写道网页中
                'style-loader',
                //读取css文件代码
                'css-loader'
            ]
             //提取css文件到单独的文件夹  --已经不能用了；启动服务器首次是刷新页面会有报错
            // use: ExtractTextPlugin.extract({
            //     fallback: "style-loader",
            //     use: "css-loader"
            //   })
          },
          // 处理.styl文件和.vue文件中的lang="styl"
          {
            test: /\.styl$/,
            use: ['style-loader', 'css-loader', 'stylus-loader']
          },
          // less
          {
            test:/\.less$/,
            use: ['style-loader', 'css-loader', 'less-loader']
            // use: ExtractTextPlugin.extract({
            //     fallback: "style-loader",
            //     use: ["css-loader", "less-loader"]
            //   })
          },
          // 将es6语法转为es5语法
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          },
          // 使用eslint格式化代码
          // {
          //   test: /\.js$/,
          //   enforce: "pre",
          //   exclude: /node_modules/,
          //   loader: "eslint-loader",
          //   options: {
          //     // eslint options (if necessary)
          //   }
          // },
          //加载图片
          {
            test:/\.(png|jpg|jpeg|gif)$/,
            use:[
              {
                loader: 'file-loader',
                options: {
                 //引入图片时，会在路径前面添加该选项
                 publicPath: './images',
                 outputPath: 'images'
                }
              }
            ]
          },
          
          {
            test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
            loader: 'file-loader'
        }
      ]
    },
    
    //加载插件
    plugins: [
        // new ExtractTextPlugin('style.css'),
        // new ExtractTextPlugin("./style.css"),

        // 调用清除打包目录插件
        new CleanWebpackPlugin(),
        
        new HtmlWebpackPlugin({
        //   template: '/practice/index.html',
          // 指定生成的html文件使用的模板，默认会使用src/index.ejs
           templateContent: `
             <html>
               <body>
                 <div id="app"></div>
               </body>
             </html>`
        }),

        // vue加载器插件
        new VueLoaderPlugin()
    ]
}