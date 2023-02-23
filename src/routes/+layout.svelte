<script>
	import Footer from '$lib/layout/Footer.svelte';
	import Header from '$lib/layout/Header.svelte';
	import { onAuthChange } from '../lib/auth';
	import Login from '$lib/auth/Login.svelte';
	import '../app.css';

	let loggedIn = false;

	onAuthChange((user) => {
		loggedIn = Boolean(user);
	});
</script>

<Header />

{#if loggedIn}
	<div class="max-w-screen-lg p-6 mx-auto">
		<slot />
	</div>
{:else}
	<Login />
{/if}

<Footer />
