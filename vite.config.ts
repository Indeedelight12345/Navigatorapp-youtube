import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // This injects your specific API key into the application code
    'process.env.API_KEY': JSON.stringify("AIzaSyC9xaj5evlkYzxXNpXBlpNHK0itb3mwa1I")
  }
});