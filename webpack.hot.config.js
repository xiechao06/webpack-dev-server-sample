var config = require('./webpack.config.js');
var webpack = require('webpack');

config.entry.push('webpack/hot/dev-server');
// This modified bundle is served from memory at the relative path specified in publicPath (see API)
config.output.publicPath = '/dist/js/';
if (!config.plugins) {
    config.plugins = [];
}
config.plugins.push(new webpack.HotModuleReplacementPlugin());
config.devServer = {
    hot: true,
};
module.exports = config; 
