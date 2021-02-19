const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const process = require('process');

//console.log(process);
console.log(process.env);


module.exports = {
    entry: ['./src/index.js', './src/scss/index.scss'],
    devtool: 'source-map',
    mode: process.env.NODE_ENV,
    module: {
        rules: [
            {
                test: /.vue$/,
                use: 'vue-loader'
            },
            {
                test: /.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            publicPath: '/static/imgs',
                            outputPath: 'imgs'
                        }
                    }
                ]
            },
            {
                test: /\.(eot|woff|woff2|ttf)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            publicPath: '/static/fonts',
                            outputPath: 'fonts'
                        }
                    }
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    {loader: process.env.NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader'},
                    {loader: 'css-loader', options: {sourceMap: true}},
                    {loader: 'sass-loader', options: {sourceMap: true}}
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {'vue$': 'vue/dist/vue.esm.js'}
    },
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'gui/static')
    },
    optimization: {
        minimize: process.env.NODE_ENV === 'production',
    },
    plugins: [ //development production
        new webpack.DefinePlugin({"process.env": {NODE_ENV: JSON.stringify("development")}}),
        new MiniCssExtractPlugin({filename: 'css/[name].css'}),
        new VueLoaderPlugin()
    ]
}