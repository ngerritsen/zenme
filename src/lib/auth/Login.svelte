<script lang="ts">
	import { login } from '$lib/auth';
	import Input from '$lib/forms/Input.svelte';
	import Button from '$lib/forms/Button.svelte';
	import Label from '$lib/forms/Label.svelte';

	let email = '';
	let password = '';
	let error: Error | null = null;

	async function onLogin() {
		try {
			await login(email, password);
		} catch (err) {
			error = err as Error;
		}
	}
</script>

<form on:submit={onLogin} class="max-w-prose mx-auto p-8">
	<div class="mb-4">
		<Label name="email">Email</Label>
		<Input bind:value={email} type="email" name="email" />
	</div>
	<div class="mb-6">
		<Label name="password">Password</Label>
		<Input bind:value={password} type="password" name="password" />
	</div>
	<Button type="submit">Login</Button>
	{#if error !== null}
		<p class="text-red-700 mt-3">
			{error.message}
		</p>
	{/if}
</form>
