const { merge } = require('webpack-merge');
const commonWebpackConfig = require('./webpack.common.config.js');
const webpack = require('webpack');

module.exports = merge(commonWebpackConfig, {
  mode: 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // 热更新插件
    new webpack.NamedModulesPlugin(),         // 当开启 HMR 的时候使用该插件会显示模块的相对路径
    new webpack.NoEmitOnErrorsPlugin(),       // 在编译出错时用来跳过输出阶段，保证输出的资料都是正确的
  ]
});
