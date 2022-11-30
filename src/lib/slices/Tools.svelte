<script> 
    import * as prismicH from '@prismicio/helpers';
    export let slice;
    
</script>

<section class="Tools">
    <div class="container">
        <h2>{prismicH.asText(slice.primary.title)}</h2>
        <ul>
            {#each slice.items as tool }
                <li>{tool.tool_options}</li>
            {/each}
        </ul>
    </div>
</section>


<style>
    ul {
        display: flex;
        flex-wrap: wrap;
        gap: var(--space-xs);
        margin: 0;
        padding: 0;
    }

    li {
        list-style: none;
        width: fit-content;
        letter-spacing: 2px;
        padding: 0.75rem 1.25rem;
        border: 2px solid #b5b7b9;
        font-size: .875rem;
        line-height: 1rem;
        border-radius: 2rem;
        color: #2b3036;
    }
</style>