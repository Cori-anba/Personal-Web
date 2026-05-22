import { defineConfig, Plugin } from 'vite';
import { copyFileSync, existsSync, mkdirSync, readdirSync, statSync } from 'fs';
import { join, relative, dirname } from 'path';

function copyImagesPlugin(): Plugin {
  return {
    name: 'copy-images',
    closeBundle() {
      const srcDir = join(__dirname, 'images');
      const destDir = join(__dirname, 'dist', 'images');

      function copyDir(src: string, dest: string) {
        if (!existsSync(dest)) mkdirSync(dest, { recursive: true });
        const entries = readdirSync(src);
        for (const entry of entries) {
          const srcPath = join(src, entry);
          const destPath = join(dest, entry);
          if (statSync(srcPath).isDirectory()) {
            copyDir(srcPath, destPath);
          } else {
            copyFileSync(srcPath, destPath);
          }
        }
      }

      if (existsSync(srcDir)) {
        copyDir(srcDir, destDir);
        console.log('✓ images/ copied to dist/images/');
      }
    },
  };
}

export default defineConfig({
  base: './',
  plugins: [copyImagesPlugin()],
  build: {
    outDir: 'dist',
    assetsInlineLimit: 4096,
  },
});
