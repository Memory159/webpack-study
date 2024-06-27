const path = require('path');

module.exports = {
    entry: './src/main.js', // 你的入口文件
    output: {
        path: path.resolve(__dirname, 'dist'), // 输出的目录
        filename: 'bundle.js' // 输出的文件名
    },
    module: {
        rules: [{
            test: /\.md$/,
            exclude: /node_modules/,
            use: [
                // 'html-loader', // 方式二
                './markdown-loader'
            ]
        }]
    },
    mode: 'none'
};