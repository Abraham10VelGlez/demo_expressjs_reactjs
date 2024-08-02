import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
        //code agregado para quitar error de api
        /* rewrite: (path) => path.replace(/^\/api/, ''),        
         onError: (err, req, res) => {
           console.error('Proxy error:', err);
           res.writeHead(500, {
             'Content-Type': 'text/plain'
           });
           res.end('Something went wrong. And we are reporting a custom error message.');
         }*/
        //code agregado para quitar error de api
      }
    },
    //opcional para Controla el reinicio de Vite
    //Puedes intentar aumentar el debounce time para las recargas
    // en tu configuración de Vite
    /*hmr: {
       overlay: false,
       timeout: 3000, // Tiempo en milisegundos antes de intentar reconectar
     },*/
  }


})
