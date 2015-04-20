var config = require('./webpack.config.js');
var webpack = require('webpack');

config.entry.push('webpack/hot/dev-server');
config.output.publicPath = '/dist/js/';
if (!config.plugins) {
    config.plugins = [];
}
config.plugins.push(new webpack.HotModuleReplacementPlugin());
config.devServer = {
    hot: true,
};
module.exports = config; 
