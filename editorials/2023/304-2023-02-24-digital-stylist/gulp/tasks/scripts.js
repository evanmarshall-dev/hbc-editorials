/* eslint-disable import/extensions */
/* eslint-disable import/no-cycle */
/* eslint-disable import/no-extraneous-dependencies */

// scripts.js

import gulp from "gulp";
import babel from "gulp-babel";
import concat from "gulp-concat";
import terser from "gulp-terser";

import { paths } from "../../gulpfile.js";

export default function devScripts() {
  return gulp
    .src(paths.src.scripts)
    .pipe(babel())
    .pipe(concat("main.min.js"))
    .pipe(terser())
    .pipe(gulp.dest(paths.dev.scripts));
}
