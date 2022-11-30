import { error } from '@sveltejs/kit'
import { z } from 'zod'

import createClient from '$lib/utils/prismicio'

export async function load({ fetch, request }) {
  const contactPageUID = 'contact' 

  const client = createClient({ fetch, request })
  const document = await client.getByUID('page', contactPageUID)


  if (document) {
    return { document }
  }

  error(404, 'Not found')
}

const registerContactSchema = z.object({
  query_title: z.string().min(2).trim(),
  inquiry_details: z.string().min(5).trim()
})

export const actions = {
  default: async ({request}) => {
    const formData = await request.formData()
    console.log(formData)
    try {
      const result = registerContactSchema.parse(formData)
      console.log('Success')
      console.log(result)
    } catch (error) {
      console.error(error)
    }

  
  }
}