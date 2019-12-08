const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const autoprefixer = require('gulp-autoprefixer');
const htmlmin = require('gulp-htmlmin');
const cssmin = require('gulp-cssmin');
const uglify = require('gulp-uglify');

gulp.task('imagemin', function(done) {
    gulp.src('../img/*.png')
    .pipe(imagemin())
    .pipe(gulp.dest('../img/'));
    done();
});

gulp.task('autoprefixer', function(done) {
    gulp.src('../styles/*.css')
    .pipe(autoprefixer({cascade: false}))
    .pipe(gulp.dest('../styles/'));
    done();
});

gulp.task('htmlmin', function(done) {
    gulp.src('../*.html')
    .pipe(htmlmin())
    .pipe(gulp.dest('../'));
    done();
});

gulp.task('cssmin', function(done) {
    gulp.src('../styles/*.css')
    .pipe(cssmin())
    .pipe(gulp.dest('../styles/'));
    done();
});

gulp.task('jsmin', function(done) {
    gulp.src('../scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('../scripts/'));
    done();
});

gulp.task('min', gulp.parallel('htmlmin', 'cssmin', 'jsmin'));


