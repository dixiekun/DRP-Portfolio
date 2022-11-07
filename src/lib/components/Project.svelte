<script>
    import ReadMoreButton from "./ReadMoreButton.svelte";


    export let title
    export let description
    export let thumbnail

    export let projectSlug

    let hovered = false

    function handleHover(event) {
        hovered = true
    }

    function handleMouseLeave(event) {
        hovered = false
    }


</script>

<article>
    <img class:hovered src={thumbnail} alt={`${title} thumbnail`} >
    <div class:hovered  class="text-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <ReadMoreButton projectSlug={projectSlug} on:hovered={handleHover} on:mouse-left={handleMouseLeave} />
    </div>
</article>

<style lang="scss">
    @import '../styles/colors.scss';

    article {
        display: flex;
        gap: 3rem;
        align-items: center;
        
        img {
            max-width: 42.375rem;
            position: relative;
            z-index: 10;
            transition: all 0.3s ease-out;

            &.hovered {
                box-shadow: 7px 6px 35px 5px rgba(15, 118, 211, 0.16);
                transform: scale(1.01);
            }
        }

        h3 {
            font-size: 1.5rem;
            line-height: 2rem;
            font-weight: 600;
            color: $primary-color;
        }

        .text-content {
            position: relative;
            z-index: 9;
            max-width: 518px;

            &::before {
                content: '';
                box-sizing: border-box;
                position: absolute;
                width: 42.5rem;
                height: 20.5rem;
                margin-top: auto;
                margin-bottom: auto;
                top: -10%;
                left: -22%;
                background: #F5F5F5;
                border-bottom: 1px solid #C7C9C8;
                z-index: -1;
                transition: all 0.3s ease-in-out;
            }


            &.hovered {
                &::before {
                    filter: blur(30px);
                    transform: translateX(-6rem);
                }
            }
        }

    }
</style>