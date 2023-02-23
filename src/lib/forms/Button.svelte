<script lang="ts">
	export let type: 'button' | 'submit' | 'reset' = 'button';
	export let onClick: () => void = () => {};
	export let color: 'danger' | 'primary' = 'primary';
</script>

<button
	class="py-2 px-4 text-white font-bold rounded"
	class:bg-indigo-500={color == 'primary'}
	class:bg-rose-500={color == 'danger'}
	on:click={onClick}
	{type}><slot /></button
>
