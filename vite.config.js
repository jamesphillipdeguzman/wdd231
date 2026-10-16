import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
    plugins: [
        viteStaticCopy({
            targets: [
                // Copies 'data' folder into dist/data
                { src: 'data', dest: '' },
                // Copies 'chamber/data' folder into dist/chamber/data
                { src: 'chamber/data', dest: '' },
                // Copies 'images' folder into dist/images
                { src: 'images', dest: '' },
                // Copies 'chamber/images' folder into dist/chamber/images
                { src: 'chamber/images', dest: '' }
            ]
        })
    ],
    build: {
        outDir: 'dist',
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                tracker: resolve(__dirname, 'degree-tracker.html'),
                chamberHome: resolve(__dirname, 'chamber/index.html'),
                chamberDirectory: resolve(__dirname, 'chamber/directory.html'),
                chamberDiscover: resolve(__dirname, 'chamber/discover.html'),
                chamberJoin: resolve(__dirname, 'chamber/join.html'),
                chamberThanks: resolve(__dirname, 'chamber/thanks.html'),
            },
        },
    },
    server: {
        port: 3000,
        open: true,
    },
});