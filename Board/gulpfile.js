"use strict";

var gulp = require("gulp");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var notifier = require('node-notifier');
var sass = require('gulp-sass');

gulp.task("all:watch", function () {
    gulp.watch("App/CSS/*.css", ["css:send-to-server"])
    gulp.watch("App/CSS/SASS/*.scss", ["sass"])
});


gulp.task("css:send-to-server", function () {
    gulp.src("App/CSS/Main.css")     
        .pipe(concat("bundle.css"))
        .pipe(gulp.dest("wwwroot/"))

    notifier.notify({
        'message': 'control:send-to-server'
    })
});

gulp.task("sass", function () {
    gulp.src("App/CSS/SASS/Main.scss")
        .pipe(sass())       
        .pipe(gulp.dest("App/CSS/"))

    notifier.notify({
        'message': 'sass'
    })
})
