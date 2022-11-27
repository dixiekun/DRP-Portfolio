import { error } from '@sveltejs/kit'

import createClient from '$lib/utils/prismicio'

export async function load({ fetch, request }) {
  const homepageUID = 'homepage' 
  const fetchLinkDocs = [
    "listing.title",
  ]
  
  const client = createClient({ fetch, request })
  const document = await client.getByUID('page', homepageUID)
  const projects = await client.getAllByType('project')

  if (document) {
    return { document, projects }
  }

  error(404, 'Not found')
}