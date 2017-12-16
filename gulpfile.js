var gulp = require('gulp');
var pug = require('gulp-pug');
var less = require('gulp-less');
var minifyCSS = require('gulp-csso');

gulp.task('html', function () {
  return gulp.src(['src/landing/*.pug', '!src/landing/layout.pug'])
    .pipe(pug())
    .pipe(gulp.dest('dist/'))
});

gulp.task('css', function () {
  return gulp.src([
    './src/landing/*.less',
    './src/css/*.less',
    './src/css/cssreset.css',])
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(gulp.dest('dist/css'))
});

gulp.task('copy', function () {
  gulp.src('./src/landing/img/*.png')
    .pipe(gulp.dest('./dist/img'));
});

gulp.task('fonts', function(){
  gulp.src(['./src/css/fonts/**/*'])
    .pipe(gulp.dest('./dist/css/'));
})

gulp.task('watch', function(){
  gulp.watch(['./src/**/*'], ['html', 'css', 'copy', 'fonts'] )
});

gulp.task('default', ['html', 'css', 'copy', 'fonts']);