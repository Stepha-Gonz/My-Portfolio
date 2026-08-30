import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname, basename, relative } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const imgDir = join(__dirname, '..', 'public', 'img');

async function findImages(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) files.push(...await findImages(full));
    else if (/\.(png|jpg|jpeg)$/i.test(entry.name)) files.push(full);
  }
  return files;
}

const images = await findImages(imgDir);

console.log(`Converting ${images.length} images to WebP...`);

for (const input of images) {
  const name = basename(input, extname(input));
  const output = join(dirname(input), `${name}.webp`);

  const info = await stat(input);
  const sizeBefore = (info.size / 1024).toFixed(0);

  await sharp(input)
    .webp({ quality: 82 })
    .toFile(output);

  const infoAfter = await stat(output);
  const sizeAfter = (infoAfter.size / 1024).toFixed(0);
  console.log(`  ${relative(imgDir, input)} ${sizeBefore}KB → ${name}.webp ${sizeAfter}KB`);
}

console.log('Done.');
