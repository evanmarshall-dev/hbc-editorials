/* eslint-disable import/extensions */
/* eslint-disable import/no-cycle */
/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */

// clean.js

import { deleteAsync } from 'del';
import { paths } from '../../gulpfile.js';

async function clean() {
  // const deletedFilePaths = await deleteAsync(paths.dist.images);
  const deletedDirectoryPaths = await deleteAsync([paths.dev.main, paths.dist.main]);

  // console.log("Deleted files:\n", deletedFilePaths.join("\n"));
  // console.log("\n\n");
  console.log('Deleted directories:\n', deletedDirectoryPaths.join('\n'));
}

export default clean;
