import { defineConfig, Plugin } from 'vite';
import { copyFileSync, existsSync, mkdirSync, readFileSync } from 'fs';
import { join, dirname } from 'path';

function copyReferencedImagesPlugin(): Plugin {
  return {
    name: 'copy-referenced-images',
    closeBundle() {
      // Parse data.ts to find all referenced image paths
      const dataTsPath = join(__dirname, 'src', 'utils', 'data.ts');
      const content = readFileSync(dataTsPath, 'utf-8');

      // Extract all ./images/... paths from data.ts
      const regex = /\.\/images\/([^'"]+)/g;
      const imagePaths: string[] = [];
      let match: RegExpExecArray | null;
      while ((match = regex.exec(content)) !== null) {
        imagePaths.push(match[1]);
      }

      const rootDir = join(__dirname);
      let copied = 0;

      for (const relPath of imagePaths) {
        const srcPath = join(rootDir, 'images', relPath);
        const destPath = join(rootDir, 'dist', 'images', relPath);

        if (!existsSync(srcPath)) {
          console.warn(`  ⚠ Missing: images/${relPath}`);
          continue;
        }

        mkdirSync(dirname(destPath), { recursive: true });
        copyFileSync(srcPath, destPath);
        copied++;
      }

      console.log(`✓ Copied ${copied} referenced images to dist/images/`);
    },
  };
}

export default defineConfig({
  base: './',
  plugins: [copyReferencedImagesPlugin()],
  build: {
    outDir: 'dist',
    assetsInlineLimit: 4096,
  },
});
