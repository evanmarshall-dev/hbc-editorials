/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */
/* eslint-disable import/no-cycle */

// gulpfile.js

// Imports coming from default exports do not use curly braces.
// Imports coming from tasks with multiple exports require curly braces.
import gulp from 'gulp';
import browserSync from './gulp/tasks/syncDev.js';
import browserSyncFr from './gulp/tasks/syncDevFr.js';
import devScripts from './gulp/tasks/scriptsDev.js';
import devScriptsFr from './gulp/tasks/scriptsDevFr.js';
import devStyles from './gulp/tasks/stylesDev.js';
import devStylesFr from './gulp/tasks/stylesDevFr.js';
import { devHtml, injectAssets } from './gulp/tasks/htmlDev.js';
import { devHtmlFr, injectAssetsFr } from './gulp/tasks/htmlDevFr.js';
// import optImages from "./gulp/tasks/images.js";
// import imagesWebP from './gulp/tasks/imagesWebP.js';
import clean from './gulp/tasks/clean.js';
import prodHtml from './gulp/tasks/htmlProd.js';

export const paths = {
  src: {
    main: 'src',
    html: 'src/html/**/*.html',
    assets: 'src/assets/**/*',
    scripts: 'src/js/*.js',
    styles: 'src/scss/**/*.scss',
    htmlen: 'src/html/english/index.html',
    htmlfr: 'src/html/french/index.html',
    templates: 'src/templates/**/*.html',
  },
  dev: {
    main: 'dev',
    mainfr: 'dev/french',
    assets: 'dev/assets',
    scripts: 'dev/js',
    scriptsfr: 'dev/french/js',
    styles: 'dev/css',
    stylesfr: 'dev/french/css',
    htmlen: 'dev/index.html',
    htmlfr: 'dev/index-fr.html',
  },
  dist: {
    main: 'dist',
  },
};

// Exported Public Tasks
// export const imageTask = gulp.series(optImages);
export const prodTask = gulp.series(prodHtml);

// export const devFrench = gulp.series(
//   clean,
//   gulp.parallel(devScriptsFr, devStylesFr, devHtmlFr, optImages),
//   injectAssetsFr,
//   // prodHtml,
//   browserSyncFr,
// );

export const devFrench = gulp.series(
  clean,
  gulp.parallel(devScriptsFr, devStylesFr, devHtmlFr),
  injectAssetsFr,
  // prodHtml,
  browserSyncFr,
);

// Exported Default Tasks
// export default gulp.series(
//   clean,
//   gulp.parallel(devScripts, devStyles, devHtml, optImages),
//   injectAssets,
//   // prodHtml,
//   browserSync,
// );

export default gulp.series(
  clean,
  gulp.parallel(devScripts, devStyles, devHtml),
  injectAssets,
  // prodHtml,
  browserSync,
);
