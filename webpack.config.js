const path = require('path');

module.exports = {
    entry: './src/index.js',
    devtool: 'eval-source-map',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.jsx', '.js']
    },
    output: {
        filename: 'js/bundle.js',
        path: path.resolve(__dirname, 'gui/static')
    }
}