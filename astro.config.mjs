import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://ogguevara07.github.io',
  base: '/MyPortafolio', // ⭐ Esta es la clave
  trailingSlash: 'ignore'
});