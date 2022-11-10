<script>
import Logo from "./Logo.svelte";
import Nav from "./Nav.svelte";
import drpLogo from '../../images/Dixie-Raiz-Pacheco-Logo.svg'
import {page} from '$app/stores'
import {afterNavigate} from '$app/navigation'
import {fly, scale} from 'svelte/transition'


let projectPage
let fullpagePresentation

afterNavigate(() => {
        projectPage = $page.params.projectSlug

        if ($page.data.project) {
                fullpagePresentation = $page.data.project[0].isFullPagePresentation
        }

})

</script>


        {#if projectPage && (fullpagePresentation === false) }
        <header class="main-navigation">
                <div in:scale="{{duration: 300}}" class="container nav-bar-container split">
                        <a href="/" data-sveltekit-prefetch>
                                <Logo logo={drpLogo} logoName="Dixie Raiz Pacheco logo" />
                        </a>
                        <Nav/>
                </div>
        </header>
        {:else if projectPage && fullpagePresentation }
        <header class="main-navigation fullpage-true">
                <div in:scale="{{duration: 300}}" class="container nav-bar-container split">
                        <a href="/" data-sveltekit-prefetch>
                                <Logo logo={drpLogo} logoName="Dixie Raiz Pacheco logo" />
                        </a>
                        <Nav/>
                </div>
        </header>
        {:else}
        <header class="main-navigation">
                <div in:fly="{{duration: 1000}}" class="container nav-bar-container">
                        <a href="/" data-sveltekit-prefetch>
                                <Logo logo={drpLogo} logoName="Dixie Raiz Pacheco logo" />
                        </a>
                        <Nav/>
                </div>
        </header>
        {/if}


<style lang="scss">

        .main-navigation {
                padding-top: 1.25rem;

                &.fullpage-true {
                        position: absolute;
                        inset: 0;
                        z-index: 99;
                        background-color: rgba(255, 255, 255, 0.647);
                        backdrop-filter: blur(7px);
                        height: fit-content;
                        padding-bottom: 1.25rem;
                        border-bottom: 1px solid #fafafa;
                        box-shadow: 0 8px 20px #31354059;
                }

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

        // Responsive Design
        @media only screen and (max-width: 1440px) {
                .main-navigation {

                        .nav-bar-container {

                                &.split {
                                        max-width: 84%;

                                }
                        }
        }
        }


</style>