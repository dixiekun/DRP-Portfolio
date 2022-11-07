<script>
    import {fly} from 'svelte/transition'

    export let transition_args
</script>


<div class="slide"
    in:fly={transition_args}
    out:fly={{duration: 10}}

    >
    <slot/>
</div>

<style>
    .slide {
        position: relative;
		flex: 1 0 auto;
		width: 100%;
		height: 100%;
	    align-items: center;
		justify-content: center;
		display: flex;
		text-align: center;
        overflow: hidden;
        border-radius: 1rem;
        box-shadow: 7px 6px 12px 1px rgb(15 118 211 / 16%);
	}
</style>