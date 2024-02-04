import * as dartSass from 'sass';

import autoprefixer from 'gulp-autoprefixer';
import browserSync from 'browser-sync';
import concat from 'gulp-concat';
import pkg from 'gulp';
import gulpSass from 'gulp-sass';
import plumber from 'gulp-plumber';

const sass = gulpSass(dartSass);
const { src, dest } = pkg;

const compileStyles = (srcPath, destPath) => {
  src(srcPath)
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(concat('styles.css'))
    .pipe(dest(destPath))
    .pipe(browserSync.stream());
};

export default compileStyles;
