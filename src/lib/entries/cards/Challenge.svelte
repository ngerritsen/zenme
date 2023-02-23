<script lang="ts">
	import type { Challenge } from '$lib/types';

	export let payload: Challenge;
</script>

<div class="mb-3">
	<h3 class="font-bold">Situation</h3>
	<p>{payload.situation}</p>
</div>
<div class="mb-3">
	<h3 class="font-bold">Thoughts</h3>
	<p>{payload.thought}</p>
</div>
<div class="mb-3">
	<h3 class="font-bold">Emotion</h3>
	<p>{payload.emotion}</p>
</div>
<div class="mb-3">
	<h3 class="font-bold">Behaviour</h3>
	<p>{payload.behaviour}</p>
</div>
<div class="mb-3">
	<h3 class="font-bold">Helpful thought</h3>
	<p>{payload.helpfulThought}</p>
</div>
<div class="mb-3">
	<h3 class="font-bold">Helpful behaviour</h3>
	<p>{payload.helpfulBehaviour}</p>
</div>
