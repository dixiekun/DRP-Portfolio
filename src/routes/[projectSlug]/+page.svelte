<script>
    import {fly, slide} from 'svelte/transition'
    import {quintInOut} from 'svelte/easing'
    import SlideDeck from '../../lib/components/SlideDeck.svelte'
    import { setContext } from 'svelte';


    export let data
    const project = data.project[0]

    setContext('project-data', project)

</script>

<svelte:head>
    <title>{project.title}</title>
    <meta name="description" content={project.description} />
    <meta
        name="robots"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
    />
</svelte:head>

<main data-sveltekit-prefetch
    in:fly={{y: -50, duration: 250, delay: 200, easing: quintInOut}}
    out:slide={{y: -50, duration: 250}} 
>
    <SlideDeck/>
       
</main>


