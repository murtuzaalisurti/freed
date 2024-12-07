import { defineConfig } from 'astro/config';
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  output: 'static',
  server: {
    port: 3000
  },
  vite: {
    build: {
      rollupOptions: {
        external: '/pagefind/pagefind.js?url'
      }
    }
  },
  adapter: netlify()
});