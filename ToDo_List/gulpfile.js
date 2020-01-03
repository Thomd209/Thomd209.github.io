let gulp = require('gulp');
let autoprefixer = require('gulp-autoprefixer');
let htmlmin = require('gulp-htmlmin');
let cssmin = require('gulp-cssmin');
let jsmin = require("gulp-uglify");

gulp.task('autoprefixer', function (done){
    gulp.src("app/styles/*.css")
    .pipe(autoprefixer())
    .pipe(gulp.dest('dist/styles/'))
    done();
});

gulp.task('cssmin', function (done){
    gulp.src("dist/styles/*.css")
    .pipe(cssmin())
    .pipe(gulp.dest("dist/styles/"))
    done();
});

gulp.task('jsmin', function (done){
    gulp.src("dist/scripts/*.js")
    .pipe(jsmin())
    .pipe(gulp.dest("dist/scripts/"))
    done();
});

gulp.task('min', gulp.parallel("cssmin", "jsmin"));




    

