import { defineConfig } from 'vite';

export default defineConfig({
  // Especifica la carpeta raíz de tu proyecto
  root: './',
  
  // Configura las opciones de build
  build: {
    outDir: 'dist',  // La carpeta donde se generarán los archivos de producción
  },

});