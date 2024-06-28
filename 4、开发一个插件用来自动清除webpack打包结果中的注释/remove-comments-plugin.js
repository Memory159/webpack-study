class RemoveCommentsPlugin {
    apply(compiler) {
        console.log('RemoveCommentsPlugin 启动');
        compiler.hooks.emit.tap('RemoveCommentsPlugin', compilation => {
            for (const name in compilation.assets) {
                const contents = compilation.assets[name].source()
                const noComments = contents.replace(/\/\*{2,}\/\s?/g, '')
                compilation.assets[name] = {
                    source: () => noComments,
                    size: () => noComments.length
                }
            }
        })
    }
}
module.exports = RemoveCommentsPlugin;