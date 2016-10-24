//#region Properties

'use strict';

var gulp = require('gulp');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var del = require('del');
var merge = require('merge2');

//#endregion

//#region gulp runs

gulp.task('clean', ['clean-script', 'clean-dist'], function () { });

gulp.task('copy', ['copy-angular', 'copy-ng-dialog'], function () { });

gulp.task('build-old', ['build-apn'], function () { });

//#endregion

//#region clean

gulp.task('clean-dist', function () {
    del([
        './dist'
    ]);
});

//#endregion

//#region apn

gulp.task('build-apn', function () {
    gulp.src(['./azureportalng/images/avatar.jpg'])
        .pipe(gulp.dest('./dist/images'));

    gulp.src(['./azureportalng/directives/**/*.html'])
        .pipe(gulp.dest('./dist/directives'));

    gulp.src('./azureportalng/css/apn.css')
        .pipe(gulp.dest('./dist/css'));

    gulp.src('./azureportalng/index.js')
        .pipe(gulp.dest('./dist'));

    gulp.src('./package.json')
        .pipe(gulp.dest('./dist'));
});

//#endregion