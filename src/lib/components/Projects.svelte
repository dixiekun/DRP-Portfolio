<script>
    import Project from './Project.svelte';
    
    export let projects

</script>

{#each projects as project }
    <Project projectSlug={project.slug} title={project.title} description={project.description} thumbnail={project.slideDeckImages[0].url} />
{/each}