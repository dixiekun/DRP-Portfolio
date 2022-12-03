<script> 
    import * as prismicH from '@prismicio/helpers';
    import {onMount} from 'svelte'
    import {fly} from 'svelte/transition'
    import {quintInOut} from 'svelte/easing'
    import ThankYou from '../../routes/contact/ThankYou.svelte';
    import { z } from 'zod'
    import Loader from '$lib/components/Loader.svelte';

    export let slice;
    
    $: queryTitleInput = true
    $: emailField = true
    $: inquiryDetailsField = false
    let queryTitleValue
    let inquiryDetailsValue
    let email
    let submitSuccess

    //Transition after submit
    let loadingAnimation = false
    let loadingBar

    // error handling client
    let titleError= false
    let emailError = false
    let detailsError = false

    const contactSchema = {
        inquiry_title: z.string().min(5, { message: "Required minimum 5 characters" }).trim(),
        email: z.string().email(),
        inquiry_details: z.string().min(5).trim()
    }


    onMount(()=> {
        setTimeout(() => {
            queryTitleInput.focus()
        }, 10)
    })



    function handleQueryTitle() {

        const parseTitle = contactSchema.inquiry_title.safeParse(queryTitleValue)
        const parseEmail = contactSchema.email.safeParse(email)
        if (!parseTitle.success) {
            titleError = parseTitle.error.flatten()
        }
        
        if (parseTitle.success) {
            titleError = false
        }

        if (parseEmail.success) {
            emailError = false
        }

        if (!parseEmail.success) {
            emailError = parseEmail.error.flatten()
            return
        }


        if (parseEmail.success && parseTitle.success) {
            queryTitleInput = false
            inquiryDetailsField = true
            setTimeout(() => {
                inquiryDetailsField.focus()
            }, 10)
        }
    }

    function handleBackButton() {
        inquiryDetailsField = false
        queryTitleInput = true
    }

    function handleButtonSubmit() {
        const parseDetails = contactSchema.inquiry_details.safeParse(inquiryDetailsValue)
        if (!parseDetails.success) {
            detailsError = parseDetails.error.flatten()
            return
        }
        if (parseDetails.success) {
            detailsError = false
        }
        

    }

    function onFormSubmit() {
        loadingAnimation = true
        loadingBar = 1
        
        const manualData = {
            inquiry_title: queryTitleValue,
            email: email,
            inquiry_details: inquiryDetailsValue
        }

        async function submitData() {
            const response = await fetch('/contact/api', {
                method: 'POST',
                body: JSON.stringify(manualData),
            })

            const contactApiResponse = await response.json()

            submitSuccess = contactApiResponse.message
            
            loadingAnimation = false

        }

        submitData()

  }

</script>

<section class="contact-ui">
    <div class="container">

        {#if submitSuccess !== 'success'}
            <form id="contact-form" on:submit|preventDefault={onFormSubmit}>
                {#if queryTitleInput}
                    <div class="screen first"     
                        in:fly={{
                            delay: 100,
                            duration: 200,
                            x: 100,
                            easing: quintInOut}}
                    >
                        <h1>{prismicH.asText(slice.primary.intro)}</h1>
                        <div class="form-group">
                            <input id="inquiry_title" name="inquiry_title" bind:value={queryTitleValue} bind:this={queryTitleInput} type="text" placeholder={slice.primary.title_input_placeholder}>
                            {#if titleError}
                                <label class="error" for="inquiry_title">
                                    <span class="error">{titleError.formErrors[0]}</span>
                                </label>
                            {/if}
                        </div>

                        <div class="form-group">
                            <input id="email" name="email" bind:value={email} bind:this={emailField} type="email" placeholder="Your email for contact">
                            {#if emailError}
                                <label class="error" for="email">
                                    <span class="error">{emailError.formErrors[0]}</span>
                                </label>
                            {/if}
                        </div>

                        <button class="btn-primary" on:click|preventDefault={handleQueryTitle}>
                            {slice.items[0].button_text}
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.25 4.5L14.75 12L7.25 19.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                    </div>
                {/if}
                {#if inquiryDetailsField}
                        <div class="screen second"
                            in:fly={{
                                delay: 100,
                                duration: 200,
                                x: 100,
                                easing: quintInOut}}
                        >
                        <div class="form-group">
                            <label class="head" for="inquiry_details">{slice.primary.inquiry_title}</label>
                            <textarea bind:value={inquiryDetailsValue} bind:this={inquiryDetailsField} name="inquiry_details" id="inquiry_details" rows="6" placeholder={slice.primary.text_area_placeholder}></textarea>
                            {#if detailsError}
                                <label class="error" for="inquiry_details">
                                    <span class="error">{detailsError.formErrors[0]}</span>
                                </label>
                            {/if}
                        </div>
                            <div class="btn-container">
                                <button class="btn-primary btn-back" on:click|preventDefault={handleBackButton}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.75 19.5L8.25 12L15.75 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </button>
                                <button form="contact-form" type="submit" class="btn-primary" on:click={handleButtonSubmit}>
                                    {slice.items[1].button_text}
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.25 4.5L14.75 12L7.25 19.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                {/if}
            </form>

            {:else}
            <ThankYou/>
        {/if}
        
    </div>
    <a data-sveltekit-prefetch href="/" class="close-contact-page">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 13L13 1M1 1L13 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </a>
</section>
{#if loadingAnimation}
  <Loader progress={loadingBar}/>
{/if}

<style lang="scss">
    .contact-ui {
        width: 100%;
        height: 100vh;
        display: grid;
        place-items: center;
    }

    .container {
        text-align: center;
        display: grid;
        place-items: center;
    }

    .screen {
        width: 31.25rem;
        display: flex;
        flex-direction: column;
        align-items: end;
        gap: 2rem;
        position: relative;


        .form-group {
            display: flex;
            flex-direction: column;
            align-items: end;
            position: relative;
            width: 100%;
            margin-bottom: 1rem;
            
        }

        label {
            font-family: 'Space Grotesk';
            font-size: 1.5rem;
            font-weight: 500;
            align-self: flex-start;
            color: var(--dixie-black-darker);


            &.error {
                position: absolute;
                bottom: -2rem;
            }

            &.head {
                margin-bottom: 2rem;
            }

        }

        textarea {
            width: 100%;
            box-sizing: border-box;
            background: #FFFFFF;
            border: 2px solid var(--text-color);
            border-radius: 7px;
            font-family: 'Space Grotesk';
            font-size: 1.5rem;
            line-height: 2rem;
            outline: none;
            padding: 0.75rem 1rem;
            resize: none;

            &::placeholder {
                color: var(--text-color-light);
            }

            &:focus, &:focus-within, &:active, &:hover {
                border-color: var(--primary-color);
            }
        }

        .btn-container {
            display: flex;
            width: 100%;
            justify-content: space-between;
        }
    }
    
    h1 {
        font-family: 'Space Grotesk';
        font-style: normal;
        font-weight: 500;
        font-size: 2rem;
        line-height: 2.5rem;
        text-align: center;
        color: var(--dixie-black-darker);
    }

    input {
        width: 100%;
        height: 3.438rem;
        background: #FFFFFF;
        border: 2px solid var(--text-color);
        border-radius: 7px;
        padding: 0.75rem 1rem;
        box-sizing: border-box;
        -webkit-transition: 0.3s;
        transition: 0.3s;
        font-family: 'Space Grotesk';
        font-style: normal;
        font-weight: 400;
        font-size: 1.5rem;
        line-height: 2rem;
        outline: none;
        position: relative;

        &::placeholder {
            color: var(--text-color-light);
        }

        &:focus, &:focus-within, &:active, &:hover {
            border-color: var(--primary-color);
        }
    }

    span.error {
        font-size: 0.85rem;
        color: hsl(0deg 100% 64%);
        width: max-content;
    }

    a {
        color: var(--text-color);
        position: absolute;
        width: 44px;
        height: 44px;
        top: 16px;
        right: 2rem;
        background: #FFFFFF;
        box-shadow: 0px 3px 10px rgba(37, 82, 160, 0.1);
        border-radius: 6.25rem;
        display: grid;
        place-items: center;
        z-index: 99;
        transition: all 0.3s ease-in;

        &:hover {
            box-shadow: 0px 3px 10px rgba(37, 82, 160, 0.3);
        }

    }
</style>