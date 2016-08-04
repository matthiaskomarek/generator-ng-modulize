var webpack = require('webpack');

module.exports = {
	entry: ['./src/index.ts'],
	output: {
		filename: '<%= bundleFilename %>',
		path: 'dist'
	},
	// exclude all none relative paths
	externals: /^[^.]/,
	resolve: {
		root: __dirname,
		extensions: ['', '.ts', '.js', '.json'],
		modulesDirectories: ['node_modules']
	},
	resolveLoader: {
		modulesDirectories: ['node_modules']
	},
	devtool: 'source-map',
	plugins: [
		new webpack.NoErrorsPlugin(),
		new webpack.optimize.UglifyJsPlugin(
			{
				warning: false,
				mangle: true,
				comments: false
			}
		)
	],
	module: {
		loaders: [{test: /\.ts(x?)$/, loaders: ['ng-annotate', 'ts-loader']}]
	}
};
