<script>
import Logo from "./Logo.svelte";
import Nav from "./Nav.svelte";
import drpLogo from '../../images/Dixie-Raiz-Pacheco-Logo.svg'
import {page} from '$app/stores'
import {afterNavigate} from '$app/navigation'
import {fly, scale} from 'svelte/transition'

let projectPage

afterNavigate(() => {
        projectPage = $page.params.projectSlug
})


</script>

<header class="main-navigation">
        {#if projectPage}
                <div in:scale="{{duration: 300}}" class="container nav-bar-container split">
                        <a href="/" data-sveltekit-prefetch>
                                <Logo logo={drpLogo} logoName="Dixie Raiz Pacheco logo" />
                        </a>
                        <Nav/>
                </div>
        {:else}
                <div in:fly="{{duration: 1000}}" class="container nav-bar-container">
                        <a href="/" data-sveltekit-prefetch>
                                <Logo logo={drpLogo} logoName="Dixie Raiz Pacheco logo" />
                        </a>
                        <Nav/>
                </div>
        {/if}

</header>

<style lang="scss">

        .main-navigation {
                padding-top: 1.25rem;

                .nav-bar-container {
                        display: grid;
                        place-items: center;
                        gap: 1.25rem;
                        transition: all 0.3s ease-in;

                        &.split {
                                display: flex;
                                justify-content: space-between;
                                transition: all 0.3s ease-in;
                                height: 6rem;


                                a {
                                        height: 100%;
                                }

                        }
                }
        }

</style>