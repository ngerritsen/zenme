<script lang="ts">
	import { goto } from '$app/navigation';
	import { add } from '$lib/entries';

	async function onSubmit(mood: string) {
		await add('mood', { mood });
		await goto('/timeline');
	}

	let moods = ['😃', '🥰', '🙂', '😐', '😫', '😕', '😢', '😭', '😨', '😡', '🤒'];
</script>

<h2 class="text-2xl font-bold mb-8">😶 So, how are you really feeling?</h2>

<div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-x-3 mb-6">
	{#each moods as mood}
		<button
			class="mb-4 p-8 text-2xl text-center rounded bg-gray-300 hover:bg-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
			on:click={() => onSubmit(mood)}
		>
			{mood}
		</button>
	{/each}
</div>
