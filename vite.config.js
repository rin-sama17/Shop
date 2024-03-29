import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import commonjs from "vite-plugin-commonjs";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    commonjs({
      filter(id) { if (id.includes('node_modules/redux-storage/build-es')) { return true; } }
    }),
    react()],
});
