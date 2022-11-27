import { error } from '@sveltejs/kit'

import createClient from '$lib/utils/prismicio'

export async function load({ fetch, params, request }) {
  const { projectSlug } = params
  

  const client = createClient({ fetch, request })
  const document = await client.getByUID('project', projectSlug)
  const projects = await client.getAllByType('project')


  if (document) {
    return { document, projects }
  }

  error(404, 'Not found')
}