/**
 * angular qiniu gulpfile
 * 
 * @author Moon
 */
'use strict';

var projectName = 'angualr-qiniu';

var del = require('del');
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
    gulp.watch(paths.html, ['build:html', 'build:htmlcache']);
});

gulp.task('lint', function() {
    return gulp.src(paths.src)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// js task
gulp.task('build:js', ['lint'], function() {
    return gulp.src(paths.src)
        .pipe(gulp.dest(paths.dist + '/js/'))
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(paths.dist + '/js/'));
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
