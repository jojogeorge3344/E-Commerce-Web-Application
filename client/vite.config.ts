import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3001
  },
  plugins: [
    react(),
  ],
  // Add a file loader to handle non-JavaScript file imports
  resolve: {
    alias: {
      // Mentioning the MP3 files containing folder name
      '@sounds': '/public/Sounds'
    }
  },
  // Configure the file loader to handle MP3 files. the all sounds should mention here
  optimizeDeps: {
    include: [
      '@sounds/toggle-enable-disable.mp3',
      '@sounds/header-menu-sound.mp3',
      '@sounds/Dark-Mode-Enable.mp3',
      '@sounds/Product-View-Sound.mp3'
    ]
  }
});
