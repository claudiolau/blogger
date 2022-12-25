import { createClient } from "next-sanity";

export const projectId = (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ||
  "") satisfies String;
export const dataset = (process.env.NEXT_PUBLIC_SANITY_DATASET ||
  "") satisfies String;
export const apiVersion = (process.env.NEXT_PUBLIC_SANITY_API_VERSION ||
  "1") satisfies String;

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});
