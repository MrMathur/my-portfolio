<script lang="ts">
	import { page } from '$app/state';
	import { nav } from '#lib/active-section.svelte.ts';

	let { section }: { section: string } = $props();
	let active = $derived(
		page.url.pathname.startsWith('/projects/') ? section === 'projects' : nav.active === section
	);
</script>

<a
	href="/#{section}"
	aria-current={active ? 'location' : undefined}
	class={[
		'hover:text-accent text-xl hover:font-semibold leading-none tracking-wide uppercase transition-colors duration-150',
		active ? 'text-content font-semibold' : 'text-content-dim font-normal'
	]}
>
	{section}
</a>
