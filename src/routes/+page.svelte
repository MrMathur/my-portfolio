<script lang="ts">
	import { onMount } from 'svelte';
	import { nav } from '#lib/active-section.svelte.ts';
	import About from '#lib/components/About.svelte';
	import Contact from '#lib/components/Contact.svelte';
	import Experience from '#lib/components/Experience.svelte';
	import ProjectCard from '#lib/components/ProjectCard.svelte';
	import Publication from '#lib/components/Publication.svelte';
	import SectionTitle from '#lib/components/SectionTitle.svelte';
	import TextLink from '#lib/components/TextLink.svelte';

	let { data } = $props();

	// Scroll spy: highlight the last section whose top has passed the upper third of the viewport.
	// The first section wins at the top of the page; the last one wins at the bottom.
	onMount(() => {
		const sections = [...document.querySelectorAll<HTMLElement>('main section[id]')];
		const update = () => {
			const atBottom = innerHeight + scrollY >= document.documentElement.scrollHeight - 2;
			if (atBottom) return (nav.active = sections.at(-1)!.id);
			let active = sections[0].id;
			for (const s of sections) if (s.getBoundingClientRect().top <= innerHeight / 3) active = s.id;
			nav.active = active;
		};
		update();
		addEventListener('scroll', update, { passive: true });
		addEventListener('resize', update);
		return () => {
			removeEventListener('scroll', update);
			removeEventListener('resize', update);
		};
	});
</script>

<svelte:head>
	<title>Arpit Mathur's Portfolio</title>
</svelte:head>

<main id="main-content" class="flex w-full lg:pb-24 flex-col items-start">
	<section aria-label="About" class="pt-48 lg:pt-[min(12rem,19.2vh)]" id="about">
		<About />
	</section>

	<section aria-label="Projects" class="pt-24" id="projects">
		<SectionTitle title="projects" />
		{#each data.projects as project (project.slug)}
			<ProjectCard {project} />
		{/each}
	</section>

	<section aria-label="Publications" class="pt-24" id="publications">
		<SectionTitle title="publications" />
		{#each data.publications as pub (pub.title)}
			<Publication {pub} />
		{/each}
	</section>

	<section aria-label="Experience" class="pt-24 md:min-h-screen" id="experience">
		<SectionTitle title="experience" />
		{#each data.experience as job (job.company)}
			<Experience {job} />
		{/each}
		<TextLink title="→ View Full CV" link="/arpitmathurresume.pdf" block />
	</section>

	<div class="flex w-full lg:hidden lg:short:flex mb-10">
		<Contact />
	</div>
</main>
