var gulp = require("gulp");
var sass = require("gulp-sass")(require("sass"));
var postcss = require("gulp-postcss");
var cssnano = require("cssnano");
var autoprefixer = require("autoprefixer");

gulp.task("css", function() {
  var plugin = [
    autoprefixer(),
    cssnano()
  ]

  return gulp.src("./src/**/*.scss")
    .pipe(sass().on('error', sass.logError))
    // .pipe(postcss(plugin))
    .pipe(gulp.dest("./"))
})

gulp.task("watch", function() {
  gulp.watch(["./src/**/*.scss"], gulp.series("css"))
})