<script>
    import {getContext} from 'svelte'
    import {quintInOut} from 'svelte/easing'
    import Slide from './Slide.svelte';

    const project = getContext('project-data')
    const slideImages = project.slideDeckImages

    console.log(slideImages)

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
    {#each slideImages as image}
      <link rel="preload" as="image" href={image.url} />
    {/each}
</svelte:head>
<svelte:window on:keyup={handleShortcut} />

    <div class="extra-outer-wrapper">
        <div class="outer-slide container">
            <div class="slide-deck">
                <h1 class="hidden-for-seo" slot-name="project-title">{project.title}</h1>
                <p class="hidden-for-seo" slot-name="project-description">
                    {project.description}
                </p>
                {#each slideImages as slideImage, id}
                    {#if id === cur}
        
                        <Slide transition_args={transition_args}>
                            <img src={slideImage.url} alt={slideImage.fileName}>
                        </Slide>	
        
                    {/if}
                {/each}
                <div class="controls">
                    <button on:click="{()=>prev()}">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </button>
                    <button on:click="{()=>next()}">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
    

    <div class="dots container">
        {#each slideImages as slideImage, i}
            <button on:click={()=>changeSlide(i)} class="dot" class:selected={cur == i}>{i+1}</button>
        {/each}
    </div>



        



<style lang="scss">
    @import '../../lib/styles/colors.scss';

    .extra-outer-wrapper {
		width: 84%;
		margin: 0 auto;
	}

    .outer-slide {
        box-sizing: border-box;
        position: relative;
        height: calc(100vh - 9.5rem);
        margin-top: 2rem;
    }

    .slide-deck {
        // display: grid;
        // place-items: center;
        // margin-top: 3rem;
        position: absolute;
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
</style>