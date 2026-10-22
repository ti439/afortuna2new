import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

// Páginas con noindex o duplicadas: fuera del sitemap
const EXCLUDED = ["/hoteles/", "/resetafortunados/", "/sueno-dorado/", "/en/sueno-dorado/"];

export default defineConfig({
  site: "https://afortunadoscr.com",

  adapter: netlify(),

  integrations: [
    react(),
    sitemap({
      filter: (page) => !EXCLUDED.some((path) => page === `https://afortunadoscr.com${path}`),
      i18n: { defaultLocale: "es", locales: { es: "es-CR", en: "en-US" } },
    }),
  ],

  image: {
    // Optimiza también las imágenes remotas del CDN propio
    domains: ["cdn.arenalcloud.com", "i.ibb.co"],
  },

  output: "static",
  trailingSlash: "ignore",
});
