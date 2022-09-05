const gulp =  require('gulp');

const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');

function buildStyles() {

  return gulp
    .src('./src/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(autoprefixer({cascade: false}))
    .pipe(sass().on('error', sass.logError))
    .pipe(cssnano())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./build/css'));
};

exports.buildStyles = buildStyles;
exports.default = function () {
  gulp.watch('./src/scss/**/*.scss', buildStyles);
};