module.exports = {
    entry: ['./js/app.js'],
    output: {
        path: __dirname + '/dist/js',
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style!css' }
        ]
    }
};
