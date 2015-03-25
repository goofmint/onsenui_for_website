var gulp = require('gulp');
var coffee = require('gulp-coffee');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var webserver = require('gulp-webserver');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');

var paths = {
  scripts: ['app/js/**/*.coffee', '!app/external/**/*.coffee']
};

gulp.task('webserver', function() {
  gulp.src("./")
    .pipe(webserver({
      livereload: true,
    }));
});


gulp.task('scripts', function() {
  return gulp.src([
      './bower_components/onsenui/build/js/angular/angular.min.js',
      './bower_components/onsenui/build/js/onsenui_all.min.js'
  ])
	.pipe(concat('all.js'))
	.pipe(gulp.dest('./javascripts/'));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['scripts']);
});

gulp.task('default', ['webserver', 'scripts', 'watch']);
