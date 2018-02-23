var gulp = require('gulp'),
    less = require('gulp-less'),
    concat = require('gulp-concat');


var dev_path = {
    less: 'assets/css/*.less'
};
var prod_path = {
    css: 'assets/css/'
};




//Less to css
gulp.task('less', function(){
        return gulp.src(dev_path.less)
            .pipe(less())
            .pipe(concat('style.css'))
            .pipe(gulp.dest(prod_path.css));
    }
);


gulp.task('watch', function() {
    return gulp.watch(dev_path.less, ['less']);
});

gulp.task('default', ['less', 'watch']);
