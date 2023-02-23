<script lang="ts">
    export let type: string = "text";
    export let name: string;
    export let value: string;

    function setType(node: HTMLInputElement) {
        node.type = type;
    }
</script>

<input
    class="block w-full p-2 rounded bg-gray-200 dark:bg-gray-700"
    bind:value
    id={name}
    use:setType
/>