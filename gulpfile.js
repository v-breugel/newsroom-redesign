// including plugins
var gulp = require('gulp');
var minifyHtml = require("gulp-minify-html");
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var changed = require('gulp-changed');


gulp.task('sass', function () {
    return gulp.src('./theme.scss')
        .pipe(changed('build'))
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest('./'));
});

//Watch task
gulp.task('default',function() {
    gulp.watch('./theme.scss',['sass']);
});
