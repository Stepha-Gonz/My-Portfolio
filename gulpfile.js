import path from "path";
import fs from "fs";
import { glob } from "glob";
import { src, dest, watch, series } from "gulp";
import * as dartSass from "sass";
import gulpSass from "gulp-sass";
import terser from "gulp-terser";
import sharp from "sharp";
import rename from "gulp-rename";
import postcss from "gulp-postcss";
import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";
import webpack from "webpack-stream";
import sourcemaps from "gulp-sourcemaps";
import { deleteAsync } from "del";

// Configuración de gulp-sass con dartSass
const sassCompiler = gulpSass(dartSass);

const paths = {
  scss: "src/scss/**/*.scss",
  js: "src/js/**/*.js",
  img: "src/img/**/*",
};

function handleError(err) {
  console.error(err.toString());
  this.emit("end");
}

export function css() {
  return src("./src/scss/app.scss", { sourcemaps: true })
    .pipe(sassCompiler().on("error", sassCompiler.logError))
    .pipe(postcss([tailwindcss(), autoprefixer()])) // Procesa Tailwind y Autoprefixer
    .pipe(dest("./public/build/css", { sourcemaps: "." }));
}

export function js() {
  return src(paths.js, { sourcemaps: true })
    .pipe(
      webpack({
        module: {
          rules: [
            {
              test: /\.css$/i,
              use: ["style-loader", "css-loader"],
            },
          ],
        },
        mode: "production",
        entry: "./src/js/app.js",
      }).on("error", handleError)
    )
    .pipe(sourcemaps.init())
    .pipe(terser().on("error", handleError))
    .pipe(rename({ suffix: ".min" }).on("error", handleError))
    .pipe(dest("./public/build/js", { sourcemaps: "." }))
    .on("error", handleError);
}

export async function imagenes() {
  try {
    const srcDir = "./src/img";
    const buildDir = "./public/build/img";
    const images = await glob(paths.img);

    for (const file of images) {
      const relativePath = path.relative(srcDir, path.dirname(file));
      const outputSubDir = path.join(buildDir, relativePath);
      await procesarImagenes(file, outputSubDir);
    }
  } catch (err) {
    handleError.call(this, err);
  }
}

async function procesarImagenes(file, outputSubDir) {
  try {
    if (!fs.existsSync(outputSubDir)) {
      fs.mkdirSync(outputSubDir, { recursive: true });
    }
    const baseName = path.basename(file, path.extname(file));
    const extName = path.extname(file).toLowerCase();

    const outputFile = path.join(outputSubDir, `${baseName}${extName}`);
    const outputFileWebp = path.join(outputSubDir, `${baseName}.webp`);
    const outputFileAvif = path.join(outputSubDir, `${baseName}.avif`);

    if (extName === ".svg") {
      fs.copyFileSync(file, outputFile);
    } else if (extName === ".png") {
      await sharp(file).toFile(outputFile).catch(handleError);
      await sharp(file)
        .webp({ quality: 80, lossless: true })
        .toFile(outputFileWebp)
        .catch(handleError);
      await sharp(file)
        .avif({ quality: 80, lossless: true })
        .toFile(outputFileAvif)
        .catch(handleError);
    } else {
      const options = { quality: 80 };
      await sharp(file).jpeg(options).toFile(outputFile).catch(handleError);
      await sharp(file).webp(options).toFile(outputFileWebp).catch(handleError);
      await sharp(file).avif(options).toFile(outputFileAvif).catch(handleError);
    }
  } catch (err) {
    handleError.call(this, err);
  }
}

async function eliminarImagenes(file) {
  try {
    const srcDir = "./src/img";
    const buildDir = "./public/build/img";
    const relativePath = path.relative(srcDir, path.dirname(file));
    const baseName = path.basename(file, path.extname(file));
    const extName = path.extname(file).toLowerCase();

    const outputSubDir = path.join(buildDir, relativePath);
    const outputFile = path.join(outputSubDir, `${baseName}${extName}`);
    const outputFileWebp = path.join(outputSubDir, `${baseName}.webp`);
    const outputFileAvif = path.join(outputSubDir, `${baseName}.avif`);

    await deleteAsync([outputFile, outputFileWebp, outputFileAvif]);
  } catch (err) {
    handleError.call(this, err);
  }
}

export function dev() {
  watch(paths.scss, css).on("error", handleError);
  watch(paths.js, js).on("error", handleError);
  const imgWatcher = watch(paths.img, imagenes).on("error", handleError);
  imgWatcher.on("unlink", eliminarImagenes).on("error", handleError);
}

export const build = series(js, css, imagenes);
export default dev;
