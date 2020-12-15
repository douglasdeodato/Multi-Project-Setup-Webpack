const path = require('path');
const { CleanWebpackPlugin } = require ('clean-webpack-plugin');
const HtmlWebpackPlugin = require ('html-webpack-plugin');
const {ModuleFederationPlugin} = require('webpack').container;


module.exports = {
    entry: './src/page2.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: ''
    },
    mode:'development',
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        index: 'page2.html',
        port: 9002,
        writeToDisk: true
    },

    module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test:/\.scss$/,
                use:[
                    'style-loader', 'css-loader', 'sass-loader'
                ]
            },
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env'],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                }
            },
            {
            test: /\.hbs$/,
            use: [
                'handlebars-loader'
            ]
        }
        ]
    },
    plugins : [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'page2.html',
            title: 'hello world handlebars',
            template: 'src/index.hbs',
            description: 'page 2 desc'
        }),
        new ModuleFederationPlugin({
            name:'page2',
            remotes: {
                HelloWorldApp:'HelloWorldApp@http://localhost:9001/remoteEntry.js'
            }
        })
    ]
}