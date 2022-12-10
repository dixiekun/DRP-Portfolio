<script>
import Logo from "./Logo.svelte";
import Nav from "./Nav.svelte";
import drpLogo from '../../images/Dixie-Raiz-Pacheco-Logo.svg'
import {page} from '$app/stores'
import {scale} from 'svelte/transition'

let y= 0
let lastY= 0
let dY

$: console.log("🚀 ~ file: Header.svelte:9 ~ y", y)

function handleScroll(e) {
        dY = y - lastY
        lastY = y
        if (dY < 0) {
                return dY
        }
        
}

</script>
<svelte:window bind:scrollY={y} on:scroll={handleScroll} />

{#if $page.data.document.data.page_layout !== 'Contact-page'}
        {#key $page.data.document.data.page_layout}
        <header class="main-navigation" class:sticky-header={dY<0 && y > 64} class:fullpage-true={$page.data.document.data.page_layout === 'Full-page'}>
                {#key $page.data.document.uid}
                        <div in:scale="{{duration: 300}}" class="container nav-bar-container" class:split={$page.data.document.uid !== 'homepage'}>
                                <a href="/" data-sveltekit-prefetch>
                                        <Logo logo={drpLogo} logoName="Dixie Raiz Pacheco logo" />
                                </a>
                                <Nav/>
                        </div>
                {/key}
        </header>
        {/key}
{/if}

<style lang="scss">
        .main-navigation {
                padding-top: 1.25rem;
        }

        .nav-bar-container {
                display: grid;
                place-items: center;
                gap: 1.25rem;
                transition: all 0.3s ease-in;
        }

        .fullpage-true {
                position: absolute;
                inset: 0;
                z-index: 99;
                background-color: rgba(255, 255, 255, 0.647);
                backdrop-filter: blur(7px);
                height: fit-content;
                padding-bottom: 0.5rem;
                border-bottom: 1px solid #fafafa;
                box-shadow: 0 8px 20px #31354059;
                padding-top: 0.5rem;
                

                &.sticky-header {
                        transition: transform 0.3s ease-in;
                        position: sticky;
                        top: -4rem;
                        box-shadow: 0 6px 8px rgb(49 53 64 / 20%);
                        transform: translate3d(0, 4rem, 0);
                }

        }

        .fullpage-true .split {
                height: 4rem;
        }

        
        .split {
                display: flex;
                justify-content: space-between;
                transition: all 0.3s ease-in;
                height: 6rem;
        }

        a {
                height: 100%;
        }

</style>