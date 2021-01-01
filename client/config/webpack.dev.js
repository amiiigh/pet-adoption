const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require( './paths' );

module.exports = merge(common, {

	mode: 'development',
	devServer: {
		historyApiFallback: true,
		contentBase: path.build,
		open: true,
		compress: true,
		hot: true,
		port: 3000,
	},
	module: {
		rules: [
			{
				test: /\.css?$/,
				use: [ 'style-loader', 'css-loader' ]
			},
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
	],
});
