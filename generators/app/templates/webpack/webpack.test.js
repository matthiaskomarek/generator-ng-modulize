var webpack = require('webpack');

module.exports = {
	entry: ['./src/index.ts'],
	output: {
		filename: 'build.js',
		path: 'tmp'
	},
	resolve: {
		root: __dirname,
		extensions: ['', '.ts', '.js', '.json'],
		modulesDirectories: ['node_modules'<% if (bower) { %>, 'bower_components' <% } %>]
	},
	resolveLoader: {
		modulesDirectories: ['node_modules'<% if (bower) { %>, 'bower_components' <% } %>]
	},
	devtool: 'source-map-inline',
	module: {
		loaders: [{test: /\.ts(x?)$/, loader: 'ts-loader'}]
	},
	plugins: [
	<% if (bower) { %>
		new webpack.ResolverPlugin(
			new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('.bower.json', ['main'])
		)
	<% } %>
	]
};
