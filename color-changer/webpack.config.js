const modoDesenvolvimento = process.env.NODE_ENV !== 'production';

const webpack = require('webpack');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const htmlPlugin = require("html-webpack-plugin");

module.exports = {
    mode: modoDesenvolvimento ? "development" : "production",
    entry: "./dev/main.js",
    output: {
        filename: "main.js",
        path: __dirname + "/build"
    },
    plugins: [
        new miniCssExtractPlugin({
            filename: "style.css"
        }),

        new htmlPlugin({
            template: "dev/index.html",
            filename: "index.html"
        })
    ],
    module: {
        rules: [
            {
                test: /\.s?[ac]ss$/,
                use: [
                    miniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                ]
            }
        ]
    },
    devServer: {
        static: {
            directory: "./build"
        },
        port: 9001
    }
}