/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable import/no-cycle */

// syncDev.js

import gulp from "gulp";
import sync from "browser-sync";

import devScripts from "./scriptsDev.js";
import devStyles from "./stylesDev.js";
import { devHtml, injectAssets } from "./htmlDev.js";

import { paths } from "../../gulpfile.js";

export default function browserSync() {
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
