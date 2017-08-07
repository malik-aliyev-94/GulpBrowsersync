var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var pug = require('gulp-pug');
var stylus = require('gulp-stylus');

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

// Compile Styl files
gulp.task('stylus', function(){
    return gulp.src('./src/styles/*.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./dist/styles'));
});

// Compile media files

// Compile TS files

// Compile JS files
