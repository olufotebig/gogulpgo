var gulp = require("gulp");

const htmlFiles = "src/*.html";

gulp.task("html", function() {
  return gulp.src(htmlFiles).pipe(gulp.dest("dist"));
});
gulp.task("one", gulp.series("html"));

var one = function(done) {
  console.log("one");
  done();
};
