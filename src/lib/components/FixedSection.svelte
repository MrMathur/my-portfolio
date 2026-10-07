<script lang="ts">
	import Hero from './Hero.svelte';
	import NavLink from './NavLink.svelte';
	import Contact from './Contact.svelte';

	const sections = ['about', 'projects', 'publications', 'experience'];
</script>

<div class="hidden lg:flex fixed container h-full items-start gap-y-5 shrink-0">
	<div class="flex w-1/3 pt-48 pb-24 flex-col justify-between items-start shrink-0 self-stretch">
		<div class="flex flex-col items-start gap-y-24 self-stretch">
			<Hero />
			<nav aria-label="Main navigation">
				<div class="flex flex-col self-stretch gap-y-5">
					{#each sections as section}<NavLink {section} />{/each}
				</div>
			</nav>
		</div>
		<Contact />
	</div>
</div>
