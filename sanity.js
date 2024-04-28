// import client from "@sanity/client";

// const client = sanityClient({
//   projectId: "qw0xusny",
//   dataset: "production",
//   useCdn: true,
//   apiVersion: "2021-10-21",
// });

// const sanityClient = client({
//   projectId: "npcegap4",
//   apiVersion: "2021-10-21",
//   dataset: "production",
//   useCdn: true,
// });

// sanity.js
import { createClient } from "@sanity/client";
// Import using ESM URL imports in environments that supports it:
// import {createClient} from 'https://esm.sh/@sanity/client'
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "qwoxusny",
  dataset: "production",
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: "2023-05-03", // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

// uses GROQ to query content: https://www.sanity.io/docs/groq

export async function updateDocumentTitle(_id, title) {
  const result = client.patch(_id).set({ title });
  return result;
}
