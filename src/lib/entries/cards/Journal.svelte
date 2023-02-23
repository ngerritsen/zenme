<script lang="ts">
	import type { Journal } from '$lib/types';

	export let payload: Journal;
</script>

<p>{payload.content}</p>
