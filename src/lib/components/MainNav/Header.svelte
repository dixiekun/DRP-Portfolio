<script>
import Logo from "./Logo.svelte";
import Nav from "./Nav.svelte";
import drpLogo from '../../images/Dixie-Raiz-Pacheco-Logo.svg'
import {page} from '$app/stores'
import { onMount } from 'svelte';
import {afterNavigate} from '$app/navigation'
import {fly, scale} from 'svelte/transition'


$: projectPage = {
        slug : $page.params.projectSlug,
        isFullPagePresentation: false,
}

onMount(() => {

        if (($page.data.projects && $page.params.projectSlug) !==undefined) {
                const pageData = $page.data.projects.filter((project) => project.slug === $page.params.projectSlug ) 
                projectPage.slug = pageData[0].slug
                projectPage.isFullPagePresentation = pageData[0].isFullPagePresentation
        }

        
})

afterNavigate(() => {
        
        if (($page.data.projects && $page.params.projectSlug) !==undefined) {
                const pageData = $page.data.projects.filter((project) => project.slug === $page.params.projectSlug ) 
                projectPage.slug = pageData[0].slug
                projectPage.isFullPagePresentation = pageData[0].isFullPagePresentation
        } else {
                projectPage.slug = undefined
                projectPage.isFullPagePresentation = false
        }
 
})

</script>
{#key projectPage.isFullPagePresentation}
        <header class="main-navigation" class:fullpage-true={projectPage.isFullPagePresentation}>
                {#key projectPage.slug}
                <div in:scale="{{duration: 300}}" class="container nav-bar-container" class:split={projectPage.slug !== undefined}>
                        <a href="/" data-sveltekit-prefetch>
                                <Logo logo={drpLogo} logoName="Dixie Raiz Pacheco logo" />
                        </a>
                        <Nav/>
                </div>
                {/key}
        </header>
{/key}

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
                        padding-bottom: 0.5rem;
                        border-bottom: 1px solid #fafafa;
                        box-shadow: 0 8px 20px #31354059;
                        padding-top: 0.5rem;

                        .nav-bar-container {

                                &.split {
                                        height: 4rem;
                                }
                        }
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