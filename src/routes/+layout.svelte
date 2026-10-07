<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';

	let { children } = $props();

	onMount(() => {
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
		let disable: (() => void) | undefined;
		// cursor-flashlight touches `document` on import, so it must load client-side only
		import('cursor-flashlight').then((m) => {
			m.enable({ size: '75vmax' });
			disable = m.disable;
		});
		return () => disable?.();
	});
</script>

<a
	href="#main-content"
	class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent focus:text-slate-900 focus:font-semibold focus:rounded"
>
	Skip to main content
</a>

{@render children()}
