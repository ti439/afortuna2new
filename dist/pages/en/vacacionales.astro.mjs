/* empty css                                   */
import { c as createComponent, m as maybeRenderHead, e as addAttribute, d as renderTemplate, g as createAstro, f as renderComponent, r as renderHead } from '../../chunks/astro/server_0zlbAbnM.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { $ as $$HeaderPagesEn } from '../../chunks/HeaderPagesEn_CZ3tPm_s.mjs';
import { $ as $$FooterEn } from '../../chunks/FooterEn_CCgEsIWq.mjs';
import { $ as $$Hreflang } from '../../chunks/Hreflang_CRzrx2EL.mjs';
import { $ as $$ToursTeaserEN } from '../../chunks/ToursTeaserEN_DMYl_y2B.mjs';
import { $ as $$WhatsAppButtonEn } from '../../chunks/WhatsAppButtonEn_BKhDBu1J.mjs';
/* empty css                                    */
/* empty css                                           */
export { renderers } from '../../renderers.mjs';

const villasEn = [
	{
		id: "/ecovilla",
		nombre: "Eco Village (Wild Town)",
		tipo: "villa",
		imagen: "https://cdn.arenalcloud.com/arenal-a65b6eb9-29d7-4dec-9784-b1b37ff7dfce-afortunados/ecovilla_dcfd0dc3.jpg",
		descripcionCorta: "Intimate cabin with a private pool, ideal for couples, located in the mountains with valley views.",
		capacidad: "2 guests"
	},
	{
		id: "/suenodorado",
		nombre: "Hotel Sueno Dorado",
		tipo: "hotel",
		imagen: "https://i.ibb.co/9kFXhhpd/fotohotel.jpg",
		descripcionCorta: "Hotel and hot springs.",
		capacidad: "30 rooms"
	},
	{
		id: "/monte-real",
		nombre: "Hotel Monte Real",
		tipo: "hotel",
		imagen: "https://i.ibb.co/7xbm6znD/monterealafuera.jpg",
		descripcionCorta: "Immerse yourself in the tranquility of our facilities.",
		capacidad: "30 rooms"
	},
	{
		id: "/lafortuna-downtown",
		nombre: "Hotel La Fortuna Downtown",
		tipo: "hotel",
		imagen: "https://i.ibb.co/Kj8qP2nn/fondoprincipal.png",
		descripcionCorta: "In the heart of experiences!",
		capacidad: "19 rooms"
	},
	{
		id: "/catarataresort",
		nombre: "Hotel Catarata Resort",
		tipo: "hotel",
		imagen: "https://cdn.arenalcloud.com/arenal-a65b6eb9-29d7-4dec-9784-b1b37ff7dfce-afortunados/POOL_YARD_eace1389.jpg",
		descripcionCorta: "Resort close to waterfalls with full amenities and tour packages included.",
		capacidad: "40 rooms"
	}
];

const $$VillasEn = createComponent(($$result, $$props, $$slots) => {
  const villasWithEnUrls = villasEn.map((villa) => ({
    ...villa,
    enUrl: `/en${villa.id}`
  }));
  return renderTemplate`${maybeRenderHead()}<section class="py-16 bg-white text-gray-800 pt-32"> <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> <h2 class="text-3xl md:text-4xl font-bold mb-4 leading-tight">
ACCOMMODATION OPTIONS IN LA FORTUNA
</h2> <p class="max-w-2xl mx-auto mb-8 text-gray-600 text-base md:text-lg">
By staying with us, your visit includes a day pass to the thermal waters of Hotel Sueno Dorado.
</p> <!-- Filters --> <div class="flex flex-wrap justify-center gap-2 mb-10" id="filtros"> <button class="filter-btn bg-emerald-100 text-emerald-800 px-4 py-1 rounded-full font-semibold text-sm md:text-base" data-tipo="todas">All</button> <button class="filter-btn px-4 py-1 rounded-full border text-sm md:text-base" data-tipo="villa">Villa</button> <button class="filter-btn px-4 py-1 rounded-full border text-sm md:text-base" data-tipo="hotel">Hotels</button> </div> <!-- Responsive grid --> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="card-grid"> ${villasWithEnUrls.map((villa) => renderTemplate`<div class="card bg-white border rounded-xl shadow-sm p-4 text-left relative w-full"${addAttribute(villa.tipo, "data-tipo")}> ${villa.destacado && renderTemplate`<span class="absolute top-4 left-4 bg-red-500 text-white text-xs px-2 py-1 rounded"> ${villa.destacado} </span>`} <img${addAttribute(villa.imagen, "src")}${addAttribute(villa.nombre, "alt")} class="rounded-lg w-full h-52 object-cover mb-4"> <h3 class="font-semibold text-lg mb-1">${villa.nombre}</h3> <p class="text-sm text-gray-600 mb-2 line-clamp-3">${villa.descripcionCorta}</p> <p class="text-sm text-gray-700 font-medium mb-3">Capacity: ${villa.capacidad}</p> <a${addAttribute(villa.enUrl, "href")} class="inline-block border border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white transition px-4 py-2 rounded-full text-sm font-semibold w-full text-center">
MORE INFO
</a> </div>`)} </div> </div> </section> <!-- JS for filtering --> `;
}, "C:/Users/gamer/Documents/GitHub/afortuna2new/src/components/vacacionales/en/VillasEn.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://afortunadoscr.com");
const $$VacacionalesLayoutEn = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$VacacionalesLayoutEn;
  return renderTemplate(_a || (_a = __template(['<html lang="en" data-astro-cid-hfyflyux> <head><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/faviconA.png"><meta name="generator"', '><title>Afortunados - Pura Vida</title><meta charset="UTF-8">', '<script>\n      function gtagSendEvent(url, target) {\n        var isBlank = target === "_blank";\n        var navigate = function () {\n          if (!isBlank && typeof url === "string") {\n            window.location = url;\n          }\n        };\n        if (typeof gtag === "function") {\n          gtag("event", "conversion_event_outbound_click", {\n            event_callback: navigate,\n            event_timeout: 2000,\n          });\n          return !isBlank;\n        }\n        navigate();\n        return !isBlank;\n      }\n    <\/script>', '</head> <body class="flex flex-col min-h-screen bg-white text-gray-900" data-astro-cid-hfyflyux> ', ' <div class="flex-1" data-astro-cid-hfyflyux> ', " </div> <div data-astro-cid-hfyflyux> ", " ", " ", " </div> </body></html>"])), addAttribute(Astro2.generator, "content"), renderComponent($$result, "Hreflang", $$Hreflang, { "data-astro-cid-hfyflyux": true }), renderHead(), renderComponent($$result, "Header", $$HeaderPagesEn, { "esHref": "/vacacionales", "data-astro-cid-hfyflyux": true }), renderComponent($$result, "Villas", $$VillasEn, { "data-astro-cid-hfyflyux": true }), renderComponent($$result, "ToursTeaser", $$ToursTeaserEN, { "data-astro-cid-hfyflyux": true }), renderComponent($$result, "Footer", $$FooterEn, { "data-astro-cid-hfyflyux": true }), renderComponent($$result, "WhatsAppButton", $$WhatsAppButtonEn, { "data-astro-cid-hfyflyux": true }));
}, "C:/Users/gamer/Documents/GitHub/afortuna2new/src/layouts/VacacionalesLayoutEn.astro", void 0);

const $$Vacacionales = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "VacacionalesLayout", $$VacacionalesLayoutEn, {})}`;
}, "C:/Users/gamer/Documents/GitHub/afortuna2new/src/pages/en/vacacionales.astro", void 0);

const $$file = "C:/Users/gamer/Documents/GitHub/afortuna2new/src/pages/en/vacacionales.astro";
const $$url = "/en/vacacionales";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Vacacionales,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
