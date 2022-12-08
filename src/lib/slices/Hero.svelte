<script>
    import * as prismicH from '@prismicio/helpers';
    import {page} from '$app/stores'
    import Typewriter from 'svelte-typewriter'
    import hero_swosh from '../images/swosh.svg'
    import {fly, slide} from 'svelte/transition'
    import {quintInOut} from 'svelte/easing'
    
    export let slice 

    let scrollY
    
  
    $: hero_avatar = prismicH.asImageSrc(slice.primary.hero_image, {
        auto : 'none',
        fm: 'webp',
        lossless: true
    })

    $: hero_bg = prismicH.asImageSrc(slice.primary.hero_image, {
        auto : 'none',
    })
    
    function splitToSpan(str) {
        const strArray = str.split(" ")
        return `${strArray[0]} <span class="thin-blue">${strArray[1]}</span>`
    }

    const hero_text = splitToSpan(prismicH.asText(slice.primary.hero_heading))
    

</script>
<svelte:window bind:scrollY={scrollY} />

{#key $page.data.document.data.page_layout}
    {#if $page.data.document.data.page_layout !== 'Slide-deck'}
    <section class="hero" 
        in:fly={{y: -50, duration: 250, delay: 200, easing: quintInOut}}
    >
        <div class="container" class:fullpage={$page.data.document.data.page_layout === 'Full-page'}>
            {#if slice.primary.hero_type === "Image on the side"}
                <img class="hero-pic" src={hero_avatar} alt={slice.primary.hero_image.alt}>
            {/if}
            <div class="text-content">

                {#if $page.data.document.uid === 'homepage'}
                    <Typewriter data-static="Product" mode="loop" interval="60" --cursor-color="var(--primary-color)" --cursor-width="2px">
                        <h1>
                            <span>{@html hero_text}</span>
                            {#each slice.items as role}
                                <span>{@html splitToSpan(role.typer_value)}</span>
                            {/each}
                        </h1>

        

                    </Typewriter>
                    <img class="swosh" src={hero_swosh} alt="swosh">
                    {:else}
                    {@html prismicH.asHTML(slice.primary.hero_heading)}
                {/if}
                {@html prismicH.asHTML(slice.primary.hero_description)}
            </div>
        </div>
        {#if slice.primary.hero_type === "Image on the background"}
            <img style:transform={`translate3d(0, ${scrollY*0.1}%, 0)`} class="hero-bg" src={hero_bg} alt={slice.primary.hero_image.alt}>
        {/if}
    </section>
    {/if}
{/key}


    

<style lang="scss">
    .hero {
        position: relative;
        overflow: hidden;
        transition: transform 0.4s ease;
        perspective: 100px;

        img.hero-pic {
            width: 28.625rem;
            max-width: 100%;
        }

        img.hero-bg {
            position: absolute;
            object-fit: cover;
            height: 100%;
            width: 100%;
            inset: 0;
            z-index: -1;
            will-change: transform;
            
        }

        .container {
            display: grid;
            grid-template-columns: 1fr 1.55fr;
            place-items: center;

            &.fullpage {
                background-color: rgba(0, 0, 0, 0.8); 
                width: 100%;
                grid-template-columns: 1fr;
                padding: var(--space-3xl);
                box-sizing: border-box;
                color: white;
                
                .text-content { 
                    width: min(104ch, 100%);
                    height: min(50ch, 100vh + 3rem);
                    text-align: center;
                    display: grid;
                    place-content: center;
                    gap: var(--space-m);

                }
            }

            .text-content {
                flex-grow: 1;
                width: 44rem;
                max-width: 100%;




                .swosh {
                    max-width: 100%;
                }
            }
        }
    }

    // Responsive Design
       

    @media only screen and (max-width: 1150px) {

        .hero {

            .container {

                .text-content {
                    width: 100%;

                    .swosh {
                        width: 30rem;
                    }
                }
            }
        }
    }

    @media only screen and (max-width: 860px) {
        .hero {

            .container {
                grid-template-columns: auto;
                gap: 0;

                .text-content {
                    width: 100%;
                    text-align: center;
                    margin-bottom: 2rem;

                    .swosh {
                        width: max-content;
                    }
                }
            }
        }
    }

    @media only screen and (max-width: 600px) {

        .hero {
            .container {

                &.fullpage {
                    padding: var(--space-3xl) var(--space-m);


                }

            }
        }
    }

</style>