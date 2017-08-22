var fs = require('fs');
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var pug = require('gulp-pug');
var stylus = require('gulp-stylus');
var ts = require('gulp-typescript');
var clean = require('gulp-clean');

var config = {};
if (fs.existsSync('./config.js')) {
    config = require('./config.js')
}

var defaults = {
    env: "dev",
    enableTS: false,
    paths: {
        src: "./src",
        dist: "./dist",
        scripts: {
            src: "scripts",
            dist: "scripts"
        },
        styles: {
            src: "styles",
            dist: "styles"
        },
        images: {
            src: "images",
            dist: "images"
        },
        fonts: {
            src: "fonts",
            dist: "fonts"
        },
        documents: {
            src: "documents",
            dist: "documents"
        },
        extras: {
            src: "extras",
            dist: "extras"
        }
    }
};

var conf = Object.assign({}, defaults, config);

// Static server
gulp.task('browserSync', function(){
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });
});

// Compile Pug templates
gulp.task('pug', function(){
    return gulp.src('./src/**/*.pug')
    .pipe(pug({

    }))
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.stream());
});

// Compile Styl files
gulp.task('stylus', function(){
    return gulp.src('./src/styles/**/*.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./dist/styles'))
    .pipe(browserSync.stream());
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
    .pipe(gulp.dest('./dist/scripts'))
    .pipe(browserSync.stream());
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

// gulp.task('watch', ['clean', 'pug', 'stylus', 'js', 'browserSync'], function (){
gulp.task('watch', ['pug', 'stylus', 'js', 'browserSync'], function (){
    gulp.watch('./src/**/*.pug', ['pug']);
    gulp.watch('./src/**/*.styl', ['stylus']);
    gulp.watch('./src/**/*.js', ['js']);
    // gulp.watch('./dist/**/*.html').on('change', browserSync.reload);
});

gulp.task('default', ['watch'], function(){
    // console.log('Default task is running with config:');
    // console.log(conf);
    // console.log(conf);
});