<script>
	import logo from '$lib/assets/logo.svg';
	import { logout } from '$lib/auth';

	export let loggedIn = false;
</script>

<header class="max-w-screen-lg mx-auto p-4 md:p-6 flex justify-between items-center">
	<a href="/" class="flex items-center">
		<img src={logo} alt="Zenme logo" aria-hidden class="w-8 top-1 relative mr-2" />
		<h1 class="text-3xl font-bold text-gray-900 dark:text-gray-100">Zenme</h1>
	</a>

	{#if loggedIn}
		<div class="flex gap-6 text-gray-700 dark:text-gray-300 font-bold">
			<a href="/timeline" class="hover:underline">Timeline</a>
			<button class="hover:underline" on:click={logout}>Logout</button>
		</div>
	{/if}
</header>
