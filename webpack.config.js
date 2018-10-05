const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        // app:'./src/index.js',
        // print: './src/print.js'
        app: './src/index.js'
    },
    mode: 'production',
    devtool: 'inline-source-map',//shows exact file for errors
    devServer: {
        contentBase: './dist',
        hot: true
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Output Management'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]

            },
            {
                test: /\.(png|svg|jpg|gif)$/i,
                use: [
                    'file-loader',
                    {
                        //Optimise Image(minify image)
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true,
                            disabled: true,
                            //can be optimized on particular  optimizer 
                        }
                    }

                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(cvs|tsv)$/,
                use: [
                    'cvs-loader'
                ]
            }, {
                test: /\.xml$/,
                use: [
                    'xml-loader'
                ]
            }
        ]
    }
}