<script lang="ts">
	// Image carousel for project write-ups. Swipe or scroll on touch devices;
	// arrows, dots, or ←/→ keys elsewhere. Use from a .md file:
	//   <Carousel images={[{ src: '/images/x/a.png', alt: '...', caption: '...' }]} />
	type Slide = { src: string; alt: string; caption?: string };

	let { images, label = 'Image carousel' }: { images: Slide[]; label?: string } = $props();

	let track: HTMLDivElement;
	let current = $state(0);

	function go(i: number) {
		const next = Math.max(0, Math.min(images.length - 1, i));
		track.scrollTo({ left: next * track.clientWidth, behavior: 'smooth' });
	}

	function onScroll() {
		current = Math.round(track.scrollLeft / track.clientWidth);
	}

	function onKey(e: KeyboardEvent) {
		if (e.key === 'ArrowLeft') go(current - 1);
		if (e.key === 'ArrowRight') go(current + 1);
	}
</script>

<div class="not-prose my-10" role="region" aria-roledescription="carousel" aria-label={label}>
	<div class="relative">
		<!-- svelte-ignore a11y_no_noninteractive_tabindex, a11y_no_noninteractive_element_interactions -->
		<div
			bind:this={track}
			role="group"
			aria-label="Slides"
			onscroll={onScroll}
			onkeydown={onKey}
			tabindex="0"
			class="carousel-track flex overflow-x-auto snap-x snap-mandatory rounded-lg focus-visible:outline-2 focus-visible:outline-accent"
		>
			{#each images as img, i (img.src)}
				<figure
					class="w-full shrink-0 snap-center m-0"
					aria-roledescription="slide"
					aria-label="{i + 1} of {images.length}"
				>
					<img src={img.src} alt={img.alt} class="block w-full h-auto" loading="lazy" />
				</figure>
			{/each}
		</div>

		{#if images.length > 1}
			<button
				type="button"
				onclick={() => go(current - 1)}
				disabled={current === 0}
				aria-label="Previous image"
				class="carousel-btn left-2">‹</button
			>
			<button
				type="button"
				onclick={() => go(current + 1)}
				disabled={current === images.length - 1}
				aria-label="Next image"
				class="carousel-btn right-2">›</button
			>
		{/if}
	</div>

	{#if images[current]?.caption}
		<p class="mt-3 text-content-dim text-base italic leading-relaxed">{images[current].caption}</p>
	{/if}

	{#if images.length > 1}
		<div class="mt-3 flex justify-center gap-2">
			{#each images as img, i (img.src)}
				<button
					type="button"
					onclick={() => go(i)}
					aria-label="Go to image {i + 1}"
					aria-current={i === current}
					class="size-2.5 rounded-full transition-colors duration-150 {i === current
						? 'bg-accent'
						: 'bg-content-icon/40 hover:bg-content-icon'}"
				></button>
			{/each}
		</div>
	{/if}
</div>

<style>
	.carousel-track {
		scrollbar-width: none;
	}
	.carousel-track::-webkit-scrollbar {
		display: none;
	}
	.carousel-btn {
		position: absolute;
		top: 50%;
		translate: 0 -50%;
		width: 2.5rem;
		height: 2.5rem;
		border-radius: 9999px;
		background: rgb(15 23 42 / 0.75);
		color: var(--c-text);
		font-size: 1.5rem;
		line-height: 1;
		transition: opacity 150ms, background 150ms;
	}
	.carousel-btn:hover:not(:disabled) {
		background: rgb(15 23 42 / 0.95);
		color: var(--c-accent);
	}
	.carousel-btn:disabled {
		opacity: 0;
		pointer-events: none;
	}
</style>
