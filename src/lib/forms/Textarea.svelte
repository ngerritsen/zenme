<script lang="ts">
    export let name: string;
    export let value: string;
    export let rows: number = 2;
</script>

<textarea
    {rows}
    class="block w-full p-2 rounded bg-gray-200 dark:bg-gray-700"
    bind:value
    id={name}
/>