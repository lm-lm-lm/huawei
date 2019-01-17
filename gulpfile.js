var gulp = require("gulp");
var sass = require("gulp-sass");
var sourcemaps = require("gulp-sourcemaps");
var connect = require("gulp-connect");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var babel = require("gulp-babel");

gulp.task("copyHtml",function(){
	gulp.src("*.html")
	.pipe(gulp.dest('dist'))
	.pipe(connect.reload());
});
gulp.task("copy-imgs",function(){
	gulp.src("img/*")
	.pipe(gulp.dest("dist/imgs"));		//同步刷新
})
gulp.task("sass",function(){
	gulp.src("stylesheet/*.scss")
	.pipe(sourcemaps.init())
	.pipe(sass({outputStyle:'compressed'}))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest("dist/css"));
	
});
gulp.task("copyJs",function(){
	gulp.src("js/*.js")
	.pipe(gulp.dest('dist/js'))
	.pipe(connect.reload());
});

gulp.task("server",function(){
	connect.server({
		"root":"dist",
		"livereload":true
	})
}); 
gulp.task('watch',function(){
	gulp.watch(["*.html","img/*","stylesheet/*.scss","js/*.js"],["copyHtml","copy-imgs","sass","copyJs"]);	
});

gulp.task("default",["server","watch","copy-imgs","sass"]);
