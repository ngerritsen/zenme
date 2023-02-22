<script lang="ts">
	export let type: 'button' | 'submit' | 'reset' = 'button';
	export let onClick: () => void = () => {};
	export let color: 'danger' | 'primary' = 'primary';
</script>

<button
	class="py-2 px-3 text-white font-bold rounded"
	class:bg-blue-600={color == 'primary'}
	class:bg-red-600={color == 'danger'}
	on:click={onClick}
	{type}><slot /></button
>
