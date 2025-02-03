import pkg from 'gulp';
import injectString from 'gulp-inject-string';
import fs from 'fs';
import htmlmin from 'gulp-htmlmin';

const { src, dest } = pkg;

export default function htmlProd(srcPath, destPath) {
  const cssContent = fs.readFileSync('prod/css/styles.css', 'utf8');
  const jsContent = fs.readFileSync('prod/js/app.js', 'utf8');

  // return new Promise((resolve, reject) => {
  src(srcPath)
    .pipe(injectString.after('</title>', `\n<style>${cssContent}</style>`))
    .pipe(injectString.before('</body>', `<script>${jsContent}</script>\n`))
    .pipe(injectString.replace(/<!--[\s\S]*?-->/g, ''))
    .pipe(
      injectString.replace(
        /class="(cat-landing|secondary-content|home-slots)"/g,
        'class=""',
      ),
    )
    .pipe(
      injectString.replace(
        /<link\s+rel="preconnecct stylesheet"\s+href="https:\/\/www\.thebay\.com\/on\/demandware\.static\/Sites-TheBay-Site\/-\/en_CA\/v1723170782328\/css\/global\.css"\s*\/>/gs,
        '',
      ),
    )
    .pipe(
      injectString.replace(
        /<link\s+rel="preconnect stylesheet"\s+href="https:\/\/www\.thebay\.com\/on\/demandware\.static\/Sites-TheBay-Site\/-\/en_CA\/v1723170782328\/css\/typography\.css"\s*\/>/gs,
        '',
      ),
    )
    .pipe(
      injectString.replace(
        /<link\s+rel="preconnect stylesheet"\s+href="https:\/\/www\.thebay\.com\/on\/demandware\.static\/Sites-TheBay-Site\/-\/en_CA\/v1723170782328\/css\/zellers-svg-font\.css"\s*\/>/gs,
        '',
      ),
    )
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest(destPath));
  // .on("end", resolve)
  // .on("error", reject);
  // });
}
