<script lang="ts">
	import { onDestroy } from 'svelte';
	import { getAll } from '$lib/entries';
	import type { Entry } from '$lib/types';
	import entryTypes from '$lib/entryTypes';
	import { groupEntries } from '$lib/helpers';
	import trashCanSolid from '$lib/assets/trash-can-solid.svg';
	import { remove } from '$lib/entries';

	let entries: Entry[] = [];
	let groupedEntries = groupEntries(entries);

	$: groupedEntries = groupEntries(entries);

	const unsubscribe = getAll((newEntries) => {
		entries = newEntries;
	});

	onDestroy(unsubscribe);
</script>

{#each groupedEntries as year}
	<h2 class="text-6xl font-bold text-gray-600 dark:text-gray-600">{year.value}</h2>
	{#each year.entries as month}
		<h3 class="text-4xl font-bold text-gray-800 dark:text-gray-400">{month.value}</h3>
		{#each month.entries as day}
			<h3 class="text-3xl font-bold">{day.value}</h3>
			<div class="flex gap-x-3 items-start flex-wrap">
				{#each day.entries as entry}
					{@const Card = entryTypes[entry.type].card}
					<div class="card mt-5 rounded p-6 bg-gray-100 dark:bg-gray-800 relative">
						<button
							class="card__actions absolute right-2 top-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 hover:dark:bg-gray-600 p-2 rounded"
							on:click={() => remove(entry.id)}
						>
							<img src={trashCanSolid} class="w-3" alt="Remove" />
						</button>
						<Card payload={entry.payload} />
					</div>
				{/each}
			</div>
		{/each}
	{/each}
{/each}

<style>
	.card__actions {
		display: none;
	}

	.card:hover .card__actions,
	.card__actions:hover {
		display: block;
	}
</style>
