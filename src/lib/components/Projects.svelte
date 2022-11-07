<script>
    import {getContext} from 'svelte'
    import Project from './Project.svelte';
    
    const projects = getContext('projects-data')
</script>

{#each projects as project }
    <Project projectSlug={project.slug} title={project.title} description={project.description} thumbnail={project.slideDeckImages[0].url} />
{/each}