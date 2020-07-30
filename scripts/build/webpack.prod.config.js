const { merge } = require('webpack-merge');
const commonWebpackConfig = require('./webpack.common.config.js');

module.exports = merge(commonWebpackConfig, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin()
  ]
});