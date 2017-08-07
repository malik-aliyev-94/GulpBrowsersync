var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var pug = require('gulp-pug');

// Static server
gulp.task('browser-sync', function(){
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

// Compile Pug templates
gulp.task('pug', function(){
    return gulp.src('./src/*.pug')
    .pipe(pug({

    }))
    .pipe(gulp.dest('./dist'));
});