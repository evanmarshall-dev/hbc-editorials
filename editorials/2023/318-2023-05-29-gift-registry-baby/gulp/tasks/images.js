/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */

// images.js

import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import pngquant from 'imagemin-pngquant';

import { paths } from '../../gulpfile.js';

export default function optImages() {
  return gulp
    .src(`${paths.src.assets}/*.{jpg,jpeg,png,gif,svg}`)
    .pipe(
      imagemin({
        progressive: true,
        svgoPlugins: [{ removeViewBox: false }, { cleanupIDs: false }],
        use: [pngquant()],
      }),
    )
    .pipe(gulp.dest(paths.dev.assets));
}
