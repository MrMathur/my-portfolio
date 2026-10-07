<script lang="ts">
	let { title, link, block = false }: { title: string; link: string; block?: boolean } = $props();
	const cls =
		'w-full sm:w-3/4 text-content text-lg underline underline-offset-2 hover:text-accent font-semibold transition-colors duration-150';
</script>

{#if block}
	<div class="flex w-full mt-4 px-4 sm:px-0">
		<div class="w-0 sm:w-1/4"></div>
		<a target="_blank" rel="noopener noreferrer" href={link} class={cls}>{title}</a>
	</div>
{:else}
	<a target="_blank" rel="noopener noreferrer" href={link} class={cls}>{title}</a>
{/if}
