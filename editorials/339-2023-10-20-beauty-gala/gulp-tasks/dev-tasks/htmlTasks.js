import browserSync from "browser-sync";
import gulp from "gulp";
import injectString from "gulp-inject-string";

export default function injectAssets(srcPath, destPath) {
  const cssFilePath = "css/styles.css";
  const jsFilePath = "js/app.js";
  return gulp
    .src(srcPath)
    .pipe(injectString.after("</title>", `\n<link rel="stylesheet" href="${cssFilePath}">`))
    .pipe(injectString.before("</body>", `<script src="${jsFilePath}"></script>\n`))
    .pipe(gulp.dest(destPath))
    .pipe(browserSync.stream());
}
