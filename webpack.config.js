const path = require('path');

module.exports = {
    // mode: 'development',
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        // filename: 'uu-utils.js',
        filename: 'uu-utils.min.js',
        // 向外暴露的对象的名称
        library: 'uuUtils',
        // 打包生成库可以通过 esm/commonjs/requirejs的语法引入
        libraryTarget: 'umd'
    },
    // 外部
    externals: {

    }
}