<script lang="ts">
	import Button from '$lib/forms/Button.svelte';
    import { onDestroy } from 'svelte';
	import { getAll, deleteItem } from '../cbt';
	import type { CbtItem } from '../types';

	let items: CbtItem[] = [];

	const unsubscribe = getAll((newItems) => {
		items = newItems;
	});

	onDestroy(unsubscribe);
</script>

{#each items as item}
	<div class="mt-5 border border-gray-700 rounded p-4">
        <p class="mb-4 text-gray-400">Created: {item.created.toLocaleString()}</p>
        <h3 class="text-gray-500 font-bold">Situation:</h3>
		<p class="mb-2">{item.situation}</p>
        <h3 class="text-gray-500 font-bold">Thought</h3>
		<p class="mb-2">{item.thought}</p>
        <h3 class="text-gray-500 font-bold">Emotion</h3>
		<p class="mb-2">{item.emotion}</p>
        <h3 class="text-gray-500 font-bold">Behaviour</h3>
		<p class="mb-2">{item.behaviour}</p>
        <h3 class="text-gray-500 font-bold">Helpful thought</h3>
		<p class="mb-2">{item.helpfulThought}</p>
        <h3 class="text-gray-500 font-bold">Helpful behaviour</h3>
		<p class="mb-4">{item.helpfulBehaviour}</p>
        <Button color="danger" onClick={() => deleteItem(item.id)}>Delete</Button>
	</div>
{/each}
