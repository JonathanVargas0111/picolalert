import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless'; // Importa el adaptador de Vercel
import svelte from "@astrojs/svelte";

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(), // Usa el adaptador de Vercel
  integrations: [svelte()],
  vite: {
    plugins: [tailwindcss()]
  }
});