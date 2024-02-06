// Gulpfile.js.

// Import required modules.
import browserSync from "browser-sync";
import CleanCSS from "clean-css";
import { deleteAsync } from "del";
import gulp from "gulp";
import autoprefixer from "gulp-autoprefixer";
import concat from "gulp-concat";
import htmlmin from "gulp-htmlmin";
import injectString from "gulp-inject-string";
import gulpSass from "gulp-sass";
import uglify from "gulp-uglify";
import dartSass from "sass";
import fs from "fs";

// Set source and destination directories.
export const paths = {
  src: {
    sass: "src/scss/**/*.scss",
    html: "src/html/EN/index.html",
    // html: "src/html/EN/**/*.html",
    htmlfr: "src/html/FR/index.html",
    js: "src/js/**/*.js",
  },
  dev: "dev",
  prod: "prod",
};

// To fix conflict with new gulp-sass and dart-sass.
const sass = gulpSass(dartSass);

// Clean dev and prod directory.
export const clean = async () => {
  const deletedDirectoryPaths = await deleteAsync([
    `${paths.dev}/**`,
    `${paths.prod}/**`,
    `!${paths.dev}/fonts`,
  ]);
  console.log("Deleted directories:\n", deletedDirectoryPaths.join("\n"));
};

// Serve files from the dev directory.
export const serveDev = (done) => {
  browserSync.init({
    server: {
      baseDir: paths.dev,
    },
    port: 8888,
    open: "local",
    // browser: "google chrome",
    browser: "/mnt/c/Program Files/Google/Chrome/Application/chrome.exe",
  });
  done();
};

// Sass styles task.
export const styles = () =>
  gulp
    .src(paths.src.sass)
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(concat("styles.css"))
    .pipe(gulp.dest(`${paths.dev}/css`))
    // Reload server and inject CSS changes.
    .pipe(browserSync.stream());

// Concatenate and copy JS files to the dev directory.
export const scriptsDev = () =>
  gulp
    .src(paths.src.js)
    .pipe(concat("app.js"))
    .pipe(gulp.dest(`${paths.dev}/js`))
    .pipe(browserSync.stream());

// Copy HTML files to the dev directory and inject CSS file.
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

// Copy French HTML files to the dev directory and inject CSS file.
export const htmlFr = () => {
  const cssFilePath = "css/styles.css";
  const jsFilePath = "js/app.js";
  return gulp
    .src(paths.src.htmlfr)
    .pipe(injectString.after("</title>", `\n<link rel="stylesheet" href="${cssFilePath}">`))
    .pipe(injectString.before("</body>", `\n<script src="${jsFilePath}"></script>`))
    .pipe(gulp.dest(paths.dev))
    .pipe(browserSync.stream()); // Reload server and inject HTML changes.
};

// Minify and compress JS files for inline and build tasks.
export const minifyScriptsProd = () =>
  gulp
    .src(paths.src.js)
    // Concatenate all JS files into a single file.
    .pipe(concat("app.js"))
    // Uglify the JavaScript code.
    .pipe(uglify())
    .pipe(gulp.dest(`${paths.dev}/js`));

// Minify, compress, and inline CSS and JS files into the index.html file.
export const inlineProd = () => {
  const cssFilePath = `${paths.dev}/css/styles.css`;
  const cssContent = fs.readFileSync(cssFilePath, "utf8");
  const minifiedCSS = new CleanCSS().minify(cssContent).styles;
  const jsFilePath = `${paths.dev}/js/app.js`;
  const jsContent = fs.readFileSync(jsFilePath, "utf8");
  return (
    gulp
      .src(paths.src.html)
      .pipe(injectString.after("</title>", `\n<style>${minifiedCSS}</style>`))
      .pipe(injectString.before("</body>", `\n<script>${jsContent}</script>`))
      // Remove comments in html code.
      .pipe(injectString.replace(/<!--[\s\S]*?-->/g, ""))
      .pipe(htmlmin({ collapseWhitespace: true }))
      .pipe(gulp.dest(paths.prod))
  );
};

// Minify, compress, and inline CSS and JS files into the index.html file.
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

// Watch for changes in the src directory then run Dev tasks.
export const watchDev = () => {
  gulp.watch(paths.src.sass, styles);
  gulp.watch(paths.src.js, scriptsDev);
  gulp.watch(paths.src.html, html);
  gulp.watch(paths.src.htmlfr, htmlFr);
};

// Build task for English files.
export const build = gulp.series(clean, gulp.parallel(styles, minifyScriptsProd, html), inlineProd);

// Build task for French files.
export const buildFr = gulp.series(
  clean,
  gulp.parallel(styles, minifyScriptsProd, htmlFr),
  inlineFrProd,
);

// Development task for French files.
export const devFr = gulp.series(
  clean,
  gulp.parallel(styles, scriptsDev, htmlFr),
  serveDev,
  watchDev,
);

// Default task (Development task for English files).
export default gulp.series(clean, gulp.parallel(styles, scriptsDev, html), serveDev, watchDev);
