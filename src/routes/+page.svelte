<script>
    import {setContext} from 'svelte'
    import Hero from "../lib/components/Hero.svelte";
    import Projects from '../lib/components/Projects.svelte';
    import heroPic from '../lib/images/hero-profile-pic.png'
    import {fly} from 'svelte/transition'
    import {quintInOut} from 'svelte/easing'


    export let data
    const {projects} = data 
    const heroDescription = `A licensed chemist who pursued the path of UX design, full-stack web development, and business strategy. A creative unicorn that wants to do it all.`
    const heroDescriptionPS = `Working remotely since 2010 (12+ yrs) and have acquired many valuable skills in various fields.`

    setContext('projects-data', projects)




</script>

<Hero>
    <img class="hero-pic" slot="hero-pic" src={heroPic} alt="dixie pacheco">
    <h1 slot="hero-title">Product <span>Designer</span></h1>
    <p slot="hero-description">
        {heroDescription}
        <br>
        <br>
        {heroDescriptionPS}
    </p>

</Hero>
<main 
    in:fly={{y: -50, duration: 250, delay: 200, easing: quintInOut}}
    class='container'
>
    <div class="heading">
        <h2>Projects</h2>
        <p class="sub-heading">Check out the projects I’ve worked in the past.</p>
    </div>
    <Projects/>
</main>

<style lang="scss">
    @import '../lib/styles/colors.scss';

    main {
        background-color: white;
        padding: 4rem 3.375rem;
        border-radius: 1rem;
        border: 1px solid #F5F5F5;
        margin-bottom: 3rem;
        display: grid;
        gap: 4rem;
        box-sizing: border-box;

        h2 {
            font-size: 32px;
            font-weight: 700;
            text-transform: uppercase;
            margin-top: 0;
            position: relative;

            &::before {
                content: ' ';
                position: absolute;
                width: 4.313rem;
                height: 6px;
                background: $primary-color;
                top: -8px;
            }
        }
        
        p.sub-heading {
            font-size: 1rem;
            margin: 0;
        }
    }

    h1 {
        margin-left: 1.75rem;

        span {
            font-weight: 400;
            color: $primary-color;
        }
    }

    p {
        font-size: 1.25rem;
        margin-left: 1.75rem;
    }

    img.hero-pic {
        max-width: 28.625rem;
    }

    img {
        max-width: 100%;
    }



</style>