<script>
    import {fly, slide} from 'svelte/transition'
    import {quintInOut} from 'svelte/easing'
    import SlideDeck from '../../lib/components/SlideDeck.svelte'
    import { setContext } from 'svelte';


    export let data
    const project = data.project[0]

    setContext('project-data', project)

</script>


<main data-sveltekit-prefetch
    in:fly={{y: -50, duration: 250, delay: 200, easing: quintInOut}}
    out:slide={{y: -50, duration: 250}} 
>
    <SlideDeck/>
       
</main>


