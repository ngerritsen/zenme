<script lang="ts">
	import Textarea from '$lib/forms/Textarea.svelte';
	import Label from '$lib/forms/Label.svelte';
	import { add } from '$lib/entries';
	import Button from '$lib/forms/Button.svelte';
	import type { Challenge } from '$lib/types';
	import { goto } from '$app/navigation';

	const getDefaultValues = (): Challenge => ({
		situation: '',
		thought: '',
		emotion: '',
		behaviour: '',
		helpfulThought: '',
		helpfulBehaviour: ''
	});

	let payload: Challenge = getDefaultValues();

	async function onSubmit() {
		await add('challenge', payload);
		await goto('/timeline');
	}
</script>

<h2 class="text-2xl font-bold mb-8">⚔️ Let's conquer these negative thoughts!</h2>

<form on:submit={onSubmit}>
	<div class="mb-4">
		<Label name="situation">Situation, what is happening?</Label>
		<Textarea bind:value={payload.situation} name="situation" />
	</div>
	<div class="mb-4">
		<Label name="thought">Thoughts, what thoughts emerge?</Label>
		<Textarea bind:value={payload.thought} name="thought" />
	</div>
	<div class="mb-4">
		<Label name="emotion">Emotions, what are you feeling?</Label>
		<Textarea bind:value={payload.emotion} name="emotion" />
	</div>
	<div class="mb-4">
		<Label name="behaviour">Behaviour, how are you responding?</Label>
		<Textarea bind:value={payload.behaviour} name="behaviour" />
	</div>
	<div class="mb-4">
		<Label name="helpfulThought">What would be helpful thoughts?</Label>
		<Textarea bind:value={payload.helpfulThought} name="helpfulThought" />
	</div>
	<div class="mb-6">
		<Label name="helpfulBehaviour">What would be helpful behaviour?</Label>
		<Textarea bind:value={payload.helpfulBehaviour} name="helpfulBehaviour" />
	</div>
	<Button type="submit">Done!</Button>
</form>
