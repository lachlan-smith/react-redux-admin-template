const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');

module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx|tsx)$/,
                resolve: {
                    extensions: ['.js', '.jsx', '.tsx']
                },
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                },
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { 
                            minimize: true 
                        }
                    }
                ],
            },
            {
                test: /\.(css|sass|scss)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    "css-loader",
                    "sass-loader",
                    "postcss-loader"
                ]       
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/html/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            template: "./src/scss/main.scss",
            filename: "./main.css"
        }),
        new webpack.ProvidePlugin({
            React: 'react',
            ReactDOM: 'react-dom',
            PropTypes: 'prop-types'
        }),
    ]
}