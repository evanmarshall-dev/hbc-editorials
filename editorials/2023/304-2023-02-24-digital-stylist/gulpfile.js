/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */
/* eslint-disable import/no-cycle */

// gulpfile.js

// Imports coming from default exports do not use curly braces.
// Imports coming from tasks with multiple exports require curly braces.
import gulp from "gulp";
import sync from "browser-sync";
import devScripts from "./gulp/tasks/scripts.js";
import devStyles from "./gulp/tasks/styles.js";
import { devHtml, injectAssets } from "./gulp/tasks/html.js";
import { devHtmlFr } from "./gulp/tasks/htmlfr.js";
import optImages from "./gulp/tasks/images.js";
import imagesWebP from "./gulp/tasks/imagesWebP.js";
import clean from "./gulp/tasks/clean.js";
// import prodHtml from './gulp/tasks/htmlprod.js';

export const paths = {
  src: {
    main: "src",
    html: "src/html/*.html",
    assets: "src/assets/**/*",
    scripts: "src/js/*.js",
    styles: "src/scss/**/*.scss",
    htmlen: "src/html/index.html",
    htmlfr: "src/html/index-fr.html",
    templates: "src/templates/*.html",
  },
  dev: {
    main: "dev",
    assets: "dev/assets",
    scripts: "dev/js",
    styles: "dev/css",
    stylesFile: "dev/css/*.css",
    scriptsFile: "dev/js/*.js",
    htmlen: "dev/index.html",
    htmlfr: "dev/index-fr.html",
  },
  dist: {
    main: "dist",
  },
};

function browserSync() {
  sync.init({
    server: {
      baseDir: paths.dev.main,
    },
    port: 8888,
    open: "local",
    browser: "google chrome",
  });

  gulp.watch(paths.src.scripts, devScripts);
  gulp.watch(paths.src.styles, devStyles);
  gulp.watch([paths.src.html, paths.src.templates], gulp.series(devHtml, injectAssets));
  gulp.watch(paths.dev.main).on("change", sync.reload);
}

export default gulp.series(
  clean,
  gulp.parallel(devScripts, devStyles, devHtml, devHtmlFr, optImages, imagesWebP),
  injectAssets,
  // prodHtml,
  browserSync
);
