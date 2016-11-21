/**
 * Created by stevekelly on 19/11/16.
 */
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const usemin = require('gulp-usemin');
const uglify = require('gulp-uglify');
const minifyHtml = require('gulp-minify-html');
const minifyCss = require('gulp-minify-css');
const rev = require('gulp-rev');
const imageResize = require('gulp-image-resize');

gulp.task('usemin', function() {
    //// resize otago
    gulp.src(
        ['view/img/dunedin/otago_dw.jpg']
    )
        .pipe(imageResize({
            width : 600,
            crop : false,
            upscale : true
        }))
        .pipe(gulp.dest('view/img/dunedin/'));

    // resize auckland
    gulp.src(
        ['view/img/auckland/Image2.jpg']
    )
        .pipe(imageResize({
            width : 600,
            crop : false,
            upscale : true
        }))
        .pipe(gulp.dest('view/img/auckland/'));

    // image minify
    gulp.src(
        ['view/img/*.jpg', 'view/img/*.png', 'view/img/**/*.jpg', 'view/img/**/*.png']
    )
        .pipe(imagemin({
            progressive: true,
            optimizationLevel: 7
        }))
        .pipe(gulp.dest('view/dist/img'));
    // move html
    gulp.src('view/js/directives/*.html')
        .pipe(gulp.dest('view/dist/js/directives'));

    // move css artifacts
    gulp.src(['view/style/*.ttf'])
        .pipe(gulp.dest('view/dist/css'));

    gulp.src('view/index.html')
        .pipe(usemin({
            css: [ rev ],
            //html: [ function () {return minifyHtml({ empty: true });} ],
            js: [ uglify, rev ],
            inlinejs: [ uglify ],
            inlinecss: [ minifyCss, 'concat' ]
        }))
        .pipe(gulp.dest('view/dist/'));
});

