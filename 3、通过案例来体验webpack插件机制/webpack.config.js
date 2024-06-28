const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/main.js', // 你的入口文件
    output: {
        path: path.resolve(__dirname, 'dist'), // 输出的目录
        filename: 'bundle.js' // 输出的文件名
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Webpack Plugin Sample',
            template: './src/index.html' // 配置模板文件
        }),
        new HtmlWebpackPlugin({
            filename: 'about.html'
        }),
        new CopyWebpackPlugin({
            patterns: ['public'] // 配置需要拷贝的路径
        })
    ],
    mode: 'none'
}