//webpack配置文件
//引入提取文件的插件
const ExtractTextPlugin = require("extract-text-webpack-plugin");
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
        //下面所配置的模块资源，都是针对在入口文件中有引入的文件，
        //且不用管这些模块资源原本在那个文件夹下面
        rules: [
            //配置css文件加载模块
            {   
                //疑问：匹配所有在entry文件里引入的所有css文件
                //匹配所有的以 .css结尾的文件
                test: /\.css$/,
                // use: [
                //     //把css代码写道网页中
                //     'style-loader',
                //     //读取css文件代码
                //     'css-loader'
                // ]

                 //提取css文件到单独的文件夹
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                  })
            },
            // 加载less文件的模块加载器
            {
                test:/\.less$/,
                // use:[
                //     //将文件写到网页中
                //     'style-loader',
                //     //读取less文件
                //     'css-loader',
                //     //编译less文件
                //     'less-loader'

                //     /**  以下操作不可行
                //      * { loader: 'style-loader' },
                //     { loader: 'css-loader' ,
                //       options: {
                //           publicPath: './css',
                //           outputPath: 'css'
                //       } },
                //     { loader: 'less-loader' },
                //      *  */
                // ]
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "less-loader"]
                  })
            },
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
            //配置vue
            {
                test: /\.vue$/,
                use: ['vue-loader']
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader'
          }
        ]
    },
    
    //加载插件
    plugins: [
        new ExtractTextPlugin('style.css'),
        new ExtractTextPlugin("./style.css"),

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