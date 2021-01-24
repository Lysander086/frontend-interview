import path from 'path'
import webpack from 'webpack'
export default ({
  entry: ['webpack-hot-middleware/client?noInfo=true&reload=true&timeout=100', './js/index.js'],
  output: {
    path: path.join(__dirname, '/static/'),
    filename: 'index.min.js'
  },
  mode: 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: "source-map" // 配置源码映射方便调试
})
