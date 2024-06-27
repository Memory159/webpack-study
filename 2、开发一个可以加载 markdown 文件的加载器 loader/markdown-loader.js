// 方式一
const marked = require('marked')
module.exports = source => {
    const html = marked.parse(source)
    const code = `module.exports = ${JSON.stringify(html)}`
    return code
}

// 方式二
// const marked = require('marked')
// module.exports = source => {
//     const html = marked.parse(source)
//     return html
// }