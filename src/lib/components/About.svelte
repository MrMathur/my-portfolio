<script lang="ts">
	import Hero from './Hero.svelte';
</script>

{#snippet ext(href: string, text: string)}
	<a
		target="_blank"
		rel="noopener noreferrer"
		{href}
		class="text-content hover:underline hover:underline-offset-2 hover:text-accent font-semibold transition-colors duration-150"
		>{text}</a
	>
{/snippet}

<div class="flex w-full px-4 sm:gap-x-6">
	<div class="hidden sm:block sm:w-1/4 sm:shrink-0"></div>
	<div
		class="flex-1 min-w-0 flex flex-col self-stretch gap-y-2.5 text-content-dim text-xl font-normal"
	>
		<div class="block lg:hidden mb-20">
			<Hero />
		</div>
		<p>
			Hi, I'm Arpit! I'm a Ph.D. student at {@render ext('https://hcii.cmu.edu/', "Carnegie Mellon University's")}
			Human-Computer Interaction Institute, advised by {@render ext('https://perer.org/', 'Adam Perer')}. I'm looking
			for <span class="text-content font-semibold">research internships for Summer 2027</span>.
		</p>
		<p>
			I design and build human-centered AI systems for high-stakes domains like healthcare. My work combines
			Human-AI Collaboration, Data Visualization, and Applied Machine Learning. I build end-to-end prototypes, with my skillset spanning
			user research, interaction design, front-end development, and evaluation with real users.
		</p>
		<p>
			Before CMU, I earned a B.Des from {@render ext('https://www.iitg.ac.in/design/', 'IIT Guwahati')} and an M.S.
			in HCI from {@render ext('https://mshci.gatech.edu/', 'Georgia Tech')}. I worked as a UX Designer at
			{@render ext('https://www.mathworks.com/', 'MathWorks')} on MATLAB and Simulink.</p>
			<p> Outside research, I like making {@render ext('https://itch.io/profile/mrmathur', 'games')} and am an avid
			{@render ext('https://en.wikipedia.org/wiki/Arsenal_F.C.', 'Arsenal fan')}.
		</p>
	</div>
</div>
