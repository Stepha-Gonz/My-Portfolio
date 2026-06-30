import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname, basename } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const imgDir = join(__dirname, '..', 'public', 'img');

const files = await readdir(imgDir);
const images = files.filter(f => /\.(png|jpg|jpeg)$/i.test(f));

console.log(`Converting ${images.length} images to WebP...`);

for (const file of images) {
  const input = join(imgDir, file);
  const name = basename(file, extname(file));
  const output = join(imgDir, `${name}.webp`);

  const info = await stat(input);
  const sizeBefore = (info.size / 1024).toFixed(0);

  await sharp(input)
    .webp({ quality: 82 })
    .toFile(output);

  const infoAfter = await stat(output);
  const sizeAfter = (infoAfter.size / 1024).toFixed(0);
  console.log(`  ${file} ${sizeBefore}KB → ${name}.webp ${sizeAfter}KB`);
}

console.log('Done.');
