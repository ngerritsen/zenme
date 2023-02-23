<script lang="ts">
	import Textarea from '$lib/forms/Textarea.svelte';
	import Label from '$lib/forms/Label.svelte';
	import { add } from '$lib/entries';
	import Button from '$lib/forms/Button.svelte';
	import type { Quote } from '$lib/types';
	import { goto } from '$app/navigation';

	const getDefaultValues = (): Quote => ({
		content: ''
	});

	let payload: Quote = getDefaultValues();

	async function onSubmit() {
		await add('quote', payload);
		await goto('/timeline');
	}
</script>

<h2 class="text-2xl font-bold mb-8">🪧 Inspire your future self!</h2>

<form on:submit={onSubmit}>
	<div class="mb-6">
		<Label name="content">Write a quote:</Label>
		<Textarea bind:value={payload.content} name="content" />
	</div>
	<Button type="submit">Done!</Button>
</form>
