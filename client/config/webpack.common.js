const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const paths = require('./paths');

module.exports = {
	// Where webpack looks to start building the bundle
	entry: ['babel-polyfill', paths.src + '/index.js'],

	// Where webpack outputs the assets and bundles
	output: {
		path: paths.build ,
		filename: '[name].bundle.js',
		publicPath: '/',
	},

	// Customize the webpack build process
	plugins: [
		// Removes/cleans build folders and unused assets when rebuilding
		new CleanWebpackPlugin(),

		// Generates an HTML file from a template
		new HtmlWebPackPlugin({
			template: paths.public + '/index.html',
			filename: 'index.html'
		})
	],

	// Determine how modules within the project are treated
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
		],
	},
	resolve: {
		extensions: ['*', '.js', '.jsx'],
	},
};