const path = require('path')
const webpack = require('webpack')
const htmlWebPackPlugin = require('html-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    entry: './src/client/index.js',
    output: {
        path: path.join(__dirname, "dist"),
        filename: "main.js",
        libraryTarget: 'var',
        library: 'Client'
        },
    mode: 'production',
    module: {
        rules: [
                {
            test: '/\.js$/',
            exclude: /node_modules/,
            loader: "babel-loader"
                },
                {
            test: /\.scss$/,
            use: [ 'style-loader', 'css-loader', 'sass-loader' ]
                }
        ]
    },
    plugins: [
        new htmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),
        new WorkboxPlugin.GenerateSW()
    ]
}
