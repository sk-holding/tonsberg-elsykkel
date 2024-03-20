import { createClient, type QueryParams } from "next-sanity"

export const client = createClient ({
     apiVersion: process.env.SANITY_API_VERSION,
     dataset: process.env.SANITY_DATASET,
     projectId: process.env.SANITY_PROJECT_ID,
     useCdn: false,
})

export async function sanityFetch<QueryResponse>({
     query,
     params = {},
     tags,
} : {
     query: string
     params?: QueryParams
     tags?: string[] 
}) : Promise<QueryResponse[]> {
     const result = await client.fetch<QueryResponse>(query, params, {
          next: {
               revalidate: 10,
               tags,
          }
     })

     if (!Array.isArray(result)) {
          throw new Error("Expected an array from the query result.");
        }
        
     return result;
}