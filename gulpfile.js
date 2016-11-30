require("./gulp/build");
var gulp = require("gulp");

gulp.task("build",["build-js", "build-views"], function() {
    console.log("build is done");
});

