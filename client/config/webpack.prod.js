const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('./paths');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    devtool: false,
    devServer: {
        historyApiFallback: true,
        contentBase: path.build,
        open: true,
        compress: true,
        port: 3000,
    },
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],

            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles/[name].[contenthash].css',
            chunkFilename: '[id].css',
        }),
    ],
    optimization: {
        minimize: true,
        minimizer: [new CssMinimizerPlugin(), "..."],
        runtimeChunk: {
            name: 'runtime',
        },
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },
});