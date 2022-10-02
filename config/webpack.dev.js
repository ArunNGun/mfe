const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common')
const packageJson = require('../package.json')
const devConfig = {
    mode: 'development',
    devServer: {
        port: 8081,
        historyApiFallback: {
            index: 'index.html'
        },
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new ModuleFederationPlugin({
            name: 'authModal',
            filename: 'remoteEntry.js',
            exposes: {
                './AuthModal': './src/bootstrap.js'
            },
            shared: packageJson.dependencies,
        })
    ]
}

module.exports = merge(commonConfig, devConfig)