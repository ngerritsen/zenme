<script lang="ts">
	import type { Quote } from '$lib/types';

	export let payload: Quote;
</script>

<p class="text-2xl font-serif">&ldquo;{payload.content}&rdquo;</p>
