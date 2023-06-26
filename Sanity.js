import {createClient} from '@sanity/client'
import ImageUrlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: "z8mrdwy9",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21",
});

const builder = ImageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;


export async function getPosts() {
  const posts = await client.fetch( `
  *[_type == "featured"] {
    ...,
    restaurants[]->{
      ...,
      dishes[] ->
    }
  }`)
  return posts
}
// import SanityClient from "@sanity/client";
// import ImageUrlBuilder from "@sanity/image-url";

// const client = SanityClient({
//   projectId: "z8mrdwy9",
//   dataset: "production",
//   useCdn: true,
//   apiVersion: "2021-10-21",
// });

// const builder = ImageUrlBuilder(client);
// export const urlFor = (source) => builder.image(source);

// export default client;