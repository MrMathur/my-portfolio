<script lang="ts">
	import { onMount } from 'svelte';
	import { nav } from '#lib/active-section.svelte.ts';
	import About from '#lib/components/About.svelte';
	import Contact from '#lib/components/Contact.svelte';
	import Experience from '#lib/components/Experience.svelte';
	import FixedSection from '#lib/components/FixedSection.svelte';
	import ProjectCard from '#lib/components/ProjectCard.svelte';
	import Publication from '#lib/components/Publication.svelte';
	import SectionTitle from '#lib/components/SectionTitle.svelte';
	import TextLink from '#lib/components/TextLink.svelte';

	let { data } = $props();

	// Scroll spy: highlight the nav item for the section crossing the middle of the viewport.
	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				for (const e of entries) if (e.isIntersecting) nav.active = e.target.id;
			},
			{ rootMargin: '-50% 0px -50% 0px' }
		);
		document.querySelectorAll('main section[id]').forEach((s) => observer.observe(s));
		return () => observer.disconnect();
	});
</script>

<svelte:head>
	<title>Arpit Mathur's Portfolio</title>
</svelte:head>

<div class="h-screen text-content flex justify-center">
	<FixedSection />
	<div class="flex container lg:px-8 pointer-events-none items-start gap-y-5 shrink-0 z-10">
		<div class="hidden lg:flex w-1/3 shrink-0 self-stretch"></div>

		<main id="main-content" class="flex pointer-events-auto w-full lg:w-2/3 lg:pb-24 flex-col items-start">
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
	</div>
</div>
