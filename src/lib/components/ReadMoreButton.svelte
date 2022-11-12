<script>
    export let projectSlug
    export let hovered
</script>

<a class="button" class:hovered={hovered} href={projectSlug} data-sveltekit-prefetch>Project Details</a>

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
        border: 1px solid #fafafa;
        border-radius: 3px;
        padding: 0.625rem 1.25rem;
        transition: all 0.2s ease;
        width: max-content;



        &:hover, &.hovered {
            background: $primary-color;
            color: #FAFAFA;
            border: 1px solid $primary-color;
        }
    }
</style>