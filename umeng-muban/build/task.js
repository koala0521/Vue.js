'use strict';

var gulp       = require('gulp');
var gutil      = require('gulp-util');
var watchify   = require('watchify');
var browserify = require('browserify');
var source     = require('vinyl-source-stream');
var buffer     = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');

var Bundler = module.exports = function(options) {
    if (!(this instanceof Bundler)) return new Bundler(options);

    options = Object.assign({
        entries: [],
        transform: [],
        dest: '',
        debug: true
    }, options);

    var bundler;

    function bundle() {
        var b = getBundler();

        return b.bundle()
            .on('error', gutil.log.bind(gutil, 'Browserify Error'))
            .pipe(source(options.filename||'bundle.js'))
            .pipe(buffer())
            .pipe(sourcemaps.init({loadMaps: true}))
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest(options.dest));
    }

    function watch() {
        var b = getBundler();
        watchify(b).on('update', bundle);
    }

    function getBundler() {
        if (!bundler) {
            bundler = browserify({
                entries: options.entries,
                transform: options.transform,
                cache: {},
                packageCache: {},
                debug: options.debug
            });

            bundler.on('log', gutil.log);
        }
        return bundler;
    }

    return {
        bundle: bundle,
        getBundler: getBundler,
        watch: watch
    };

};
