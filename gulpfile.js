var gulp = require('gulp');
var spawn = require('child_process').spawn;
var livereload = require('gulp-livereload');

gulp.task('serve', function () {
    'use strict';
    spawn('webpack-dev-server', ['--config', './webpack.hot.config.js', '--progress', '--inline']);
});

gulp.task('watch', function () {
    livereload.listen();
    gulp.watch('*.html', function () {
        gulp.src('*.html').pipe(livereload());
    });
});
