/**
 * angular qiniu gulpfile
 * 
 * @author Moon
 */
'use strict';

var projectName = 'angular-qiniu';

var del = require('del');
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

var paths = {
    src: 'src/' + projectName + '.js',
    demo: 'demo',
    dist: 'dist'
};

gulp.task('watch', ['build'], function() {
    gulp.watch(paths.src, ['build:js']);
});

gulp.task('lint', function() {
    return gulp.src(paths.src)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// js task
gulp.task('build:js', ['lint'], function() {
    return gulp.src(paths.src)
        .pipe(gulp.dest(paths.dist + '/'))
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(paths.dist + '/'));
});

gulp.task('build', [
    'build:js'
]);

gulp.task('clean', function () {
    return del(paths.dist);
});

gulp.task('default', ['clean'], function() {
    gulp.start('build');
});
