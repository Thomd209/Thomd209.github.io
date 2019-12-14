let gulp = require("gulp");
let sass = require("gulp-sass");
let browserSync = require("browser-sync");
let autoprefixer = require("gulp-autoprefixer");
let imgmin = require("gulp-imagemin");
let htmlmin = require("gulp-htmlmin");
let cssmin = require("gulp-cssmin");
let jsmin = require("gulp-uglify");

gulp.task('sass', function () {
    gulp.src('app/common-styles/style.scss')
    .pipe(sass())
    .pipe(autoprefixer({ cascade: true }))
    .pipe(gulp.dest('app/common-styles/'))
});

gulp.task('watch', gulp.parallel('sass', function () {
    gulp.watch('app/common-styles/style.scss', gulp.parallel('sass'));
}));