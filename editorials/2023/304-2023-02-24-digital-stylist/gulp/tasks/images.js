/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */

import gulp from 'gulp';
import imagemin from 'gulp-imagemin';

import { paths } from '../../gulpfile.js';

export default function optImages() {
  return gulp
    .src(`${paths.src.assets}/*.{jpg,jpeg,png}`)
    .pipe(imagemin())
    .pipe(gulp.dest(paths.dev.assets));
}
