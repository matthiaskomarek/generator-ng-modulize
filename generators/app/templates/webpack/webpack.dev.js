var webpack = require('webpack');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: ['./src/index.ts'],
	output: {
		filename: 'build.js',
		path: 'serve'
	},
	resolve: {
		root: __dirname,
		extensions: ['', '.ts', '.js', '.json']
	},
	resolveLoader: {
		modulesDirectories: ['node_modules']
	},
	devtool: 'source-map',
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			inject: 'body',
			hash: true
		}),
		new BrowserSyncPlugin({
			host: 'localhost',
			port: 8080,
			server: {
				baseDir: 'serve'
			},
			ui: false,
			online: false,
			notify: false
		})
	],
	module: {
		loaders: [{test: /\.ts(x?)$/, loaders: ['ts-loader']}]
	}
};