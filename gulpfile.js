'use strict';
const files = {
  sass: './scss/**/*.scss'
};
const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('build-sass', () => {
  gulp.src(files['sass'])
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./css'))
});

gulp.task('watch-sass', () => {
  gulp.watch(files['sass'], ['build-sass']);
});

gulp.task('default', [
  'watch-sass'
]);
