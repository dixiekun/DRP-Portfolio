<script>
    import * as prismicH from '@prismicio/helpers';
    import {fly, fade} from 'svelte/transition'
    import {quintInOut} from 'svelte/easing'
    import Slide from '../components/Slide.svelte';
    import {cleanImage} from '$lib/utils/prismicImageStrip'
    import {page} from '$app/stores'

    export let slice

    $: slideImages = slice.items

    $: project = $page.data.document

    $: currentPageLayout = project.data.page_layout

    let cur = 0;
	
	function changeSlide(slide) {
		cur = slide;
	}
	
	const clamp = (number, min, max) => Math.min(Math.max(number, min), max);
	const transition_args = {
        delay: 100,
		duration: 200,
        x: 100,
        easing: quintInOut
	}
	
	function prev(e) {
		cur = clamp( --cur, 0, slideImages.length-1 )
	}
	
	function next(e) {
		cur = clamp( ++cur, 0, slideImages.length-1 )
	}
	
    const ARROW_LEFT = 37;
	const ARROW_RIGHT = 39;
	function handleShortcut(e) {
        if (e.keyCode === ARROW_LEFT ) {
						prev();
        }
		    if (e.keyCode === ARROW_RIGHT ) {
            next();
        }
    }
    
</script>
<svelte:head>
    {#each slideImages as slideImage}
      <link rel="prefetch" as="image" href={cleanImage(slideImage.slide_image.url)} />
    {/each}
</svelte:head>
<svelte:window on:keyup={handleShortcut} />

{#if currentPageLayout === 'Full-page'}
    <section class="fullpage-presentation" in:fly={{y: -50, duration: 250, delay: 200, easing: quintInOut}}>
        <div class="container">
            <article>
                {#each slideImages as slideImage, i}
                    <img class={slideImage?.image_class ?? 'no-style'} id={`image-number-${[i+1]}`} src={cleanImage(slideImage.slide_image.url)} alt={slideImage.slide_image.alt}>
                {/each}
            </article>
        </div>
    </section>
{:else if currentPageLayout === 'Slide-deck'}
    <section class="extra-outer-wrapper" in:fly={{y: -50, duration: 250, delay: 200, easing: quintInOut}}>
        <div class="outer-slide container">
            <div class="slide-deck">
                <h1 class="hidden-for-seo" >{prismicH.asText(project?.data?.seo_title)}</h1>
                <p class="hidden-for-seo" >
                    {prismicH.asText(project?.data?.seo_meta_description)}
                </p>
                {#each slideImages as slideImage, id}
                    {#if id === cur}
        
                        <Slide transition_args={transition_args}>
                            <img src={cleanImage(slideImage.slide_image.url)} alt={slideImage.slide_image.alt}>
                        </Slide>	
        
                    {/if}
                {/each}
                <div class="controls">
                    <button on:click="{()=>prev()}">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <title>Previous Slide</title>
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </button>
                    <button on:click="{()=>next()}">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <title>Next Slide</title>
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </section>
    
    <div class="dots container">
        {#each slideImages as slideImage, i}
            <button on:click={()=>changeSlide(i)} class="dot" class:selected={cur == i}>{i+1}</button>
        {/each}
    </div>
{/if}

{#if project.data.project_link}
    <div class="container">
        <a class="project-link" href={project.data.project_link} target="_blank" rel="noreferrer">Click here for the project live site</a>
    </div>
{/if}



        



<style lang="scss">
    @import '../../lib/styles/colors.scss';

    section.fullpage-presentation {
        padding-top: var(--space-xs);
    }
    article {
        display: grid;
        place-items: center;
        background-color: white;
        border-radius: 0.75rem;
        overflow: hidden;

        img {
            width: 100%;
        }

        img:not(:first-child, .no-mt) {
            margin-top: var(--space-xl);
        }

        img.w-1180 {
            max-width: 73.75rem;
        }

        img.full-width {
            width: 100%;
        }
        
    }

    a.project-link {
        display: flex;
        margin-top: var(--space-xl);
        font-size: var(--step-1);
    }

    .extra-outer-wrapper {
		// width: 84%;
        width: min(160ch, 100vw - 2rem);
		margin: 0 auto;
	}

    .outer-slide {
        box-sizing: border-box;
        position: relative;
        // height: calc(100vh - 9.5rem);
        margin-top: 2rem;
    }

    .slide-deck {
        // display: grid;
        // place-items: center;
        // margin-top: 3rem;
        position: relative;
        display: flex;
        width: 100%;
    }

    img {
        max-width: 100%;
    }

    .hidden-for-seo {
        display: none;
    }

    button {
		background: transparent;
		border-color: transparent;
		width: 3.2rem;
		height: 3.2rem;

        svg {
            width: 1.5rem;
            height: 1.5rem;
        }
	}

    .controls {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        
        button {
            position: absolute;
            background-color: $dixie-black;
            color: white;
            transition: all 0.2s ease-out;
            box-shadow: 7px 6px 12px 1px rgb(15 118 211 / 16%);

            &:first-child {
                left: -3.2rem;
                top: calc(50% - 1.2rem);
            }
            
            &:last-child {
                right: -3.2rem;
                top: calc(50% - 1.2rem);
            }

            &:hover {
                background-color: $primary-color;
            }
        }
    }

    .dots {
        margin-top: 2rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .dot {
		font-size: 12px;
		margin: 0.4rem;
        padding: 0.4rem;
        color: $text-color;
        border: 1px solid $text-color;

        &:hover {
            background-color: $primary-color;
            color: white;
        }
	}
	
	.dot.selected {
		color: $primary-color;
        border: 2px solid $primary-color;
        font-weight: bold;

        &:hover {
            color: white;
        }
	}

    @media only screen and (max-width: 1064px) {
        .slide-deck {
            flex-wrap: wrap;
        }


        .controls {
        flex-direction: row;
        gap: 2rem;
        width: 100%;
        justify-content: center;
        margin-top: 2rem;
        
            button {
                position: relative;

                &:first-child {
                    left: unset;
                    top: unset;
                }
                
                &:last-child {
                    right: unset;
                    top: unset;
                }
            }
        }
    }

    @media only screen and (max-width: 600px) {
        button {
            svg {
                width: 1.25rem;
                height: 1.25rem;
            }
        }
    }


</style>