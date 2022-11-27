<script>
import Logo from "./Logo.svelte";
import Nav from "./Nav.svelte";
import drpLogo from '../../images/Dixie-Raiz-Pacheco-Logo.svg'
import {page} from '$app/stores'
import {scale} from 'svelte/transition'

</script>
{#key $page.data.document.data.page_layout}
        <header class="main-navigation" class:fullpage-true={$page.data.document.data.page_layout === 'Full-page'}>
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

<style>

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

        /* @media only screen and (max-width: 1440px) {
                .split {
                        max-width: 84%;

                }
        } */


</style>