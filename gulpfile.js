var gulp = require('gulp');
var gutil = require('gulp-util');
var browserSync = require('browser-sync');
var ghPages = require('gulp-gh-pages');

gulp.task('server', function () {
    browserSync.init({
        server: {
            baseDir: './presentation/',
        },
        files: './presentation/**/*'
    });
});

gulp.task('deploy', function () {
    return gulp.src('./presentation/**/*')
        .pipe(ghPages());
});
