var gulp = require('gulp');
var paths = require('../paths');
var babelify = require('babelify');
var stringify = require('stringify');
var sourcemaps = require('gulp-sourcemaps');
var runSequence = require('run-sequence');
var changed = require('gulp-changed');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
var less = require('gulp-less');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');

//红包雨less编译
gulp.task('build-less-redRain',function(){
    return gulp.src(paths.redRain.less)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(postcss([ autoprefixer() ]))
        .pipe(rename('redRain.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.lessDist))
        ;
});
//砸金蛋less编译
gulp.task('build-less-goldenEggs',function(){
    return gulp.src(paths.goldenEggs.less)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(rename('goldenEggs.css'))
        .pipe(postcss([ autoprefixer() ]))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.lessDist))
        ;
});
//九宫格抽奖 less编译
gulp.task('build-less-sudoku',function(){
    return gulp.src(paths.sudoku.less)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(rename('sudoku.css'))
        .pipe(postcss([ autoprefixer() ]))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.lessDist))
        ;
});
//掷骰子 less编译
gulp.task('build-less-luckyDice',function(){
    return gulp.src(paths.luckyDice.less)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(rename('luckyDice.css'))
        .pipe(postcss([ autoprefixer() ]))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.lessDist))
        ;
});
//捕鱼假日 less编译
gulp.task('build-less-fish',function(){
    return gulp.src(paths.fish.less)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(rename('fish.css'))
        .pipe(postcss([ autoprefixer() ]))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.lessDist))
        ;
});

// 新版九宫格抽奖
gulp.task('build-less-jiugongge',function(){
    return gulp.src(paths.jiuGongGe.less)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(rename('jiugongge.css'))
        .pipe(postcss([ autoprefixer() ]))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.lessDist))
        ;
});


//图片编译
gulp.task('build-img',function(){
    return gulp.src(paths.img)
        .pipe(changed(paths.imgDist))
        .pipe(gulp.dest(paths.imgDist))
        ;
});



var Bundler = require('../task');
var redRainBundler = Bundler({
    entries: [paths.redRain.js],
    dest: paths.jsDist,
    filename:'redRain.js',
    transform: [
        ["babelify",{presets: ["es2015"]}],
        [stringify, {
            appliesTo: { includeExtensions: ['.html'] }
        }]
    ]
});
var goldenEggsBundler = Bundler({
    entries: [paths.goldenEggs.js],
    dest: paths.jsDist,
    filename:'goldenEggs.js',
    transform: [
        ["babelify",{presets: ["es2015"]}],
        [stringify, {
            appliesTo: { includeExtensions: ['.html'] }
        }]
    ]
});
var sudokuBundler = Bundler({
    entries: [paths.sudoku.js],
    dest: paths.jsDist,
    filename:'sudoku.js',
    transform: [
        ["babelify",{presets: ["es2015"]}],
        [stringify, {
            appliesTo: { includeExtensions: ['.html'] }
        }]
    ]
});
var luckyDiceBundler = Bundler({
    entries: [paths.luckyDice.js],
    dest: paths.jsDist,
    filename:'luckyDice.js',
    transform: [
        ["babelify",{presets: ["es2015"]}],
        [stringify, {
            appliesTo: { includeExtensions: ['.html'] }
        }]
    ]
});
var fishBundler = Bundler({
    entries: [paths.fish.js],
    dest: paths.jsDist,
    filename:'fish.js',
    transform: [
        ["babelify",{presets: ["es2015"]}],
        [stringify, {
            appliesTo: { includeExtensions: ['.html'] }
        }]
    ]
});

//九宫格抽奖
var jiugonggeBundler = Bundler({
    entries: [paths.jiuGongGe.js],
    dest: paths.jsDist,
    filename:'jiuGongGe.js',
    transform: [
        ["babelify",{presets: ["es2015"]}],
        [stringify, {
            appliesTo: { includeExtensions: ['.html'] }
        }]
    ]
});

gulp.task('build-js-redRain',function(){
    return redRainBundler.bundle();
});

gulp.task('watch-js-redRain',function(){
    return redRainBundler.watch();
});

gulp.task('build-js-goldenEggs',function(){
    return goldenEggsBundler.bundle();
});

gulp.task('watch-js-goldenEggs',function(){
    return goldenEggsBundler.watch();
});

gulp.task('build-js-sudoku',function(){
    return sudokuBundler.bundle();
});

gulp.task('watch-js-sudoku',function(){
    return sudokuBundler.watch();
});

gulp.task('build-js-luckyDice',function(){
    return luckyDiceBundler.bundle();
});

gulp.task('watch-js-luckyDice',function(){
    return luckyDiceBundler.watch();
});


gulp.task('build-js-fish',function(){
    return fishBundler.bundle();
});
gulp.task('watch-js-fish',function(){
    return fishBundler.watch();
});


//九宫格
gulp.task('build-js-jiugongge',function(){
    return jiugonggeBundler.watch();
});
gulp.task('watch-js-jiugongge',function(){
    return jiugonggeBundler.watch();
});

gulp.task('build',function(callback){
    return runSequence(
        'clean',
        [
            'build-js-redRain'
            ,'build-less-redRain'
            ,'build-js-goldenEggs'
            ,'build-less-goldenEggs'
            ,'build-js-sudoku'
            ,'build-less-sudoku'
            ,'build-js-luckyDice'
            ,'build-less-luckyDice'
            ,'build-js-fish'
            ,'build-less-fish'
            ,'build-js-jiugongge'
            ,'build-less-jiugongge'
            ,'build-img'
        ],
        callback
    );
});
