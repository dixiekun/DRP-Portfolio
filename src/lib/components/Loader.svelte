<script>
    import { fly } from 'svelte/transition';


</script>

<div transition:fly class="loader">

</div>

<style>
    .loader {
        position: fixed;
        inset: 0;
        width: 100vw;
        height: 100vh;
        display: grid;
        place-items: center;
        background-color: #fafafa;
        z-index: 9999;
    }
</style>