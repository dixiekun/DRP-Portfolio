import * as prismic from '@prismicio/client'
import {PRISMIC_TOKEN} from '$env/static/private'

const drpRepo = 'drp-portfolio'
const accessToken = PRISMIC_TOKEN

const routes = [
    {
      type: 'page',
      uid: 'homepage',
      path: '/',
    },
    {
      type: 'page',
      path: '/contact',
    },
    {
      type: 'project',
      path: '/:uid',
    },
  ]
  
  const createClient = ({ request, fetch } = {}) => {
    const clientOptions = {
      fetch,
      accessToken,
      routes,
    }
    const client = prismic.createClient(drpRepo, clientOptions)
  
    if (request) {
      client.enableAutoPreviewsFromReq(request);
    }
  
    return client
  }
  
  export default createClient