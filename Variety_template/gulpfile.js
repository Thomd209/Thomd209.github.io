let gulp = require("gulp");
let htmlmin = require("gulp-htmlmin");
let cssmin = require("gulp-cssmin");
let concat = require("gulp-concat");
let jsmin = require("gulp-uglify");
let imgmin = require("gulp-imagemin");

gulp.task("unite", function (done) {
    gulp.src('app/*/*/*.js')
    .pipe(concat('script.js'))
    .pipe(gulp.dest('dist/scripts/'));
    done();
});

gulp.task("jsmin", function (done) {
    gulp.src("dist/scripts/")
    .pipe(jsmin())
    .pipe(gulp.dest("dist/scripts/"))
    done();
});

gulp.task("cssmin", function (done) {
    gulp.src("app/common_files/styles/*.css")
    .pipe(cssmin())
    .pipe(gulp.dest("dist/styles/"))
    done();
});

gulp.task("htmlmin", function (done) {
    gulp.src("index.html")
    .pipe(htmlmin())
    .pipe(gulp.dest("../Variety template/"))
    done();
});

gulp.task("imgmin", function (done) {
    gulp.src("app/*/*/*.png")
    .pipe(imgmin())
    .pipe(gulp.dest("dist/img/"))
    done();
});