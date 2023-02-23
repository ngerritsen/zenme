<script lang="ts">
	import type { Journal } from '$lib/types';
	import SvelteMarkdown from 'svelte-markdown';

	export let payload: Journal;
</script>

<article class="prose prose-p:text-gray-900 dark:prose-p:text-gray-50">
	<SvelteMarkdown source={payload.content} />
</article>
