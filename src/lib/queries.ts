const bikeQuery = `*[_type == "bikes"] | order(title asc) {
  title,
  "currentSlug": slug.current,
  description,
  "image": image.asset->url,
  kf_url,
  price
}`

const featuredBikesQuery = `*[_type == "bikes" && featured] | order(_createdAt desc) {
  title,
  "currentSlug": slug.current,
  description,
  "image": image.asset->url,
  kf_url,
  price
}`

const featuredBikeQuery = `*[_type == "featured"]{
title,
content,
"image": image.asset->url,
url,
buttonText
}`

const articleQuery = `
*[_type == "article" && stavanger] | order(_createdAt desc) {
title,
content,
"image": image.asset->url,
url,
buttonText
}`

const storeQuery = `
*[_type == "stores" && slug.current == "kajakk-and-fritid-stavanger"] {
storeName,
storeAddress,
"image": image.asset->url,
url,
slug
}
`

export { bikeQuery, articleQuery, storeQuery, featuredBikesQuery, featuredBikeQuery }
