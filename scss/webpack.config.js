const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: 'bundle.js',
        clean: true,
        assetModuleFilename: 'assets/[hash][ext][query]'
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.css$/i,
                use: [
                    "style-loader",
                    "css-loader",
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: './index.html',
            template: './src/index.html',
        }),
        new CopyPlugin({
            patterns: [
                {from: "src/assets", to: "assets"},
            ],
        }),],
    devServer: {
        open: true,
        liveReload: true,
        static: path.resolve(__dirname, './src')
    },
};