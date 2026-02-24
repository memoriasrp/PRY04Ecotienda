import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    root: ".",                // tu proyecto empieza en la raíz
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