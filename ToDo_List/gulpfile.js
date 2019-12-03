let gulp = require('gulp');
let browserSync = require('browser-sync');
let autoprefixer = require('gulp-autoprefixer');
let htmlmin = require('gulp-htmlmin');
let cssmin = require('gulp-cssmin');
let jsmin = require('gulp-uglify');

gulp.task('browserSync', function () {
    browserSync({
        server: {
            baseDir: 'app'
        },
    });

    browserSync.watch('app').on('change', browserSync.reload);
});

gulp.task('watch', gulp.parallel('browserSync', function () {
    gulp.watch('app/styles/*.css');
}));


gulp.task('autoprefixer', function (done){
    gulp.src("app/styles/*.css")
    .pipe(autoprefixer())
    .pipe(gulp.dest('app/styles/'))
    done();
});

gulp.task('htmlmin', function (done){
    gulp.src("app/*.html")
    .pipe(htmlmin())
    .pipe(gulp.dest('dist/'))
    done();
});

gulp.task('cssmin', function (done){
    gulp.src("app/styles/*.css")
    .pipe(cssmin())
    .pipe(gulp.dest('dist/styles/'))
    done();
});

gulp.task('jsmin', function (done){
    gulp.src('app/scripts/*.js')
    .pipe(jsmin())
    .pipe(gulp.dest('dist/scripts/'))
    done();
});

gulp.task('min', gulp.parallel('htmlmin', 'cssmin', 'jsmin'))




    

