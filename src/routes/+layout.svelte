<script>
  import 'normalize.css'
  import '$lib/styles/global.scss';
  import Header from '../lib/components/MainNav/Header.svelte';
  import Loader from '../lib/components/Loader.svelte';
  import { onMount } from 'svelte';
  import {navigating} from '$app/stores'
  import {loading} from '$lib/stores/loading'


  let isPageLoaded = false

  $: $loading = !!$navigating

  onMount(() => {
    isPageLoaded = true
  })


  
  
</script>


<Header/>
<slot/>
{#if $loading || !isPageLoaded}
  <Loader/>
{/if}
