let gulp = require('gulp');
let imagemin = require('gulp-imagemin');
let autoprefixer = require('gulp-autoprefixer');

gulp.task('imagemin', function(done) {
    gulp.src('img/*.jpg')
    .pipe(imagemin())
    .pipe(gulp.dest('img/'));
    done();
});

gulp.task('autoprefixer', function(done) {
    gulp.src('styles/*.css')
    .pipe(autoprefixer({cascade: false}))
    .pipe(gulp.dest('styles/'));
    done();
});