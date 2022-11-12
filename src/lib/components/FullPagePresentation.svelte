<script>
    export let project
</script>
<section class="fullpage-presentation">
    <div class="container">
        <article>
            {#each project.slideDeckImages.slice(1) as slideImage}
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