const path = require('path');

module.exports = {
    entry : {
        app:'./src/index.js',
        print: './src/print.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname,'dist')
    },
    module:{
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
            },{
                test: /\.xml$/,
                use: [
                    'xml-loader'
                ]
            }
        ]
    }
}