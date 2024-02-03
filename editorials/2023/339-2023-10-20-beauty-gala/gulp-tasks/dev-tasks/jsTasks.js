import browserSync from "browser-sync";
import concat from "gulp-concat";
import pkg from "gulp";
import plumber from "gulp-plumber";

const { src, dest } = pkg;

const scriptsDev = (srcPath, destPath) => {
  src(srcPath).pipe(plumber()).pipe(concat("app.js")).pipe(dest(destPath)).pipe(browserSync.stream());
};

export default scriptsDev;
