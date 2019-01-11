var gulp = require("gulp");
var sass = require("gulp-sass");
var sourcemaps = require("gulp-sourcemaps");
var connect = require("gulp-connect");


gulp.task("copyHtml",function(){
	gulp.src("*.html")
	.pipe(gulp.dest('dist'))
	.pipe(connect.reload());
});
gulp.task("sass",function(){
	gulp.src("stylesheet/*.scss")
	.pipe(sourcemaps.init())
	.pipe(sass({outputStyle:'compressed'}))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest("dist/css"));
	
});
gulp.task("copyJs",function(){
	gulp.src("js/*.js")
	.pipe(gulp.dest('dist/js'));
});
gulp.task("server",function(){
	connect.server({
		"root":"dist",
		"livereload":true
	})
}); 
gulp.task('watch',function(){
	gulp.watch(["*.html","stylesheet/*.scss"],["copyHtml","sass"]);	
});

gulp.task("default",["copyHtml","sass","watch","server"]);
