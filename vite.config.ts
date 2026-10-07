import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import tailwindcss from '@tailwindcss/vite';
import { mdsvex } from 'mdsvex';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit({
			adapter: adapter({ pages: 'build', assets: 'build', fallback: undefined }),
			extensions: ['.svelte', '.md'],
			preprocess: [vitePreprocess(), mdsvex({ extensions: ['.md'] })]
		})
	]
});
