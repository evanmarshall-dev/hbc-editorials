/* eslint-disable import/extensions */
/* eslint-disable import/no-cycle */
/* eslint-disable import/no-extraneous-dependencies */

// html.js

import gulp from "gulp";
import fileInclude from "gulp-file-include";
import inject from "gulp-inject";
import htmlMin from "gulp-htmlmin";

import { paths } from "../../gulpfile.js";

export function devHtml() {
  return gulp
    .src(paths.src.htmlen)
    .pipe(
      fileInclude({
        prefix: "@@",
        basepath: "src/templates",
      })
    )
    .pipe(htmlMin({ collapseWhitespace: true }))
    .pipe(gulp.dest(paths.dev.main));
}

export function injectAssets() {
  const css = gulp.src(`${paths.dev.styles}/*.css`, { read: false });
  const js = gulp.src(`${paths.dev.scripts}/*.js`, { read: false });

  return gulp
    .src(`${paths.dev.main}/*.html`)
    .pipe(inject(css, { ignorePath: "dev", addRootSlash: false }))
    .pipe(inject(js, { ignorePath: "dev", addRootSlash: false }))
    .pipe(gulp.dest(paths.dev.main));
}
