// Constructores de datos estructurados (schema.org) para SEOHead.
const SITE = "https://afortunadoscr.com";

const address = {
  "@type": "PostalAddress",
  addressLocality: "La Fortuna",
  addressRegion: "Alajuela",
  addressCountry: "CR",
};

export const organization = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "@id": `${SITE}/#organization`,
  name: "Afortunados",
  url: SITE,
  logo: `${SITE}/faviconA.png`,
  image: `${SITE}/og-default.jpg`,
  email: "info@afortunados.cr",
  telephone: "+50684597077",
  address,
  sameAs: [
    "https://www.instagram.com/afortunadoscr/",
    "https://www.facebook.com/Afortunadoscr/",
  ],
};

export function hotel(opts: { name: string; path: string; description: string; image?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "@id": `${SITE}${opts.path}#hotel`,
    name: opts.name,
    url: `${SITE}${opts.path}`,
    description: opts.description,
    image: new URL(opts.image ?? "/og-default.jpg", SITE).href,
    telephone: "+50684597077",
    address,
    parentOrganization: { "@id": `${SITE}/#organization` },
  };
}

export function hotelRoom(opts: { name: string; path: string; description: string; image?: string; hotelPath: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "HotelRoom",
    name: opts.name,
    url: `${SITE}${opts.path}`,
    description: opts.description,
    ...(opts.image && { image: new URL(opts.image, SITE).href }),
    containedInPlace: { "@id": `${SITE}${opts.hotelPath}#hotel` },
  };
}

export function touristTrip(opts: { name: string; path: string; description?: string; image?: string; price?: number }) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: opts.name,
    url: `${SITE}${opts.path}`,
    ...(opts.description && { description: opts.description }),
    ...(opts.image && { image: new URL(opts.image, SITE).href }),
    ...(opts.price && {
      offers: { "@type": "Offer", price: opts.price, priceCurrency: "USD", url: `${SITE}${opts.path}` },
    }),
    provider: { "@id": `${SITE}/#organization` },
  };
}
