<script>
    import * as prismicH from '@prismicio/helpers';
    import {page} from '$app/stores'
    import Project from '../components/Project.svelte';
    import {fly} from 'svelte/transition'
    import {quintInOut} from 'svelte/easing'

      
    export let slice;

    $: projects = $page.data.projects

</script>
<section class="projects" in:fly={{y: -50, duration: 250, delay: 200, easing: quintInOut}}>
    <div class="container project-wrapper">
        <div class="heading">
            <h2>{@html prismicH.asText(slice.primary.title)}</h2>
            <p class="sub-heading">{slice.primary.description}</p>
        </div>
        {#each projects as project}
            <Project {project} />
        {/each}
        
        
    </div>
</section>

<style>
    .project-wrapper {
        background-color: white;
        padding: 4rem 3.375rem;
        border-radius: 1rem;
        border: 1px solid #F5F5F5;
        margin-bottom: 3rem;
        display: grid;
        gap: 4rem;
        box-sizing: border-box;
        overflow: hidden;
    }

    h2 {
        font-size: 32px;
        font-weight: 700;
        text-transform: uppercase;
        margin-top: 0;
        position: relative;
    }

    h2::before {
        content: ' ';
        position: absolute;
        width: 4.313rem;
        height: 6px;
        background: var(--primary-color);
        top: -8px;
    }
        
    p.sub-heading {
        font-size: 1rem;
        margin: 0;
    }
</style>

