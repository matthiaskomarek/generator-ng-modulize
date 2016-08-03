var yeoman = require('yeoman-generator');

var stripLeadingLoDash = function(name) {
	return name.indexOf('_') === 0 ? name.substring(1) : name;
};

var NgModulizeGenerator = yeoman.Base.extend({
	prompting: function() {
		return this.prompt([
		{
			type: 'input',
			name: 'appName',
			message: 'Your module name',
			default: this.appname
		},
		{
			type: 'input',
			name: 'appDesc',
			message: 'Your module description',
			default: ''
		},
		{
			type: 'list',
			name: 'jsPreprocessor',
			message: 'Which JS preprocessor do you want?',
			choices: [
				{
					value: {
						key: 'noJsPrepro',
						extension: 'js',
						srcExtension: 'js'
					},
					name: 'Standard JS'
				},
				{
					value: {
						key: 'babel',
						extension: 'js',
						srcExtension: 'es6'
					},
					name: 'ES6 (Babel)'
				},
				{
					value: {
						key: 'typescript',
						extension: 'ts',
						srcExtension: 'ts'
					},
					name: 'Typescript'
				}
			]
		}
		])
			.then(function (props) {
				this.props = props;
			}.bind(this));
	},
	writing: function() {
		console.log(this.props);
		var files = require('./files.json');

		/**
		 * Write all static files
		 */
		files.static.forEach(function(file) {
			this.fs.copy(
				this.templatePath(file),
				this.destinationPath(stripLeadingLoDash(file))
			);
		}, this);

		if (this.props.jsPreprocessor.key === 'typescript') {
			/**
			 * Write all ts related files
			 */
			files.typescriptOnly.forEach(function(file) {
				this.fs.copyTpl(
					this.templatePath(file),
					this.destinationPath(stripLeadingLoDash(file)),
					this.props
				);
			}, this);
		}

		/**
		 * Write all template files
		 */
		files.templates.forEach(function(file) {
			this.fs.copyTpl(
				this.templatePath(file),
				this.destinationPath(stripLeadingLoDash(file)),
				this.props
			);
		}, this);
	},

	install: function () {
		this.installDependencies();
	}
});


module.exports = NgModulizeGenerator;
