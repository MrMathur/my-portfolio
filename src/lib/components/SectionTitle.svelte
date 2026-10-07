<script lang="ts">
	let { title }: { title: string } = $props();
</script>

<div class="flex w-full px-4 sm:px-0 mb-4">
	<div class="w-0 sm:w-1/4"></div>
	<h2 class="w-full sm:w-3/4 text-content-dim text-xs font-normal tracking-widest uppercase">
		• {title}
	</h2>
</div>
