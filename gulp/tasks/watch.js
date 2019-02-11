var gulp = require('gulp');
var watch = require('gulp-watch'), //for doing sth whensaving a file

    browserSync = require('browser-sync');


gulp.task('watch', function(){
    browserSync.init({
        server: {
            baseDir: "app"
        }
    });
     watch('./app/index.html', function(){ 
         //first indicates what to watch, second waht to do when saved
        browserSync.reload();
        
     });
     watch('./app/assets/styles/**/*.css', function(){ 
        //first indicates what to watch, second waht to do when saved
        gulp.start('cssinject');
       
    });
    watch('./app/assets/scripte/**/*.js', function(){ 
        //first indicates what to watch, second waht to do when saved
        gulp.start('scriptsRefresh');
       
    });
});


gulp.task('cssinject',['styles'],function(){
    return gulp.src('./app/temp/styles/styles.css')
   .pipe(browserSync.stream());
   
});
gulp.task('scriptsRefresh',['scripts'],function(){
    browserSync.reload();
   
});

