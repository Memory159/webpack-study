const path = require('path');

module.exports = {
    entry: './src/index.js', // 你的入口文件
    output: {
        path: path.resolve(__dirname, 'dist'), // 输出的目录
        filename: 'bundle.js' // 输出的文件名
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    }
};