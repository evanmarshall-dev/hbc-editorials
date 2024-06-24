/* eslint-disable import/extensions */
/* eslint-disable import/no-cycle */
/* eslint-disable import/no-extraneous-dependencies */

// htmlProd.js

import gulp from "gulp";
import fileInclude from "gulp-file-include";
import htmlMin from "gulp-htmlmin";

import { paths } from "../../gulpfile.js";

export default function prodHtml() {
  return gulp
    .src(["src/templates/french/hero.html", "src/templates/french/main.html"])
    .pipe(
      fileInclude({
        prefix: "@@",
        basepath: "src/templates/french",
      }),
    )
    .pipe(htmlMin({ collapseWhitespace: true }))
    .pipe(gulp.dest(paths.dist.main));
}
