import pkg from "gulp";
import injectString from "gulp-inject-string";
import fs from "fs";
import htmlmin from "gulp-htmlmin";

const { src, dest } = pkg;

export default function htmlProd(srcPath, destPath) {
  const cssContent = fs.readFileSync("prod/css/styles.css", "utf8");
  const jsContent = fs.readFileSync("prod/js/app.js", "utf8");

  // return new Promise((resolve, reject) => {
  src(srcPath)
    .pipe(injectString.after("</title>", `\n<style>${cssContent}</style>`))
    .pipe(injectString.before("</body>", `<script>${jsContent}</script>\n`))
    .pipe(injectString.replace(/<!--[\s\S]*?-->/g, ""))
    .pipe(injectString.replace(/class="(home-slots)"/g, 'class=""'))
    .pipe(injectString.replace(/<link\s+rel="stylesheet"\s+href="https:\/\/www\.thebay\.com\/on\/demandware\.static\/Sites-TheBay-Site\/-\/en_CA\/v1712236745383\/css\/global\.css"\s*\/>/gs, ''))
    .pipe(injectString.replace(/<link\s+rel="stylesheet"\s+href="https:\/\/www\.thebay\.com\/on\/demandware\.static\/Sites-TheBay-Site\/-\/en_CA\/v1712130735115\/css\/typography\.css"\s*\/>/gs, ''))
    .pipe(injectString.replace(/<link\s+rel="stylesheet"\s+href="https:\/\/www\.thebay\.com\/on\/demandware\.static\/Sites-TheBay-Site\/-\/en_CA\/v1712130735115\/css\/zellers-svg-font\.css"\s*\/>/gs, ''))
    .pipe(injectString.replace(/<script\s+src="https:\/\/cdnjs\.cloudflare\.com\/ajax\/libs\/jquery\/3\.6\.0\/jquery\.min\.js"\s+integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP\+u1T9qYdvdihz0PPSiiqn\/\+\/3e7Jo4EaG7TubfWGUrMQ=="\s+crossorigin="anonymous"\s+referrerpolicy="no-referrer"\s*><\/script>/gs, ''))
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest(destPath));
  // .on("end", resolve)
  // .on("error", reject);
  // });
}
