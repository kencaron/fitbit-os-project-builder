const del = require('del');
const gulp = require('gulp');
const uglifyEs = require('uglify-es');
const composer = require('gulp-uglify/composer');
const pump = require('pump');


gulp.task('default', ['compress']);

//This task simply wipes out the contents of dist
gulp.task('clean', ()=> del('dist'));

//This task copies EVERYTHING from src to dist including unmodified JS
gulp.task('copy', ['clean'], ()=> {
  return gulp
    .src('src/**')
    .pipe( gulp.dest('dist') );
});

const minify = composer(uglifyEs, console);

gulp.task('compress', ['copy'], function (cb) {
  const options = {};

  pump([
        gulp.src('dist/app/**/*.js', {base: 'dist'}),
        minify(options),
        gulp.dest('dist')
    ],
    cb
  );
});