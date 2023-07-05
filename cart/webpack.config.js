const HTMLWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode : 'development',
    devServer : {
        port : 8082,
    } ,
    plugins : [
        new HTMLWebpackPlugin({
            template : "./public/index.html"
        }),

        new ModuleFederationPlugin({
            name : "carts",
            filename: 'remoteEntry.js',
            exposes : {
                './CartsIndex': "./src/index"

            },
            shared : ['faker']
        })
    ]
}