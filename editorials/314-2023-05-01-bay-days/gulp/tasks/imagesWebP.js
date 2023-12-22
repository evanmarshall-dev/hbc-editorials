/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */

// imagesWebP.js

import gulp from "gulp";
import webp from "gulp-webp";

import { paths } from "../../gulpfile.js";

export default function imagesWebP() {
  return gulp
    .src(`${paths.src.assets}/*.{jpg,jpeg,png}`)
    .pipe(webp())
    .pipe(gulp.dest(paths.dev.assets));
}
