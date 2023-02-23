<script lang="ts">
	import Textarea from '$lib/forms/Textarea.svelte';
	import Label from '$lib/forms/Label.svelte';
	import { add } from '$lib/entries';
	import Button from '$lib/forms/Button.svelte';
	import type { Journal } from '$lib/types';
	import { goto } from '$app/navigation';

	const getDefaultValues = (): Journal => ({
		content: ''
	});

	let payload: Journal = getDefaultValues();

	async function onSubmit() {
		await add('journal', payload);
		await goto('/timeline');
	}
</script>

<h2 class="text-2xl font-bold mb-8">📕 Get it off your chest!</h2>

<form on:submit={onSubmit}>
	<div class="mb-6">
		<Label name="content">Write about your day (markdown allowed):</Label>
		<Textarea rows={21} bind:value={payload.content} name="content" />
	</div>
	<Button type="submit">Done</Button>
</form>
