const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode: 'production',
  entry: path.join(__dirname, 'src/main.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ['vue-loader'] //需要安装vue-loader vue-template-compiler
      }

      // {
      //   test: /\.vue$/,
      //   loader: 'vue-loader'
      // }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html')
    }),
    new VueLoaderPlugin()
  ],
  devServer: {
    open: true,
    port: 9999
  }
}
