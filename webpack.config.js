const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: './main.js',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, './dist')
    },
    resolve: {
        extensions: [".js", "jsx", ".ts", ".json"]
    },
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
        })
    ],
    devServer: {
        headers: {
            'auto': 44,

        },
        https: true

    }
};