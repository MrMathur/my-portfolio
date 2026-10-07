<script lang="ts">
	import Tag from '#lib/components/Tag.svelte';

	let { data } = $props();
	let meta = $derived(data.meta);
	let Body = $derived(data.component);
</script>

<svelte:head>
	<title>{meta.title} · Arpit Mathur</title>
	<meta name="description" content={meta.summary} />
</svelte:head>

<main id="main-content" class="text-content mx-auto max-w-3xl px-4 sm:px-6 pt-24 pb-24">
	<a
		href="/#projects"
		class="text-content-dim text-xs tracking-widest uppercase hover:text-accent transition-colors duration-150"
	>
		← All projects
	</a>

	<h1 class="mt-8 text-content text-4xl sm:text-5xl font-semibold leading-tight">{meta.title}</h1>
	<p class="mt-4 text-content-dim text-xl leading-relaxed">{meta.summary}</p>

	<div class="flex flex-wrap items-center -mx-1 mt-4">
		{#each meta.tags as tag (tag)}<Tag {tag} />{/each}
	</div>

	{#if meta.link}
		<a
			href={meta.link}
			target="_blank"
			rel="noopener noreferrer"
			class="inline-block mt-6 text-content text-lg underline underline-offset-2 hover:text-accent font-semibold transition-colors duration-150"
		>
			→ {meta.linkLabel ?? 'View project'}
		</a>
	{/if}

	<img src={meta.thumbnail} alt="{meta.title} project thumbnail" class="mt-10 w-full aspect-video rounded-lg" />

	<article
		class="prose prose-invert prose-lg mt-12 max-w-none prose-a:text-accent prose-headings:text-content prose-p:text-content-dim prose-li:text-content-dim prose-strong:text-content"
	>
		<Body />
	</article>
</main>
