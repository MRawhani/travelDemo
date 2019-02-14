var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    del = require('del'),
    usemin = require('gulp-usemin'),
        rev = require('gulp-rev'),
        cssnano = require('gulp-cssnano'),
        uglify = require('gulp-uglify'),
        browserSync = require('browser-sync');


gulp.task('previewDist',function(){
    browserSync.init({
        server: {
            baseDir: "docs"
        }
    });
});


gulp.task('deleteDist', function () {
    return del('./docs');
});
gulp.task('copyGeneralFiles', ['deleteDist'], function () {
    var pathsToCopy=[
        './app/**/*',
        '!./app/index.html',
        '!./app/assets/images/**',
        '!./app/assets/styles/**',
        '!./app/assets/scripte/**',
        '!./app/temp',
        '!./app/temp/**'
    ]
    return gulp.src(pathsToCopy)
        .pipe(gulp.dest('./docs'));
});
gulp.task('optimizeImages', ['deleteDist'], function () {
    return gulp.src('./app/assets/images/**/*')
        .pipe(imagemin({
            progressive: true, //jbg
            interlaced: true, //gif
            multipass: true, //png
            svgoPlugins: [{
                removeViewBox: true
            }]
        }))
        .pipe(gulp.dest('./docs/assets/images'));
});
gulp.task('usemin', ['deleteDist','styles','scripts'],function () {
    return gulp.src('./app/index.html')
        .pipe(usemin({
            css: [function () {
                return rev()
            }, function () {
                return cssnano()
            }],
            js: [function () {
                return rev()
            }, function () {
                return uglify()
            }]
        }))
        .pipe(gulp.dest('./docs'));
});

gulp.task('build', ['deleteDist','copyGeneralFiles', 'optimizeImages', 'usemin']);