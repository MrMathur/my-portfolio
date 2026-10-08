<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { onNavigate } from '$app/navigation';
	import FixedSection from '#lib/components/FixedSection.svelte';

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

	// Crossfade the right column between pages; the sidebar is identical on both sides so it stays still.
	onNavigate((navigation) => {
		if (!document.startViewTransition) return;
		if (navigation.from?.url.pathname === navigation.to?.url.pathname) return;
		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<a
	href="#main-content"
	class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent focus:text-slate-900 focus:font-semibold focus:rounded"
>
	Skip to main content
</a>

<div class="h-screen text-content flex justify-center">
	<FixedSection />
	<div class="flex container lg:px-8 pointer-events-none items-start gap-y-5 shrink-0 z-10">
		<div class="hidden lg:flex w-1/3 shrink-0 self-stretch"></div>
		<div class="flex pointer-events-auto w-full lg:w-2/3">
			{@render children()}
		</div>
	</div>
</div>
