import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'static',
  site: 'https://orlando-guevara.dev',
  integrations: [tailwind()],
});