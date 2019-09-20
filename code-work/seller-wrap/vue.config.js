const path = require("path")
function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    lintOnSave: false,
    devServer:{
        open:true
    },
    configureWebpack:{
        devServer:{
            port:8088
        },
        resolve: {
            alias: {
                'components': resolve('src/components'),
                "pages":resolve('src/pages')
            }
        },
    }
}