<script lang="ts">
    export let type: string = "text";
    export let name: string;
    export let value: string;
</script>

<textarea
    class="block w-full p-2 rounded bg-gray-700"
    bind:value
    id={name}
/>