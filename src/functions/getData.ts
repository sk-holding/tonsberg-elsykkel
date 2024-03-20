import { client } from "@/lib/client"

export const sanityFetch = async (query: string) => {
  const data = await client.fetch(query, { next: { revalidate: 10 } })
  return data
}
