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

<svelte:head>
    <title>Dixie Raiz Pacheco | Portfolio Website</title>
    <meta name="description" content={heroDescription} />
    <meta
        name="robots"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
    />
</svelte:head>


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
>
    <div class="container project-wrapper">
        <div class="heading">
            <h2>Projects</h2>
            <p class="sub-heading">Check out the projects I’ve worked in the past.</p>
        </div>
        <Projects/>
    </div>

</main>

<style lang="scss">
    @import '../lib/styles/colors.scss';

    .project-wrapper {
        background-color: white;
        padding: 4rem 3.375rem;
        border-radius: 1rem;
        border: 1px solid #F5F5F5;
        margin-bottom: 3rem;
        display: grid;
        gap: 4rem;
        box-sizing: border-box;
        overflow: hidden;

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

    img.hero-pic {
        width: 28.625rem;
        max-width: 100%;
    }

    img {
        max-width: 100%;
    }


    // Responsive design
    @media only screen and (max-width: 860px) {
        .project-wrapper {
            h2 {
                font-size: 1.5rem;
                margin-bottom: 0.5rem;

                
                &::before {
                    width: 3rem;
                    height: 5px;
                    top: -6px;

                }
            }
        }

        img.hero-pic {
            max-width: 20rem;
        }
    }

    @media only screen and (max-width: 600px) {
        .project-wrapper {
            padding: 3rem 2rem;
        }
        
    }


</style>