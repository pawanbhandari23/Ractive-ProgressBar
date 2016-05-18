var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('watch', function(){
    var watcher = gulp.watch('RactiveProgressBar/scripts/*.js');
    watcher.on('change', function(event){
        console.log('File: '+event.path + ' was changed.');
    });
});

gulp.task('compress', function() {
    gulp.src('scripts/app.min.js')
        .pipe(uglify())
        .pipe(gulp.dest('min'));
});

gulp.task('default', function(){
    console.log('gulp is running correctly');
});