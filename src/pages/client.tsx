import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "tl8h1ybg",
  dataset: "production",
  useCdn: false,
  apiVersion: "2021-08-31",
});
