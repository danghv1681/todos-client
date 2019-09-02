    const { CleanWebpackPlugin } = require('clean-webpack-plugin')
    const HtmlWebpackPlugin = require('html-webpack-plugin')
    const path = require('path')
    
    module.exports = {
        entry: ['babel-polyfill', './src/index.js'],
        output: {
            filename: '[name].[hash].js',
            path: path.resolve('./dist'),
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: [{ loader: 'babel-loader' }],
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: 'index.html'
            }),
            new CleanWebpackPlugin()
        ],
        devServer: {
            host: 'localhost',
            port: 3000,
            open: true,
        }
    }