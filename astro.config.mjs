import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://afortunadoscr.com",

  adapter: netlify(),

  integrations: [
    react(),
    sitemap(),
    tailwind(),
  ],

  output: "static",
  trailingSlash: "ignore",
});
