var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var pug = require('gulp-pug');
var stylus = require('gulp-stylus');
var ts = require('gulp-typescript');
var clean = require('gulp-clean');

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
    return gulp.src('./src/**/*.pug')
    .pipe(pug({

    }))
    .pipe(gulp.dest('./dist'));
});

// Compile Styl files
gulp.task('stylus', function(){
    return gulp.src('./src/styles/**/*.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./dist/styles'));
});

// Compile TS files
gulp.task('ts', function(){
    var tsResult = gulp.src('./src/scripts/**/*.ts')
    .pipe(ts({

    }));
    return tsResult.js
    .pipe(gulp.dest('./dist/scripts'));
});

// Compile JS files
gulp.task('js', function(){
    return gulp.src('./src/scripts/**/*.js')
    .pipe(gulp.dest('./dist/scripts'));
});

// Clean task
gulp.task('clean', function(){
    return gulp.src('./dist')
    .pipe(clean());
});

// Extra files
gulp.task('extras', function(){
    return gulp.src('./src/extras/**/*')
    .pipe(gulp.dest('./dist/extras'));
});

// Compile images
gulp.task('images', function(){
    return gulp.src('./src/images/**/*')
    .pipe(gulp.dest('./dist/images'));
});

// Compile videos
gulp.task('videos', function(){
    return gulp.src('./src/videos/**/*')
    .pipe(gulp.dest('./dist/videos'));
});

// Compile sounds (audio)
gulp.task('sounds', function(){
    return gulp.src('./src/sounds/**/*')
    .pipe(gulp.dest('./dist/sounds'));
});

// Compile fonts
gulp.task('fonts', function(){
    return gulp.src('./src/fonts/**/*')
    .pipe(gulp.dest('./dist/fonts'));
});

gulp.task('default', function(){
    console.log('Default task is running !');
});