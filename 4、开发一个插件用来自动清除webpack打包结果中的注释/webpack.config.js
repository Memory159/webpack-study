const path = require('path')
const RemoveCommentsPlugin = require('./remove-comments-plugin')
module.exports = {
    entry: './src/main.js', // 你的入口文件
    output: {
        path: path.resolve(__dirname, 'dist'), // 输出的目录
        filename: 'bundle.js' // 输出的文件名
    },
    plugins: [
        new RemoveCommentsPlugin() // 配置移除注释的插件
    ],
    mode: 'none'
}