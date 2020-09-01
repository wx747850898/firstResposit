'use strict'
require('./check-versions')()

process.env.NODE_ENV = 'production'

//主要用来实现node.js命令行环境的loading效果，和显示各种状态的图标等
const ora = require('ora')
//以包的形式包装rm -rf命令，用来删除文件和文件夹的，不管文件夹是否为空，都可删除
const rm = require('rimraf')
//path模块是node.js中处理路径的核心模块。可以很方便的处理关于文件路径的问题。
const path = require('path')
//chalk是一个颜色的插件。可以通过chalk.blue(‘hello world’)来改变颜色
const chalk = require('chalk')
//打包工具
const webpack = require('webpack')
//本地配置（根据一些配置来控制打包需要的插件）
const config = require('../config')
//线上打包配置
const webpackConfig = require('./webpack.prod.conf')

const spinner = ora('building for production...')
spinner.start()

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
  webpack(webpackConfig, (err, stats) => {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    if (stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'))
      process.exit(1)
    }

    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
  })
})
