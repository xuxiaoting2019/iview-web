const path = require('path')

module.exports = {
  publicPath: './', // 基本路径
  outputDir: 'dist', // 输出文件目录
  lintOnSave: false, // eslint-loader 是否在保存的时候检查
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  // webpack配置
  chainWebpack: (config) => {
    config.resolve.alias
      .set('assets', path.resolve('src/assets'))
      .set('components', path.resolve('src/components'))
      .set('views', path.resolve('src/views'))
  },
  // css相关配置
  css: {
      loaderOptions: {
        stylus: {

        }
      }, // css预设器配置项 详见https://cli.vuejs.org/zh/config/#css-loaderoptions
  },
  // webpack-dev-server 相关配置
  devServer: {
    disableHostCheck: true,
    overlay: {
        warnings: false,
        errors: false
    }, // 错误、警告在页面弹出
    proxy: {
        '/api': {
            target: 'http://www.baidu.com/api',
            changeOrigin: true, // 允许websockets跨域
            // ws: true, // 如果要代理 websockets，配置这个参数
            // secure: false,  // 如果是https接口，需要配置这个参数
            pathRewrite: {
                '^/api': ''
            }
        }
    } // 代理转发配置，用于调试环境
  },
  // 第三方插件配置
  pluginOptions: {}
}