const path = require('path')
const IS_PRO = ['production', 'test'].includes(process.env.NODE_ENV)

module.exports = {
  outputDir: './build',
  // publicPath:'./'
  devServer: {
    proxy: {
      '^api': {
        target: 'http://152.136.185.210:5000',
        pathRewrite: {
          '^api': ''
        },
        changeOrigin: true
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        components: '@/components'
      }
    }
  },
  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     '@': path.resolve(__dirname, 'src'),
  //     views: '@/views'
  //   }
  // },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src'))
      .set('views', '@/views')
    // 修复HMR
    // config.resolve.symlinks(true)
  },
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: IS_PRO,
    // 开启 CSS source maps  打包时不生成.map文件?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {},
    // 为所有的 CSS 及其预处理文件开启 CSS Modules。
    // 这个选项不会影响 `*.vue` 文件。
    requireModuleExtension: true
  }
}
