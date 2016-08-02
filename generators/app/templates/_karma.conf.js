var webpackConfig = require('./webpack/webpack.test.js');

webpackConfig.entry = {};


// Karma configuration
// Generated on Wed Dec 30 2015 11:13:38 GMT-0500 (EST)

module.exports = function (config) {
	config.set({

		// base path that will be used to resolve all patterns (eg. files, exclude)
		basePath: '.',

		files: [
			'src/**/*.spec.ts'
		],


		// frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		frameworks: ['jasmine'],


		// list of files to exclude
		exclude: [
			'node_modules'
		],


		// test results reporter to use
		// possible values: 'dots', 'progress'
		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		reporters: ['progress', 'dots'],


		// web server port
		port: 9876,


		// enable / disable colors in the output (reporters and logs)
		colors: true,


		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,


		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: false,


		// start these browsers
		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		browsers: ['PhantomJS'],


		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: true,

		// Concurrency level
		// how many browser should be started simultaneous
		concurrency: Infinity,

		preprocessors: {
			'src/**/*.spec.ts': ['webpack', 'sourcemap']
		},

		webpack: webpackConfig,

		webpackMiddleware: {
			noInfo: true

		},

		plugins: [
			require('karma-jasmine'),
			require('karma-phantomjs-launcher'),
			require('karma-webpack'),
			require('karma-sourcemap-loader')
		]
	})
};
