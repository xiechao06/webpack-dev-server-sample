var gulp = require('gulp');
var spawn = require('child_process').spawn;

gulp.task('serve', function () {
    'use strict';
    spawn('webpack-dev-server', ['--config', './webpack.hot.config.js', '--progress', '--inline']);
});
