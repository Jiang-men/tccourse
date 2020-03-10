const path = require('path'),
        uglify = require('uglifyjs-webpack-plugin'),
        htmlWebpackPlugin = require('html-webpack-plugin'),
        autoprefixer = require('autoprefixer'),
        MiniCssExtractPlugin = require('mini-css-extract-plugin'),
        OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const config = {
  mode: 'development', //production    development     none
  entry: {
  	index: path.resolve(__dirname, './src/js/index.js'),
  	list: path.resolve(__dirname, './src/js/list.js'),
  },
  output: {
  	path: path.resolve(__dirname + '/dist'),
  	filename: 'js/[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: path.resolve(__dirname, 'node_modules'),
        query:{
          "presets": ["latest"]
        }
      },
      {
        test: /\.tpl$/,
        loader: 'ejs-loader'
      },
      {
        test:/\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hrm: process.env.NODE_ENV === 'development'
            }
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [autoprefixer('last 5 versions')]
              }
            }
          }
        ]
      },
      {
        test:/\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hrm: process.env.NODE_ENV === 'development'
            }
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [autoprefixer('last 5 versions')]
              }
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|ico)$/i,
        loaders: [
          'url-loader?limit=1024&name=img/[name]-[hash:16].[ext]',
          'image-webpack-loader'
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/i,
        loader: [
          'url-loader?name=fonts/[name].[ext]'
        ]
      }
    ]
  },

 plugins: [
    new uglify(),
    new OptimizeCssAssetsPlugin({}),
    new htmlWebpackPlugin({
      minify: {
      	removeComments: true,
      	collapseWhitespace: true
      },
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/index.html'),
      title: '腾讯课堂首页',
      chunksSortMode: 'manual',
      chunks: ['index'],
      excludeChunks: ['node_modules'],
      hash: true
    }),
    new htmlWebpackPlugin({
      minify: {
        removeComments: true,
        collapseWhitespace: true
      },
      filename: 'list.html',
      template: path.resolve(__dirname, 'src/list.html'),
      title: '腾讯课堂课程列表页',
      chunksSortMode: 'manual',
      chunks: ['list'],
      excludeChunks: ['node_modules'],
      hash: true
    }),
 
    new MiniCssExtractPlugin({
    	filename: 'css/[name].css'
    })
  ],

  devServer: {
    watchOptions: {
      ignored: /node_modules/
    },
    open: true,
    host: 'localhost',
    port: 3200
  }
}

module.exports = config;