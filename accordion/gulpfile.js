let gulp = require('gulp');
let autoprefixer = require('gulp-autoprefixer');

gulp.task('autoprefixer', function (done) {
    gulp.src('styles/style.css')
    .pipe(autoprefixer())
    .pipe(gulp.dest('styles/'))
    done();
});