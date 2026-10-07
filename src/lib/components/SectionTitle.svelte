<script lang="ts">
	let { title }: { title: string } = $props();
</script>

<div class="flex w-full px-4 mb-4 sm:gap-x-6">
	<div class="hidden sm:block sm:w-1/4 sm:shrink-0"></div>
	<h2 class="flex-1 min-w-0 text-content-dim text-xs font-normal tracking-widest uppercase">
		{title}
	</h2>
</div>
