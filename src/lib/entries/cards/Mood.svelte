<script lang="ts">
	import type { Mood } from '$lib/types';

	export let payload: Mood;
</script>

<p class="text-6xl">{payload.mood}</p>
