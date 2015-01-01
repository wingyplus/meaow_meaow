var gulp = require('gulp');
var traceur = require('gulp-traceur');

gulp.task('compile', function() {
    return gulp.src('assets/js/app.js')
        .pipe(traceur())
        .pipe(gulp.dest('build/assets/js'));
});

gulp.task('copyLibs', function() {
    return gulp.src('assets/js/libs/**/*')
        .pipe(gulp.dest('build/assets/js/libs'));
});

gulp.task('copyImages', function() {
    return gulp.src('assets/images/cat.png')    // copy png only
        .pipe(gulp.dest('build/assets/images'));
});

gulp.task('copyHTML', function() {
    return gulp.src('index.html')
        .pipe(gulp.dest('build'));
});

gulp.task('copy', ['copyHTML', 'copyImages', 'copyLibs']);

gulp.task('build', ['compile', 'copy']);

gulp.task('default', ['build']);
