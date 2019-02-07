var gulp = require('gulp');
var postcss = require('gulp-postcss'),
	autoprefixer = require('autoprefixer'),
	cssvars = require('postcss-simple-vars'),
	nested = require('postcss-nested'),
	cssimport = require('postcss-import'),
	mixins = require('postcss-mixins'),
	hexrgba = require('postcss-hexrgba');

gulp.task('styles', function () {
	return gulp.src('./app/assets/styles/styles.css')
		.pipe(postcss([cssimport, mixins, cssvars, nested, hexrgba, autoprefixer])) //from the css general file only, it has nothing to do with modules
		.on('error', function (errorMessage) {
			console.log(errorMessage.toString());
			this.emit('end');
		})
		.pipe(gulp.dest('./app/temp/styles'));
});
