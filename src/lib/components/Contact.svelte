<script lang="ts">
	import Gmail from './icons/Gmail.svelte';
	import LinkedIn from './icons/LinkedIn.svelte';
	import Github from './icons/Github.svelte';
	import GoogleScholar from './icons/GoogleScholar.svelte';
</script>

<div class="flex flex-col justify-center items-start gap-y-3 self-stretch w-full mt-10 lg:mt-0">
	<h2 class="text-accent mb-2 lg:mb-0 text-center lg:text-left w-full text-xl font-normal leading-none">
		Get in touch!
	</h2>
	<div class="flex justify-between lg:justify-normal w-full p-0.5 items-start gap-x-3">
		<Gmail />
		<LinkedIn />
		<Github />
		<GoogleScholar />
	</div>
</div>
