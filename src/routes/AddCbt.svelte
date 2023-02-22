<script lang="ts">
	import { set } from '../cbt';
	import { nanoid } from 'nanoid';
	import Textarea from '../lib/forms/Textarea.svelte';
	import Label from '../lib/forms/Label.svelte';
	import Button from '../lib/forms/Button.svelte';

	let situation = '';
	let thought = ' ';
	let emotion = '';
	let behaviour = '';
	let helpfulThought = '';
	let helpfulBehaviour = '';

	async function onSubmit() {
		await set({
			id: nanoid(),
			created: new Date(),
			lastUpdated: new Date(),
			situation,
			thought,
			emotion,
			behaviour,
			helpfulThought,
			helpfulBehaviour
		});

        situation = '';
        thought = ' ';
        emotion = '';
        behaviour = '';
        helpfulThought = '';
        helpfulBehaviour = '';
	}
</script>

<form on:submit={onSubmit}>
	<div class="mb-4">
		<Label name="situation">Situation</Label>
		<Textarea bind:value={situation} name="situation" />
	</div>
	<div class="mb-4">
		<Label name="thought">Thought</Label>
		<Textarea bind:value={thought} name="thought" />
	</div>
	<div class="mb-4">
		<Label name="emotion">Emotion</Label>
		<Textarea bind:value={emotion} name="emotion" />
	</div>
	<div class="mb-4">
		<Label name="behaviour">Behaviour</Label>
		<Textarea bind:value={behaviour} name="behaviour" />
	</div>
	<div class="mb-4">
		<Label name="helpfulThought">Helpful thought</Label>
		<Textarea bind:value={helpfulThought} name="helpfulThought" />
	</div>
	<div class="mb-4">
		<Label name="helpfulBehaviour">Helpful behaviour</Label>
		<Textarea bind:value={helpfulBehaviour} name="helpfulBehaviour" />
	</div>
    <Button type="submit">Save</Button>
</form>
