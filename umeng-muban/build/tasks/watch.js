var gulp = require('gulp');
var paths = require('../paths');

var reportChange = function(event){
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
};

gulp.task('watch',[
  'build'
  ,'watch-js-redRain'
    ,'watch-js-goldenEggs'
    ,'watch-js-sudoku'
    ,'watch-js-luckyDice'
    ,'watch-js-fish'
    ,'watch-js-jiugongge'
],function(){
  gulp.watch(paths.redRain.lessWatch,['build-less-redRain']).on('change',reportChange);
  gulp.watch(paths.goldenEggs.lessWatch,['build-less-goldenEggs']).on('change',reportChange);
  gulp.watch(paths.sudoku.lessWatch,['build-less-sudoku']).on('change',reportChange);
  gulp.watch(paths.luckyDice.lessWatch,['build-less-luckyDice']).on('change',reportChange);
  gulp.watch(paths.fish.lessWatch,['build-less-fish']).on('change',reportChange);
  // 九宫格新版
  gulp.watch(paths.jiuGongGe.lessWatch,['build-less-jiugongge']).on('change',reportChange);

  gulp.watch(paths.img,['build-img']).on('change',reportChange);
});