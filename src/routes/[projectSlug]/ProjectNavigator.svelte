<script>

export let projectsList
export let projectPage


$: currentPage = projectPage.slug

$: index = projectsList.findIndex((project) => project.slug === currentPage)

$: (getPrevAndNext = () => {

  if (index === -1) {
    return undefined
  }
  
  let prev
  let next

  if (projectsList[index - 1]) {
    prev = projectsList[index - 1]
    if (!prev) {
        return undefined
    }
  }

  if (projectsList[index + 1]) {
    next = projectsList[index + 1]
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
                <a class="button-navigator" href={prevIndex.slug} data-sveltekit-prefetch>Previous Project</a>
            {/if}
            {#if nextIndex}
                <a class="button-navigator" href={nextIndex.slug} data-sveltekit-prefetch>Next Project</a>
            {/if}
        </div>
    </div>
</section>

<style>
    section.project-navigator {
        padding: 2rem;
    }

</style>