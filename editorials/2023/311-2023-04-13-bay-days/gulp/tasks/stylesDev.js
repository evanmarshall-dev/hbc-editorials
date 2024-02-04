/* eslint-disable import/extensions */
/* eslint-disable import/no-cycle */
/* eslint-disable import/no-extraneous-dependencies */

// stylesDev.js

import gulp from 'gulp';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import cleanCss from 'gulp-clean-css';
import concat from 'gulp-concat';

import { paths } from '../../gulpfile.js';

const sass = gulpSass(dartSass);

export default function devStyles() {
  return gulp
    .src(paths.src.styles)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(concat('main.min.css'))
    .pipe(cleanCss())
    .pipe(gulp.dest(paths.dev.styles));
}
