const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlInlineCssWebpackPlugin = require('html-inline-css-webpack-plugin').default

module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: 'bundle.js',
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: './index.html',
            template: './src/index.html',
        }),
        new HtmlInlineCssWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: '/node_modules/'
            }
        ]
    }
}