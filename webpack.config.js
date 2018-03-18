const path=require('path');
const htmlwebpackPlugin=require('html-webpack-plugin');
const cleanwebpackPlugin=require('clean-webpack-plugin');
const webpack = require('webpack');
//const ExtractTextPlugin=require('extract-text-webpack-plugin')


module.exports={
    entry:[
        'react-hot-loader/patch',   
        './src/index.js',
        
            ],
    devtool:'source-map',
    devServer:{
        contentBase:'./dist',
        hot:true
    },
    plugins:[
        new cleanwebpackPlugin(['dist']),
        new htmlwebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
        }),
       // new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                loaders:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/\.(png|svg|jpg|gif)$/,
                use:[
                    'file-loader'
                ]
            },
            {    
                test: /\.js$/,    
                exclude: /node_modules/,    
                loader: 'babel-loader'    
            }
        ]
    }
}