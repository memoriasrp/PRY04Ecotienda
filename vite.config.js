import { defineConfig } from 'vite';
import { resolve } from 'path';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
    root: ".",                // tu proyecto empieza en la raíz
    plugins: [
        ViteImageOptimizer({
            png: { quality: 80 },
            jpeg: { quality: 80 },
            jpg: { quality: 80 },
            webp: { quality: 80 },
            avif: { quality: 50 }
        })
    ],

    build: {
        outDir: "dist",         // Vite generará la carpeta dist
        emptyOutDir: true,      // limpia dist antes de compilar
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                about: resolve(__dirname, 'about.html'),
                precios: resolve(__dirname, 'precios.html'),
                contacto: resolve(__dirname, 'contacto.html')
            }
        }
    }
});