import { createDirectus, rest } from "@directus/sdk";

const DIRECTUS_CDN_URL = process.env.NEXT_PUBLIC_DIRECTUS_CDN_URL;

const directus = createDirectus(DIRECTUS_CDN_URL).with(
  rest({
    onRequest: (options) => ({ ...options, cache: "no-store" }),
  })
);

export default directus;
