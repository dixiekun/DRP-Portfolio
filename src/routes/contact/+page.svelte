<script>
    import { SliceZone } from '@prismicio/svelte';
    import * as prismicH from '@prismicio/helpers';
    import * as components from '$lib/slices';
    import { dev } from '$app/environment';
    import {fly} from 'svelte/transition'
    import {quintInOut} from 'svelte/easing'

    export let data
    const {document} = data
</script>

<svelte:head>
    <title>{prismicH.asText(document?.data?.seo_title)}</title>
    <meta name="description" content={prismicH.asText(document?.data?.seo_meta_description)} />
    <meta
        name="robots"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
    />
</svelte:head>


<main data-sveltekit-prefetch
    in:fly={{y: -50, duration: 250, delay: 200, easing: quintInOut}}
    >
    <SliceZone slices={document?.data?.body} {components} {dev} />
</main>
