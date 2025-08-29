import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'static',
  site: 'https://ogguevara07.github.io',
  base: '/MyPortafolio',
  build: {
    assets: '_astro'
  },
  integrations: [tailwind()]
});
