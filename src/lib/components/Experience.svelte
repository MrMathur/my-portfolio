<script lang="ts">
	import type { Job } from '#lib/data/experience.ts';

	let { job }: { job: Job } = $props();
</script>

<div class="my-10">
	<div class="flex w-full px-4 mb-3 sm:gap-x-6">
		<div class="hidden sm:block sm:w-1/4 sm:shrink-0"></div>
		<h3 class="flex-1 min-w-0 text-content text-base font-semibold">{job.company}</h3>
	</div>
	{#each job.roles as role}
		<div class="flex flex-col sm:flex-row sm:items-start w-full px-4 mt-4 gap-y-1 sm:gap-x-6">
			<div class="sm:w-1/4 sm:shrink-0 sm:text-right sm:pt-0.5">
				<p class="text-content-dim text-xs font-normal tracking-widest uppercase">{role.year}</p>
			</div>
			<div class="flex-1 flex flex-col gap-y-1.5 min-w-0">
				<h4 class="text-content-dim text-sm font-semibold">{role.role}</h4>
				<p class="text-content-dim text-base font-normal leading-relaxed">{role.description}</p>
			</div>
		</div>
	{/each}
</div>
