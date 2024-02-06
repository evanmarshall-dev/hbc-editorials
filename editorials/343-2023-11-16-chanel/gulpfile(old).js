import CleanCSS from "clean-css";
import autoprefixer from "gulp-autoprefixer";
import browserSync from "browser-sync";
import concat from "gulp-concat";
import dartSass from "sass";
import { deleteAsync } from "del";
import fs from "fs";
import gulp from "gulp";
import gulpSass from "gulp-sass";
import htmlmin from "gulp-htmlmin";
import injectString from "gulp-inject-string";
import uglify from "gulp-uglify";

export const paths = {
  src: {
    sass: "src/scss/**/*.scss",
    html: "src/html/EN/index.html",
    htmlfr: "src/html/FR/index.html",
    js: "src/js/**/*.js",
  },
  dev: "dev",
  prod: "prod",
};

const sass = gulpSass(dartSass);

export const clean = async () => {
  const deletedDirectoryPaths = await deleteAsync([
    `${paths.dev}/**`,
    `${paths.prod}/**`,
    `!${paths.dev}/fonts`,
  ]);
  console.log("Deleted directories:\n", deletedDirectoryPaths.join("\n"));
};

export const serveDev = (done) => {
  browserSync.init({
    server: {
      baseDir: paths.dev,
    },
    port: 8888,
    open: "local",
    browser: "google chrome",
    // browser: "/mnt/c/Program Files/Google/Chrome/Application/chrome.exe",
  });
  done();
};

export const styles = () =>
  gulp
    .src(paths.src.sass)
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(concat("styles.css"))
    .pipe(gulp.dest(`${paths.dev}/css`))
    .pipe(browserSync.stream());

export const scriptsDev = () =>
  gulp
    .src(paths.src.js)
    .pipe(concat("app.js"))
    .pipe(gulp.dest(`${paths.dev}/js`))
    .pipe(browserSync.stream());

export const html = () => {
  const cssFilePath = "css/styles.css";
  const jsFilePath = "js/app.js";
  return gulp
    .src(paths.src.html)
    .pipe(injectString.after("</title>", `\n<link rel="stylesheet" href="${cssFilePath}">`))
    .pipe(injectString.before("</body>", `\n<script src="${jsFilePath}"></script>`))
    .pipe(gulp.dest(paths.dev))
    .pipe(browserSync.stream());
};

export const htmlFr = () => {
  const cssFilePath = "css/styles.css";
  const jsFilePath = "js/app.js";
  return gulp
    .src(paths.src.htmlfr)
    .pipe(injectString.after("</title>", `\n<link rel="stylesheet" href="${cssFilePath}">`))
    .pipe(injectString.before("</body>", `\n<script src="${jsFilePath}"></script>`))
    .pipe(gulp.dest(paths.dev))
    .pipe(browserSync.stream());
};

export const minifyScriptsProd = () =>
  gulp
    .src(paths.src.js)
    .pipe(concat("app.js"))
    .pipe(uglify())
    .pipe(gulp.dest(`${paths.dev}/js`));

export const inlineProd = () => {
  const cssFilePath = `${paths.dev}/css/styles.css`;
  const cssContent = fs.readFileSync(cssFilePath, "utf8");
  const minifiedCSS = new CleanCSS().minify(cssContent).styles;
  const jsFilePath = `${paths.dev}/js/app.js`;
  const jsContent = fs.readFileSync(jsFilePath, "utf8");
  return gulp
    .src(paths.src.html)
    .pipe(injectString.after("</title>", `\n<style>${minifiedCSS}</style>`))
    .pipe(injectString.before("</body>", `\n<script>${jsContent}</script>`))
    .pipe(injectString.replace(/<!--[\s\S]*?-->/g, ""))
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest(paths.prod));
};

export const inlineFrProd = () => {
  const cssFilePath = `${paths.dev}/css/styles.css`;
  const cssContent = fs.readFileSync(cssFilePath, "utf8");
  const minifiedCSS = new CleanCSS().minify(cssContent).styles;
  const jsFilePath = `${paths.dev}/js/app.js`;
  const jsContent = fs.readFileSync(jsFilePath, "utf8");
  return gulp
    .src(paths.src.htmlfr)
    .pipe(injectString.after("</title>", `\n<style>${minifiedCSS}</style>`))
    .pipe(injectString.before("</body>", `\n<script>${jsContent}</script>`))
    .pipe(injectString.replace(/<!--[\s\S]*?-->/g, ""))
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest(paths.prod));
};

export const watchDev = () => {
  gulp.watch(paths.src.sass, styles);
  gulp.watch(paths.src.js, scriptsDev);
  gulp.watch(paths.src.html, html);
  gulp.watch(paths.src.htmlfr, htmlFr);
};

export const build = gulp.series(clean, gulp.parallel(styles, minifyScriptsProd, html), inlineProd);

export const buildFr = gulp.series(
  clean,
  gulp.parallel(styles, minifyScriptsProd, htmlFr),
  inlineFrProd,
);

export const devFr = gulp.series(
  clean,
  gulp.parallel(styles, scriptsDev, htmlFr),
  serveDev,
  watchDev,
);

export default gulp.series(clean, gulp.parallel(styles, scriptsDev, html), serveDev, watchDev);
