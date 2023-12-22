/* eslint-disable import/extensions */

// IMPORT NPM PACKAGES, GULP PLUGINS, AND MODULES.
import CleanCSS from "clean-css";
import browserSync from "browser-sync";
import concat from "gulp-concat";
import { deleteAsync } from "del";
import fs from "fs";
import pkg from "gulp";
import htmlmin from "gulp-htmlmin";
import injectString from "gulp-inject-string";
import uglify from "gulp-uglify";
import compileStyles from "./gulp-tasks/dev-tasks/cssTasks.js";
import scriptsDev from "./gulp-tasks/dev-tasks/jsTasks.js";

const { src, dest, series, parallel, watch } = pkg;

// DEFINE PROJECT PATHS.
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

// GULP CLEAN/DELETE TASK.
// Deletes the dev and prod directories.
export const clean = async () => {
  const deletedDirectoryPaths = await deleteAsync([
    paths.dev,
    paths.prod,
    `!${paths.dev}/fonts`,
  ]);
  console.log("Deleted directories:\n", deletedDirectoryPaths.join("\n"));
};

// GULP SERVE TASK.
// Initializes a local server and serves files from the dev directory to localhost:8888.
export const serve = (done) => {
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

// * LOCAL DEVELOPMENT TASKS *
// DEVELOPMENT: Compile SASS to CSS, concatenate CSS files into styles.css, and auto-prefix CSS. Output to dev/css.
export const styles = (done) => {
  compileStyles(paths.src.sass, `${paths.dev}/css`);
  done();
};

// DEVELOPMENT: Concatenate JS files into app.js. Output to dev/js.
export const scripts = (done) => {
  scriptsDev(paths.src.js, `${paths.dev}/js`);
  done();
};

export const html = (done) => {
  const cssFilePath = "css/styles.css";
  const jsFilePath = "js/app.js";

  src(paths.src.html)
    .pipe(
      injectString.after(
        "</title>",
        `\n<link rel="stylesheet" href="${cssFilePath}">`,
      ),
    )
    .pipe(
      injectString.before("</body>", `\n<script src="${jsFilePath}"></script>`),
    )
    .pipe(dest(paths.dev))
    .pipe(browserSync.stream());

  done();
};

export const htmlFr = (done) => {
  const cssFilePath = "css/styles.css";
  const jsFilePath = "js/app.js";

  src(paths.src.htmlfr)
    .pipe(
      injectString.after(
        "</title>",
        `\n<link rel="stylesheet" href="${cssFilePath}">`,
      ),
    )
    .pipe(
      injectString.before("</body>", `\n<script src="${jsFilePath}"></script>`),
    )
    .pipe(dest(paths.dev))
    .pipe(browserSync.stream());

  done();
};

export const watchDev = () => {
  watch(paths.src.sass, styles);
  watch(paths.src.js, scripts);
  watch(paths.src.html, html);
  watch(paths.src.htmlfr, htmlFr);
};

export const devFr = series(
  clean,
  parallel(styles, scripts, htmlFr),
  serve,
  watchDev,
);

export default series(clean, parallel(styles, scripts, html), serve, watchDev);

// * PRODUCTION TASKS *
export const compileScripts = () =>
  src(paths.src.js)
    .pipe(concat("app.js"))
    .pipe(uglify())
    .pipe(dest(`${paths.dev}/js`));

export const inlineProd = () => {
  const cssFilePath = `${paths.dev}/css/styles.css`;
  const cssContent = fs.readFileSync(cssFilePath, "utf8");
  const minifiedCSS = new CleanCSS().minify(cssContent).styles;
  const jsFilePath = `${paths.dev}/js/app.js`;
  const jsContent = fs.readFileSync(jsFilePath, "utf8");

  return src(paths.src.html)
    .pipe(injectString.after("</title>", `\n<style>${minifiedCSS}</style>`))
    .pipe(injectString.before("</body>", `\n<script>${jsContent}</script>`))
    .pipe(injectString.replace(/<!--[\s\S]*?-->/g, ""))
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest(paths.prod));
};

export const inlineFrProd = () => {
  const cssFilePath = `${paths.dev}/css/styles.css`;
  const cssContent = fs.readFileSync(cssFilePath, "utf8");
  const minifiedCSS = new CleanCSS().minify(cssContent).styles;
  const jsFilePath = `${paths.dev}/js/app.js`;
  const jsContent = fs.readFileSync(jsFilePath, "utf8");

  return src(paths.src.htmlfr)
    .pipe(injectString.after("</title>", `\n<style>${minifiedCSS}</style>`))
    .pipe(injectString.before("</body>", `\n<script>${jsContent}</script>`))
    .pipe(injectString.replace(/<!--[\s\S]*?-->/g, ""))
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest(paths.prod));
};

export const build = series(parallel(styles, compileScripts, html), inlineProd);

export const buildFr = series(
  parallel(styles, compileScripts, htmlFr),
  inlineFrProd,
);
