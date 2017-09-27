const gulp = require('gulp');
const less = require('gulp-less');
const path = require('path');
const cleanCSS = require('gulp-clean-css');

//files
const SRC = './app/less/styles.less';
const DEST = './app/css';

 
gulp.task('default', function () {
  return gulp.src(SRC)
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest(DEST));
});