<script>
    import heroSwosh from '../images/swosh.svg'
    import {page} from '$app/stores'
    import {afterNavigate} from '$app/navigation'

    let projectPage
    let fullpagePresentation

    afterNavigate(() => {
            projectPage = $page.params.projectSlug

            if ($page.data.project) {
                    fullpagePresentation = $page.data.project[0].isFullPagePresentation
            }
    })
</script>
<section class="hero">
    {#if fullpagePresentation}
        <div class="container fullpage">
            <div class="text-content">
                <slot name="hero-title"/>
                <slot name="hero-description"/>
            </div>
        </div>
        <slot name="hero-bg"/>
        {:else}
        <div class="container">
            <slot name="hero-pic"/>
            <div class="text-content">
                <slot name="hero-title"><h1>Product Developer</h1></slot>
                {#if projectPage}
                    <div class="hide-me"></div>
                {:else}
                    <img class="swosh" src={heroSwosh} alt="swosh">
                {/if}
                
                <slot name="hero-description"/>
            </div>
        </div>
    {/if}

</section>

<style lang="scss">
    .hero {
        position: relative;

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