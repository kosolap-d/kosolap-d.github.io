"use strict";

var gulp = require('gulp'),
	livereload = require('gulp-livereload'),
	connect = require('gulp-connect'),
	sass = require('gulp-sass'),
	concatCss = require('gulp-concat-css'),
	cleanCSS = require('gulp-clean-css'),
	rename = require("gulp-rename"),
	autoprefixer = require('gulp-autoprefixer');

//server connect
gulp.task('connect', function() {
	connect.server({
		root: 'app',
		livereload: true
	});
});


//css
gulp.task('css', function () {
	gulp.src('scss/style.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(autoprefixer({
            browsers: ['last 2 versions', '> 1%', 'ie 11'],
            cascade: false
        }))
	.pipe(cleanCSS({compatibility: 'ie8'}))
	.pipe(rename("style.min.css"))
	.pipe(gulp.dest('app/css'))
	.pipe(connect.reload());
});

gulp.task('html', function () {
	gulp.src('app/index.html')
	.pipe(connect.reload());
});

gulp.task('watch', function () {
	gulp.watch('scss/*.scss', ['css']);
	gulp.watch('app/index.html', ['html']);
});

gulp.task('default', ['css', 'html','connect', 'watch']);
