var gulp = require('gulp');
var webpack = require('gulp-webpack');

gulp.task('build-js', function() {
    return gulp.src('src/server.js')
        .pipe(webpack(require('../webpack.config.js') ))
        .pipe(gulp.dest('dist/'));
});

gulp.task("build-views", function() {
   return gulp.src("src/views/**/*.ejs")
       .pipe(gulp.dest("dist/views"))
});

