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

<div class="flex justify-center">
	<div class="w-0 lg:w-1/4"></div>
	<div
		class="w-full px-4 sm:px-0 sm:w-3/4 flex flex-col self-stretch gap-y-2.5 text-content-dim text-xl font-normal"
	>
		<div class="block lg:hidden mb-20">
			<Hero />
		</div>
		<p>
			As a Ph.D. student at {@render ext('https://hcii.cmu.edu/', "Carnegie Mellon University's")}
			Human-Computer Interaction Institute, I design and build human-centered AI systems for high-stakes
			domains, like healthcare. My work sits at the intersection of Human-AI Collaboration, Data Visualization,
			and Applied Machine Learning, with a strong emphasis on turning research ideas into working, usable tools.
		</p>
		<p>
			I build end-to-end prototypes that help people reason with complex AI outputs, bridge expertise gaps
			between experts and non-experts, and support real decision-making. Across my projects, I work hands-on
			across the stack, from interaction design and front-end systems to model integration and evaluation with
			real users.
		</p>
		<p>
			Before my Ph.D., I got my B.Des from the {@render ext(
				'https://www.iitg.ac.in/design/',
				'Indian Institute of Technology, Guwahati'
			)} and earned an M.S. in HCI from the {@render ext(
				'https://mshci.gatech.edu/',
				'Georgia Institute of Technology'
			)}. Through these experiences, I developed a strong foundation in applied HCI and systems thinking. I’ve
			also worked as a UX Designer at {@render ext('https://www.mathworks.com/', 'MathWorks')}, improving
			Model-Based Systems Engineering workflows for MATLAB and Simulink, which shaped how I think about designing
			tools for technical, expert users at scale.
		</p>
		<p>
			Outside of academia, I enjoy video game design and development. You can find some of my {@render ext(
				'https://itch.io/profile/mrmathur',
				'Gamejam Submissions here'
			)}. I love playing and watching football, and I'm an avid {@render ext(
				'https://en.wikipedia.org/wiki/Arsenal_F.C.',
				'Arsenal fan'
			)}.
		</p>
	</div>
</div>
