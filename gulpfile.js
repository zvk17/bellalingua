const gulp = require("gulp"),
      sass = require("gulp-sass"),
      sourceMaps = require("gulp-sourcemaps");

gulp.task("sass", ()=>{
    return gulp.src("sass/*.scss")
            .pipe(sourceMaps.init())
            .pipe(sass({
                outputStyle: "compressed"
            }))
            //.pipe(sourceMaps.write())
            .pipe(gulp.dest("public/css"));
});

gulp.task("watch", ()=>{
    gulp.watch("sass/*.scss", ["sass"]);
})
gulp.task("default",['sass',  'watch']);
