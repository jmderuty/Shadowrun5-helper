var paths = {
  webroot: "./wwwroot/",
  node_modules: "./node_modules/"
};

var gulp = require("gulp"),
    fs = require("fs"),
    less = require("gulp-less");

var project = require('./project.json');

gulp.task("less", function () {
  return gulp.src('styles/site.less')
          .pipe(less())
          .pipe(gulp.dest(paths.webroot + '/css'));
});