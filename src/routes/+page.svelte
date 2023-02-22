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
    <div class="max-w-screen-xl px-4 mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <h2 class="text-xl font-bold mb-3 text-gray-300">💭 What's on your mind?</h2>
                <AddCbt/>
            </div>
            <div>
                <h2 class="text-xl font-bold mb-3 text-gray-300">🪵 Your Log</h2>
                <CbtItems/>
            </div>
        </div>
    </div>
{:else}
    <div class="max-w-screen-sm px-4 mx-auto">
        <Login/>
    </div>
{/if}