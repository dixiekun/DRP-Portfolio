<script>
    import { SliceZone } from '@prismicio/svelte';
    import { dev } from '$app/environment';
    import * as prismicH from '@prismicio/helpers';
    import * as components from '$lib/slices';
    import {fly, slide} from 'svelte/transition'
    import {quintInOut} from 'svelte/easing'
    import ProjectNavigator from './ProjectNavigator.svelte';

  export let data

  $: ({document, projects} = data)


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
    <ProjectNavigator projectPage={document} projectsList={projects} />
</main>


