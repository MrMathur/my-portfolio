<script lang="ts">
	import Hero from './Hero.svelte';
	import NavLink from './NavLink.svelte';
	import Contact from './Contact.svelte';

	const sections = ['about', 'projects', 'publications', 'experience'];
</script>

<div class="hidden lg:flex fixed container lg:px-8 h-full items-start gap-y-5 shrink-0">
	<div class="flex w-1/3 pt-[min(12rem,19.2vh)] pb-[min(6rem,9.6vh)] gap-y-10 overflow-y-auto flex-col justify-between items-start shrink-0 self-stretch">
		<div class="flex flex-col items-start gap-y-[min(6rem,9.6vh)] self-stretch">
			<Hero />
			<nav aria-label="Main navigation">
				<div class="flex flex-col self-stretch gap-y-5 short:gap-y-4">
					{#each sections as section}<NavLink {section} />{/each}
				</div>
			</nav>
		</div>
		<div class="w-full short:hidden"><Contact /></div>
	</div>
</div>
