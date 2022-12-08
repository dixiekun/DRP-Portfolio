<script>
    import { SliceZone } from '@prismicio/svelte';
    import { dev } from '$app/environment';
    import * as prismicH from '@prismicio/helpers';
    import * as components from '$lib/slices';
    

    export let data

  
  $: ({document} = data)

</script>
<svelte:head>
    <title>{prismicH.asText(document?.data?.seo_title)}</title>
    <meta name="description" content={prismicH.asText(document?.data?.seo_meta_description)} />
    <meta
        name="robots"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
    />
</svelte:head>

<main data-sveltekit-prefetch>
    <SliceZone slices={document?.data?.body} {components} {dev} />
</main>
