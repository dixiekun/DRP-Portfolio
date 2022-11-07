<script>
    import behance from '../../images/icons/behance-logo.svg'
    import linkedin from '../../images/icons/linkedin-logo.svg'
</script>

<nav>
    <a href="/" data-sveltekit-prefetch>Home</a>
    <a href="/contact" data-sveltekit-prefetch>Contact</a>
    <a href="/#"><img src={behance} alt="behance"></a>
    <a href="/#"><img src={linkedin} alt="linkedin"></a>
</nav>


<style lang="scss">
    nav {
        display: flex;
        gap: 1.25rem;
        align-items: center;

        a {
            color: #2A2D38;

            display: flex;
            align-items: center;
        }
    }
</style>
