var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('default', function() {
  console.log("Hooray - you created a Gulp task.");
});

gulp.task('html', function() {
  console.log("Hooray - you created a Gulp task.");
});

gulp.task('watch', function() {
  watch('./app/index.html', function() {
    gulp.start('html');

  });
});
