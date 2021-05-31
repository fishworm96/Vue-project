const path = require('path')

const resolve = dir => path.join(__dirname, dir)



module.exports = {
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: false,
  //项目基本路径
  //判断开发环境还是生产环境
  // '/'一个斜线意思是指定在域名的根目录下
  //如果是开发环境只用写一个斜杠
  publicPath: process.env.NODE_ENV === 'procution' ? '/dist/' : '/',
  chainWebpack: config => {
    config.resolve.alias
      // 代表当前路径拼接上src
      //@代表src路径，比如要使用api直接@/api
      .set('@', resolve('src'))
      //_c即代表src/components路径
      .set('_c', resolve('src/components'))
  },
  //打包时不生成.map文件，减少打包体积，加快打包速度
  productionSourceMap: false,
  // 配置跨域，告诉开发服务器将任何未知请求，就是没有匹配到静态文件的请求都代理到这个url来满足跨域的请求
  devServer: {
    // host: 'localhost',
    // port: '8080',
    // hot: true,
    // open: true,
    // overlay: {
    //   warning: false,
    //   error: true
    // },
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: process.env.VUE_APP_BASE_API,
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    }
  }
}