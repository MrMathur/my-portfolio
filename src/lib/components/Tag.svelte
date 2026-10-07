<script lang="ts">
	let { tag }: { tag: string } = $props();
</script>

<div
	class="hidden sm:inline-block my-2 mx-1 py-1.5 px-2 justify-center items-center rounded-full border-2 border-accent bg-surface"
>
	<p class="text-accent text-sm tracking-wide uppercase">{tag}</p>
</div>
