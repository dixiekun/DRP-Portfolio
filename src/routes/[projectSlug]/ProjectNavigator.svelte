<script>

export let projectsData
export let projectPage

$: projectsList = projectsData.sort((a, b) => (a.data.date_published > b.data.date_published ? -1 : 1 ))

$: currentPage = projectPage.uid

$: index = projectsList.findIndex((project) => project.uid === currentPage)

$: (getPrevAndNext = () => {

  if (index === -1) {
    return undefined
  }
  
  let prev
  let next

  if (projectsList[index + 1]) {
    prev = projectsList[index + 1]
    if (!prev) {
        return undefined
    }
  }

  if (projectsList[index - 1]) {
    next = projectsList[index - 1]
    if (!next) {
        return undefined
    }
  }
  return {
        prevIndex: prev,
        nextIndex: next
    }
})

$: ({prevIndex, nextIndex } = getPrevAndNext())



</script>

<section class="project-navigator">
    <div class="container">
        <div class="wrapper">
            {#if prevIndex}
                <a class="button-navigator prev" href={prevIndex.uid} data-sveltekit-prefetch>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.75 19.5L8.25 12L15.75 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    Previous Project
                </a>
            {/if}
            {#if nextIndex}
                <a class="button-navigator next" href={nextIndex.uid} data-sveltekit-prefetch>Next Project
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.25 4.5L14.75 12L7.25 19.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </a>
            {/if}
        </div>
    </div>
</section>

<style lang="scss">
    section.project-navigator {
        padding: 2rem;

        .wrapper {
            display: flex;
            justify-content: space-between;
        }

        .button-navigator {
                &.next {
                margin-left: auto;
            }
        }
        

    }


    @media only screen and (max-width: 600px) {
        section.project-navigator {
            padding: 2rem 0;
        }
    }

</style>