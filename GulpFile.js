var gulp = require('gulp'),
	sass = require('gulp-sass'),
	concat = require('gulp-concat');

var paths = {
	html: ['dev/**/*.html'],
    styles: ['dev/styles/**/*.scss']
}
var allPaths = [];
for(var i in paths) {
    allPaths = allPaths.concat(paths[i]);
}

gulp.task('styles', function() {
    gulp.src(paths.styles)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./www/css/'));
});
gulp.task('html', function() {
    gulp.src(paths.html)
        .pipe(gulp.dest('./www/'));
});

gulp.task('all', ['styles', 'html']);

gulp.task('default', ['all']);

gulp.task('watch', function() {
    gulp.watch(allPaths,['all']);
});