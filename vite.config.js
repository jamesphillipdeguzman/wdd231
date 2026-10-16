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
                { src: 'data/*', dest: 'data' },
                { src: 'chamber/data/*', dest: 'chamber/data' },
                { src: 'images/*', dest: 'images' },
                { src: 'chamber/images/*', dest: 'chamber/images' }
            ]
        })
    ],
    build: {
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