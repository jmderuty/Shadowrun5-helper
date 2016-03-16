var paths = {
  webroot: "./wwwroot/",
  node_modules: "./node_modules/",
  less_glob: "./styles/*.less"
};

var gulp = require("gulp"),
    fs = require("fs"),
    less = require("gulp-less");

var browserSync = require('browser-sync').create();
var project = require('./project.json');


gulp.task("less", function () {
  return gulp.src(paths.less_glob)
          .pipe(less())
          .pipe(gulp.dest(paths.webroot + '/css'))
          .pipe(browserSync.stream());
});


gulp.task('serve', ['less'], function() {

    browserSync.init({
        server: paths.webroot,
    });

    gulp.watch(paths.less_glob, ['less']);
    gulp.watch(paths.webroot+"*.html").on('change', browserSync.reload);
});

gulp.task('default', ['serve']);
