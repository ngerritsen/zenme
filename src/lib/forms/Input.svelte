<script lang="ts">
    export let type: string = "text";
    export let name: string;
    export let value: string;

    function setType(node: HTMLInputElement) {
        node.type = type;
    }
</script>

<input
    class="block w-full p-2 border border-slate-400 rounded"
    bind:value
    id={name}
    use:setType
/>