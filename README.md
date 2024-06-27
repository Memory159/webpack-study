## Webpack 问题解答！
Webpack 最初的目标就是实现前端项目的模块化，也就是说它所解决的问题是如何在前端项目中更高效地管理和维护项目中的每一个资源。

### 1、有哪些模块化方案，各有什么特点？
**commonJS、AMD、CMD、ESMoudle、UMD**
#### 1、CommonJS规范：
- Node.js 中所遵循的模块规范
- 一个文件就是一个模块，每个模块都有单独的作用域，通过 module.exports 导出成员，再通过 require 函数载入模块。
- 它是以同步的方式加载模块
- 自带模块加载器
#### 2、AMD规范：
- 专门为浏览器端重新设计了一个规范
- 异步模块定义规范
- 需要结合 Require.js 来实现模块的加载器
- 每个模块通过define函数定义，然后通过 require 语句加载模块。
#### 3、CMD规范：
- 淘宝推出的模块化方案，标准类似commonJS，写法类似 AMD
- 使用 Sea.js 进行模块加载
#### 4、UMD规范
- 兼容多种模块系统，可以在 AMD、CommonJ 和全局变量环境下工作(先判断是否支持Node.js模块(exports是否存在)，存在则使用Node.js模块模式;再判断是否支持AMD(define是否存在)，存在则使用AMD方式加载模块;前两个都不存在，则将模块公开到全局(window或qlobal))
#### 5、ESMoudle规范：
- 使用import和export语句来导入和导出模块
- 内置模块加载器
- 可以同时在浏览器和 nodeJS 中使用，但是存在兼容性问题
- 支持静态分析和tree-shaking;(可选)
- 支持异步加载和动态import语法，可以在编译时就完成模块加载(可选)

