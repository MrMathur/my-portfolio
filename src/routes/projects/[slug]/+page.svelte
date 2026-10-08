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

<main id="main-content" class="text-content w-full mx-auto max-w-3xl lg:max-w-none px-4 sm:px-6 lg:px-4 pt-24 lg:pt-[min(12rem,19.2vh)] pb-24">
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

	{#if meta.cover}
		<div class="mt-10 rounded-lg overflow-hidden">
			{#if /\.(mp4|webm|mov)$/i.test(meta.cover)}
				<video src={meta.cover} class="block w-full h-auto" autoplay muted loop playsinline></video>
			{:else}
				<img src={meta.cover} alt="{meta.title} cover image" class="block w-full h-auto" />
			{/if}
		</div>
	{/if}

	<article
		class="prose prose-invert prose-lg mt-12 max-w-none prose-a:text-accent prose-headings:text-content prose-p:text-content-dim prose-li:text-content-dim prose-strong:text-content"
	>
		<Body />
	</article>
</main>
