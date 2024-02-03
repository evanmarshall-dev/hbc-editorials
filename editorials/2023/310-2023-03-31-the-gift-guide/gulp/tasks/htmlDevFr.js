/* eslint-disable import/extensions */
/* eslint-disable import/no-cycle */
/* eslint-disable import/no-extraneous-dependencies */

// htmlDevFr.js

import gulp from "gulp";
import fileInclude from "gulp-file-include";
import inject from "gulp-inject";
import htmlMin from "gulp-htmlmin";

import { paths } from "../../gulpfile.js";

export function devHtmlFr() {
  return gulp
    .src(paths.src.htmlfr)
    .pipe(
      fileInclude({
        prefix: "@@",
        basepath: "src/templates/french",
      })
    )
    .pipe(htmlMin({ collapseWhitespace: true }))
    .pipe(gulp.dest(paths.dev.mainfr));
}

export function injectAssetsFr() {
  const css = gulp.src(`${paths.dev.stylesfr}/*.css`, { read: false });
  const js = gulp.src(`${paths.dev.scriptsfr}/*.js`, { read: false });

  return gulp
    .src(`${paths.dev.mainfr}/*.html`)
    .pipe(inject(css, { ignorePath: "dev/french", addRootSlash: true }))
    .pipe(inject(js, { ignorePath: "dev/french", addRootSlash: true }))
    .pipe(gulp.dest(paths.dev.mainfr));
}
