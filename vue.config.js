/*
* 2022年9月15日17:59:21 LXC
* */
const StylelintWebpackPlugin = require('stylelint-webpack-plugin');

module.exports = () => ({
  // 路由共用的开头部分
  publicPath: '/',
  // BUILD 时在根目录中输出的文件夹名称
  outputDir: 'dist',
  // BUILD 时 STATIC 输出的文件夹名称（* 相较于 outputDir 配置的目录，即在 outputDir 配置的目录下）
  assetsDir: 'static',
  // 指定生成 index.html 的输出路径（* 相较于 outputDir 配置的目录，即在 outputDir 配置的目录下）
  indexPath: 'index.html',
  // Boolean - 生成的 STATIC 在它们的文件名中是否包含了 HASH ，以便更好地控制 STORAGE （eg：`${dir}/[name]${options.filenameHashing ? '.[hash:8]' : ''}.[ext]`）
  filenameHashing: true,
  // Boolean - 在组件中使用 template 选项
  runtimeCompiler: true,
  // 通常情况下 babel-loader 会忽略所有 node_modules 中的文件。如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来
  transpileDependencies: [],
  // Boolean - 资源地图：true：快速定位加载前的代码；false：加速生产环境 BUILD
  productionSourceMap: true,
  /*
  * 设置生成的 HTML 中 <link rel="stylesheet"> 和 <script> 的 crossorigin
  * 注意该选项仅影响由 html-webpack-plugin 在 BUILD 时注入的标签，直接写在模板 （public/index.html） 无影响
  * */
  crossorigin: undefined,
  /*
  * DEFAULT：false
  * 设置生成的 HTML 中 <link rel="stylesheet"> 和 <script> 启用 Subresource Integrity （SRI）
  * 如果构建在 CDN 上，启用则得到额外的安全性
  * 注意该选项仅影响由 html-webpack-plugin 在 BUILD 时注入的标签，直接写在模板 （public/index.html） 无影响
  * 另外，当启用 SRI 时，preload resource hints 会被禁用，因为 Chrome 的一个 bug 会导致文件被下载两次
  * */
  integrity: false,
  css: {
    /*
    * DEFAULT：false
    * 是否为 CSS 开启 source map
    * 设置为 true 后，可能会影响 BUILD 性能
    * */
    sourceMap: false,
    // 选项会传递给 css-loader
    loaderOptions: {
      scss: {
        /* eslint-disable */
        prependData: `@import "src/common/style/color.scss";`
        /* eslint-enable */
      }
    }
  },
  /*
  * boolean，warning 将 LINT 错误输出为加载警告，不会导致加载失败
  * default，error 将 LINT 错误输出为加载警告，会导致加载失败
  * */
  lintOnSave: 'default',
  chainWebpack: result => {
    result.module.rule('eslint').use('eslint-loader').loader('eslint-loader').tap(res => {
      res.emitWarning = res.emitError = res.failOnWarning = res.failOnError = true;
      return res;
    });
    // 修复 HMR 问题
    result.resolve.symlinks(true);
  },
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    },
    open: true,
    port: 8032,
    hotOnly: true,
    proxy: {
      // ---START-测试环境处理-START---
      '/pay/release': {
        target: 'https://pay.jiankangsn.com',
        changeOrigin: true,
        pathRewrite: {
          '^/pay/release': ''
        }
      },
      '/swagger/release': {
        target: 'https://pre.jiankangsn.com',
        changeOrigin: true,
        pathRewrite: {
          '^/swagger/release': ''
        }
      },
      // ---END-测试环境处理-END---
      // ---START-正式环境处理-START---
      '/pay/prod': {
        target: 'https://pay.shunnengnet.com',
        changeOrigin: true,
        pathRewrite: {
          '^/pay/prod': ''
        }
      },
      '/swagger/prod': {
        target: 'https://api.shunnengnet.com',
        changeOrigin: true,
        pathRewrite: {
          '^/swagger/prod': ''
        }
      }
      // ---END-正式环境处理-END---
    }
  },
  configureWebpack: {
    plugins: [
      new StylelintWebpackPlugin({
        files: ['**/*.{html,vue,css,sass,scss}'],
        fix: false,
        emitErrors: true,
        failOnError: true
      })
    ]
  }
});
