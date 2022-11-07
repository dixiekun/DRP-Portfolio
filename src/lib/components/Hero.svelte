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
                <img src={heroSwosh} alt="swosh">
            {/if}
            
            <slot name="hero-description"/>
        </div>
    </div>
</section>

<style lang="scss">
    .hero {
        .container {
            display: flex;
            align-items: center;
            gap: 3.375rem;

            .text-content {
                flex-grow: 1;
                max-width: 44rem;


            }
        }
    }
</style>