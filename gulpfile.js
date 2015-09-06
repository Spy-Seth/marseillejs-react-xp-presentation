var gulp = require('gulp');
var gutil = require('gulp-util');
var ghPages = require('gulp-gh-pages');

gulp.task('deploy', function () {
    return gulp.src('./presentation/**/*')
        .pipe(ghPages());
});
