// Base :: Sass :: Build
'use strict';

var gulp = require('gulp');
var sassLint = require('gulp-sass-lint');

gulp.task('lint-build', function(callback) {
  return gulp.src(global.config.src + '/**/*.scss')
    .pipe(sassLint({
      configFile: global.path + '/.sass-lint.yml'
    }))
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
    .on('close', callback);
});
