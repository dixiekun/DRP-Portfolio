<script>
  import { createEventDispatcher } from "svelte";


    const dispatch = createEventDispatcher()

    function hovered() {
        dispatch('hovered')
    }


    function mouseLeft() {
        dispatch('mouse-left')
    }

    export let projectSlug

</script>

<a class="button" href={projectSlug} on:mouseenter={hovered} on:mouseleave={mouseLeft} data-sveltekit-prefetch>Project Details</a>

<style lang="scss">
    @import '../styles/colors.scss';

    .button {
        display: flex;
        font-style: normal;
        font-weight: 500;
        font-size: 0.75rem;
        line-height: 1.5rem;
        text-transform: uppercase;
        color: $text-color;
        background: #FFFFFF;
        box-shadow: 2px 4px 4px #E3E7EB;
        border: none;
        border-radius: 3px;
        padding: 0.625rem 1.25rem;
        transition: all 0.2s ease;
        width: max-content;



        &:hover {
            background: $primary-color;
            color: #FAFAFA;
        }
    }
</style>