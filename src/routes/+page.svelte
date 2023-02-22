<script>
	import { onAuthChange } from "../auth";
	import AddCbt from "./AddCbt.svelte";
	import CbtItems from "./CbtItems.svelte";
    import Header from "./Header.svelte";
    import Login from "./Login.svelte";

    let loggedIn = false;

    onAuthChange((user) => {
        loggedIn = Boolean(user);
    })
</script>

<Header/>

{#if loggedIn}
    <AddCbt/>
    <CbtItems/>
{:else}
    <Login/>
{/if}