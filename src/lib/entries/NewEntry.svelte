<script>
	import entryTypes from '$lib/entryTypes';
</script>

<p class="text-xl font-medium mb-4">I want to...</p>

<div class="grid grid-cols-2 gap-3">
	{#each Object.values(entryTypes) as entry}
		<a
			href={`/new/${entry.type}`}
			class="w-full bg-gray-200 font-bold p-3 rounded hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
			>{entry.title}</a
		>
	{/each}
</div>
