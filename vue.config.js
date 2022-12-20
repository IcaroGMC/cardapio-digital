module.exports = {

    publicPath: process.env.VUE_APP_BASE_URL,
    productionSourceMap: false,
    assetsDir: 'assets',
    lintOnSave: false,
    runtimeCompiler: true,

    configureWebpack: {

        devServer: {
            https: true,
            hot: true,
            port: 8082,
            host: '192.168.0.73',
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        }

    }

};