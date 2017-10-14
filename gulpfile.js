const del = require('del');
const gulp = require('gulp');
const uglify = require('gulp-uglify');

gulp.task('default', ['compress']);

//This task simply wipes out the contents of dist
gulp.task('clean', ()=> del('dist'));

//This task copies EVERYTHING from src to dist including unmodified JS
gulp.task('copy', ['clean'], ()=> {
  return gulp
    .src('src/**')
    .pipe( gulp.dest('dist') );
});

gulp.task('compress', ['copy'], (cb)=> {
  return gulp
    .src('dist/app/**/*.js', {base: 'dist'})
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});