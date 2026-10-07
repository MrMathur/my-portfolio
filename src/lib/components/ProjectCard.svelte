<script lang="ts">
	import type { ProjectMeta } from '#lib/content.ts';
	import Tag from './Tag.svelte';

	let { project }: { project: ProjectMeta } = $props();
</script>

<a
	href="/projects/{project.slug}/"
	class="group w-full flex flex-col sm:flex-row sm:items-start rounded-lg hover:bg-surface-deep bg-transparent py-3 px-4 sm:p-4 my-3 gap-y-3 sm:gap-x-5 transition-colors duration-150"
>
	<div class="tint rounded w-full sm:w-1/4 sm:shrink-0">
		<img
			src={project.thumbnail}
			alt="{project.title} project thumbnail"
			class="block w-full aspect-video"
			loading="lazy"
		/>
	</div>
	<div class="flex flex-col gap-y-2 min-w-0">
		<h3
			class="text-content-card text-lg font-semibold group-hover:text-accent group-hover:underline group-hover:underline-offset-2"
		>
			{project.title}
		</h3>
		<p class="text-content-dim text-base font-normal leading-relaxed">{project.summary}</p>
		<div class="flex flex-wrap items-start mt-1">
			{#each project.tags as tag (tag)}<Tag {tag} />{/each}
		</div>
	</div>
</a>
