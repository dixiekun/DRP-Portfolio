<script>
    import {fly, slide} from 'svelte/transition'
    import {quintInOut} from 'svelte/easing'
    import SlideDeck from '../../lib/components/SlideDeck.svelte'
  import FullPagePresentation from '../../lib/components/FullPagePresentation.svelte';
  import Hero from '../../lib/components/Hero.svelte';
  import ProjectNavigator from './ProjectNavigator.svelte';

    export let data
    $: ({projects, project} = data)
 

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

{#if project.isFullPagePresentation }
    <Hero>
        <img class="hero-bg" slot="hero-bg" src={project.slideDeckImages[0].url} alt={`${project.title} thumbnail`}>
        <h1 slot="hero-title">{project.title}</h1>
        <p slot="hero-description">
            {project.description}
        </p>
    </Hero>
    <FullPagePresentation project={project}/>
{:else}
    <SlideDeck project={project}/>
{/if}
<ProjectNavigator projectPage={project} projectsList={projects} />
</main>


<style>
    img.hero-bg {
        position: absolute;
        object-fit: cover;
        height: 100%;
        width: 100%;
        inset: 0;
        z-index: -1;
    }

    h1, p {
        margin: 0;
    }
</style>