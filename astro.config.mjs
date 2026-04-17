import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://afortunadoscr.com",

  adapter: netlify(),

  integrations: [
    react(),
    sitemap(),
  ],

  output: "static",
  trailingSlash: "ignore",
});
