import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel'; // Importa el adaptador de Vercel
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(), // Usa el adaptador de Vercel
  integrations: [svelte(), tailwind()]
});