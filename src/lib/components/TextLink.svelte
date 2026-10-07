<script lang="ts">
	let { title, link, block = false }: { title: string; link: string; block?: boolean } = $props();
	const cls =
		'w-full sm:w-3/4 text-content text-lg underline underline-offset-2 hover:text-accent font-semibold transition-colors duration-150';
</script>

{#if block}
	<div class="flex w-full mt-4 px-4 sm:gap-x-6">
		<div class="hidden sm:block sm:w-1/4 sm:shrink-0"></div>
		<div class="flex-1 min-w-0">
			<a target="_blank" rel="noopener noreferrer" href={link} class={cls}>{title}</a>
		</div>
	</div>
{:else}
	<a target="_blank" rel="noopener noreferrer" href={link} class={cls}>{title}</a>
{/if}
