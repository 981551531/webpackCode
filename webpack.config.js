const path = require('path');
var webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: './main.js',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist')
    },
    resolve: {
        extensions: [".js", "jsx", ".ts", ".json"]
    },
    devtool: "source-map",
    module: {
        rules: [
            /*{
            test:/\.css$/,
            use: ['style-loader','css-loader?minimize'],
        }*/
            {
                test: /\.css$/, loader: ExtractTextPlugin.extract({
                    use: ['css-loader']
                })
            },
            {
                test: /\.js/, use: ["babel-loader"]
            }


        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: '[name].css',
        })      ,
        new webpack.optimize.OccurrenceOrderPlugin(),
    ],
    devServer: {
        headers: {
            'auto': 44,

        },
        https: false

    }
};