import { GraphQLClient, gql } from 'graphql-request';
import { DRP_HYGRAPH_TOKEN } from '$env/static/private'


export const load = async ({params}) => {
    const hygraph = new GraphQLClient("https://api-ap-northeast-1.hygraph.com/v2/cl9pfchqo1i9001t20h1d1po7/master", {
      headers: {
        Authorization: `Bearer ${DRP_HYGRAPH_TOKEN}`,
      },
    });


    const QUERY = gql`
    query Projects {
        projects {
          categories {
            id
            name
            description
          } 
          id
          title
          slug
          description
          slideDeckImages(first: 100) {
            id
            url
            fileName
          }
          isFullPagePresentation
          likes
          publishedAt
          publishedBy {
            id
          }
          tools
          updatedAt
          productionLink
          
        }
      }
    `

    const { projects } = await hygraph.request(QUERY);
    
    const projectEntry = projects.filter((entry) => entry.slug === params.projectSlug)
    const project = projectEntry[0]

    return {
        projects,
        project
    };

  }


  