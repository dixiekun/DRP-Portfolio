<script>
    import {getContext} from 'svelte'

    const project = getContext('project-data')
    const slideImages = project.slideDeckImages.slice(1)
</script>
<section class="fullpage-presentation">
    <div class="container">
        <article>
            {#each slideImages as slideImage}
                <img src={slideImage.url} alt={`${project.title}${slideImage.fileName}`}>
            {/each}
        </article>
    </div>
</section>


<style>
    img {
        max-width: 100%;
    }
</style>