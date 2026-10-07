<script lang="ts">
	import type { Publication } from '#lib/data/publications.ts';
	import Tag from './Tag.svelte';

	let { pub }: { pub: Publication } = $props();
</script>

<a
	href={pub.link}
	target="_blank"
	rel="noopener noreferrer"
	class="group w-full flex flex-col sm:flex-row sm:items-start rounded-lg hover:bg-surface-deep bg-transparent py-3 px-4 sm:p-4 my-3 gap-y-1 sm:gap-x-6 transition-colors duration-150"
>
	<div class="sm:w-1/4 sm:shrink-0 sm:text-right sm:pt-0.5">
		<p class="text-content-dim text-xs font-normal tracking-widest uppercase">{pub.conference}</p>
	</div>
	<div class="flex-1 flex flex-col gap-y-2 min-w-0">
		<h3
			class="text-content-card text-base font-semibold group-hover:text-accent group-hover:underline group-hover:underline-offset-2"
		>
			{pub.title}
		</h3>
		<p class="text-content-dim text-sm font-normal leading-relaxed">
			{#each pub.authors as author, i}<span class={author === 'Arpit Mathur' ? 'font-semibold' : ''}
					>{author}{i === pub.authors.length - 1 ? '' : ', '}</span
				>{/each}
		</p>
		<div class="flex flex-wrap items-start mt-1">
			{#each pub.tags as tag (tag)}<Tag {tag} />{/each}
		</div>
	</div>
</a>
