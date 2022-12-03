<script>
    import { fly } from 'svelte/transition';
    import { onMount } from 'svelte';
    import { tweened } from 'svelte/motion';
    import { cubicOut } from 'svelte/easing';
    import {loading, barProgress} from '$lib/stores/loading';
    import {navigating} from '$app/stores'

    $: $loading = !!$navigating


    const progress = tweened(0, {
        duration: 200,
        easing: cubicOut
    });
    
    onMount(() => {
        if ($loading ) {
            progress.set(1);
        }
    });


    $: if ($barProgress > 0) {
        progress.set($barProgress);
    }

    

</script>

<div transition:fly class="loader">
    <div class="progress-bar">
        <div class="progress-sliver" style={`--width: ${$progress * 100}%`} />
    </div>
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

    .progress-bar {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 0.25rem;
    }
    .progress-sliver {
        width: var(--width);
        background-color: var(--primary-color);
        height: 100%;
    }
</style>