let gulp = require('gulp');
let autoprefixer = require('gulp-autoprefixer');

gulp.task('autoprefixer', function (done) {
    gulp.src('styles/*css')
    .pipe(autoprefixer())
    .pipe(gulp.dest('styles/'))
    done();
});