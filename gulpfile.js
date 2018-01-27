var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('default', function() {
  console.log("Hooray - you created a Gulp task.");
});

gulp.task('html', function() {
  console.log("HTML Watch is functioning");
});

gulp.task('styles', function() {
  console.log("Styles Watch is working");
});

gulp.task('watch', function() {
  watch('./app/index.html', function() {
    gulp.start('html');
  });

  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('styles');
  });
});
