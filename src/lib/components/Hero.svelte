<script>
    import heroSwosh from '../images/swosh.svg'
    import {page} from '$app/stores'
    import {afterNavigate} from '$app/navigation'

    let projectPage

    afterNavigate(() => {
            projectPage = $page.params.projectSlug
    })

</script>
<section class="hero">
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
</section>

<style lang="scss">
    .hero {

        .container {
            display: grid;
            gap: 3.375rem;
            grid-template-columns: 1fr 1.55fr;
            place-items: center;

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



</style>