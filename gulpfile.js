let gulp = require('gulp'),
		less = require('gulp-less'),
		browserSync = require('browser-sync'),
		autoprefixer = require('gulp-autoprefixer'),
		reload = browserSync.reload;

// C O M P I L E - L E S S
gulp.task('less', function(){
	gulp.src('./less/*.less')
	.pipe(less()) // compile
	.pipe(autoprefixer("last 8 version", "> 1%", "ie 8", "ie 7"), {cascade: true}) // prefix magic
	.pipe(gulp.dest('./client'));
});

// W A T C H - L E S S - C H A N G E S
gulp.task('watch-less', function(){
	gulp.watch('./less/**/*.less', ['less']);
});

gulp.task('prod', ['clean'])
gulp.task('default', ['less', 'watch-less']);
