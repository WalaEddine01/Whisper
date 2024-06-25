import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'prompt',
      includeAssets: ['favicon.ico', 'apple-touc-icon.png', 'masked-icon.svg'],
      manifest: {
        name: 'React-vite-app',
        short_name: 'react-vite-app',
        description: 'I am a simple vite app',
        theme_color: '#ffffff',
        background_color: '#f0e7db',
        display: 'standalone',
        scope: '/',
        start_url: '/',
        orientation: 'portrait',
        screenshots: [
          {
            src: './s1.png',
            sizes: '640x320',
            type: 'image/png',
            form_factor: 'wide',
            label: 'Wonder Widgets',
          },
          {
            src: './s2.png',
            sizes: '640x320',
            type: 'image/png',
            form_factor: 'narrow',
            label: 'Wonder Widgets',
          },
        ],
        icons: [
          {
            src: '/icons/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/icons/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});

