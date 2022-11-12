import { writable } from 'svelte/store'
import { GraphQLClient, gql } from 'graphql-request';
import { DRP_HYGRAPH_TOKEN } from '$env/static/private'

const data = async () => {
        const hygraph = new GraphQLClient("https://api-ap-northeast-1.hygraph.com/v2/cl9pfchqo1i9001t20h1d1po7/master", {
          headers: {
            Authorization: `Bearer ${DRP_HYGRAPH_TOKEN}`,
          },
        });
    
        const QUERY = gql`
        query Projects {
            projects (orderBy: createdAt_DESC) {
              categories {
                id
                name
                description
              } 
              id
              title
              slug
              description
              slideDeckImages {
                id
                url
                fileName
              }
              publishedAt
            }
          }
        `
        
    
        const response = await hygraph.request(QUERY);
        const data = await response

        try {
            return await data
        }
        catch(error) {
            console.log(error)
        }
    
}

const storeData = writable([data()])

export default storeData 