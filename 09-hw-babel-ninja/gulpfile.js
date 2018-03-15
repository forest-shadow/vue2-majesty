const gulp  = require('gulp'),
      babel = require('gulp-babel');

gulp.task('babel', function() {
  return gulp.src('js/*.js')
    .pipe(babel({
      presets: ['@babel/preset-env']
    }))
    .pipe(gulp.dest('assets/'))
});

gulp.task('watch', function () {
  gulp.watch('js/*.js', ['babel']);
});

gulp.task('default', ['watch']);