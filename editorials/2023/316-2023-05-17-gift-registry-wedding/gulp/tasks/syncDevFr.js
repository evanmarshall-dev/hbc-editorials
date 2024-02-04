/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-cycle */

// syncDevFr.js

import gulp from 'gulp';
import syncfr from 'browser-sync';

import devScriptsFr from './scriptsDevFr.js';
import devStylesFr from './stylesDevFr.js';
import { devHtmlFr, injectAssetsFr } from './htmlDevFr.js';

import { paths } from '../../gulpfile.js';

export default function browserSyncFr() {
  syncfr.init({
    server: {
      baseDir: paths.dev.mainfr,
    },
    port: 9999,
    open: 'local',
    browser: 'google chrome',
  });

  gulp.watch(paths.src.scripts, devScriptsFr);
  gulp.watch(paths.src.styles, devStylesFr);
  gulp.watch([paths.src.html, paths.src.templates], gulp.series(devHtmlFr, injectAssetsFr));
  gulp.watch(paths.dev.mainfr).on('change', syncfr.reload);
}
