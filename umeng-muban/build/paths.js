var distRoot = 'dist/';  // 目标文件目录
var srcRoot = 'src/';    // 源文件目录


var redRainJsRoot = srcRoot + 'js/redRain/';
var redRainLessRoot = srcRoot + 'less/redRain/';

var goldenEggsJsRoot = srcRoot + 'js/goldenEggs/';
var goldenEggsLessRoot = srcRoot + 'less/goldenEggs/';

var sudokuJsRoot = srcRoot + 'js/sudoku/';
var sudokuLessRoot = srcRoot + 'less/sudoku/';

var luckyDiceJsRoot = srcRoot + 'js/luckyDice/';
var luckyDiceLessRoot = srcRoot + 'less/luckyDice/';

var fishJsRoot = srcRoot + 'js/fish/';
var fishLessRoot = srcRoot + 'less/fish/';

var jiugonggeJsRoot = srcRoot + 'js/jiugongge/';
var jiugonggeLessRoot = srcRoot + 'less/jiugongge/';


var path = require('path');

module.exports = {
    dist:distRoot,  // 目标文件
    src:srcRoot,    // 源文件

    img: srcRoot + 'img/**',
    imgDist: distRoot + 'img/',

    lessDist: distRoot + 'css/',
    jsDist: distRoot + 'js/',

    redRain:{
        less: redRainLessRoot + 'index.less',
        lessWatch: redRainLessRoot + '**/*.less',
        js: [
            redRainJsRoot + 'index.js'
        ],
        jsWatch: redRainJsRoot + '**/*.js'
    },
    goldenEggs:{
        less: goldenEggsLessRoot + 'index.less',
        lessWatch: goldenEggsLessRoot + '**/*.less',
        js: [
            goldenEggsJsRoot + 'index.js'
        ],
        jsWatch: goldenEggsJsRoot + '**/*.js'
    },
    sudoku:{
        less: sudokuLessRoot + 'index.less',
        lessWatch: sudokuLessRoot + '**/*.less',
        js: [
            sudokuJsRoot + 'index.js'
        ],
        jsWatch: sudokuJsRoot + '**/*.js'
    },
    luckyDice:{
        less: luckyDiceLessRoot + 'index.less',
        lessWatch: luckyDiceLessRoot + '**/*.less',
        js: [
            luckyDiceJsRoot + 'index.js'
        ],
        jsWatch: luckyDiceJsRoot + '**/*.js'
    },
    fish:{
        less: fishLessRoot + 'index.less',
        lessWatch: fishLessRoot + '**/*.less',
        js: [
            fishJsRoot + 'index.js'
        ],
        jsWatch: fishJsRoot + '**/*.js'
    },
    jiuGongGe:{
        less:jiugonggeLessRoot + 'index.less',
        lessWatch: jiugonggeLessRoot + '**/*.less',
        js: [
            jiugonggeJsRoot + 'index.js'
        ],
        jsWatch: jiugonggeJsRoot + '**/*.js'

    }
};