/* empty css                                */
import { c as createComponent, m as maybeRenderHead, e as addAttribute, d as renderTemplate, g as createAstro, f as renderComponent, r as renderHead } from '../chunks/astro/server_0zlbAbnM.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { $ as $$HeaderPages } from '../chunks/HeaderPages_C9iZXJtP.mjs';
import { $ as $$Footer } from '../chunks/Footer_CRNz6cnf.mjs';
import { $ as $$Hreflang } from '../chunks/Hreflang_CRzrx2EL.mjs';
import { $ as $$ToursTeaser } from '../chunks/ToursTeaser_pe-NrVF1.mjs';
import { $ as $$WhatsAppButton } from '../chunks/WhatsAppButton_BFdYwW_-.mjs';
/* empty css                                 */
/* empty css                                        */
export { renderers } from '../renderers.mjs';

const villas = [
	{
		id: "/ecovilla",
		nombre: "ECO VILLAGE (Wild Town)",
		tipo: "villa",
		imagen: "https://i.ibb.co/0RFwnfqy/ecovilla.jpg",
		descripcionCorta: "Cabaña íntima con piscina privada, ideal para parejas, ubicada en las montañas con vista al valle.",
		capacidad: "2 personas"
	},
	{
		id: "/suenodorado",
		nombre: "Hotel Sueño Dorado",
		tipo: "hotel",
		imagen: "https://i.ibb.co/9kFXhhpd/fotohotel.jpg",
		descripcionCorta: "Hotel y Aguas Termales.",
		capacidad: "1 Habitaciones"
	},
	{
		id: "/monte-real",
		nombre: "Hotel Monte Real",
		tipo: "hotel",
		imagen: "https://i.ibb.co/7xbm6znD/monterealafuera.jpg",
		descripcionCorta: "Sumérgete en la tranquilidad de nuestras instalaciones",
		capacidad: "30 Habitaciones"
	},
	{
		id: "/lafortuna-downtown",
		nombre: "Hotel La Fortuna Downtown",
		tipo: "hotel",
		imagen: "https://i.ibb.co/Kj8qP2nn/fondoprincipal.png",
		descripcionCorta: "¡En el corazón de las experiencias!",
		capacidad: "19 Habitaciones"
	},
	{
		id: "/catarataresort",
		nombre: "Hotel Catarata Resort",
		tipo: "hotel",
		imagen: "https://cdn.arenalcloud.com/arenal-a65b6eb9-29d7-4dec-9784-b1b37ff7dfce-afortunados/POOL_YARD_eace1389.jpg",
		descripcionCorta: "Resort cerca de las cataratas con todas las comodidades y tours incluidos.",
		capacidad: "40 Habitaciones"
	}
];

const $$Villas = createComponent(($$result, $$props, $$slots) => {
  const topTours = [
    {
      title: "Arenal Rafting Adventure",
      description: "Top installed tour with guides and safety gear.",
      info: "Popular stay at Catarata Resort + rafting package.",
      image: "https://cdn.arenalcloud.com/arenal-a65b6eb9-29d7-4dec-9784-b1b37ff7dfce-afortunados/rafting_1ccfa83f.png",
      link: "/tours"
    },
    {
      title: "Arenal Volcano & Waterfall Tour",
      description: "Best seller for nature lovers, great for hotel guests.",
      info: "Combines Catarata Resort comfort with natural wonders.",
      image: "https://cdn.arenalcloud.com/arenal-a65b6eb9-29d7-4dec-9784-b1b37ff7dfce-afortunados/puente_09973237.png",
      link: "/tours"
    },
    {
      title: "Wildlife and Hanging Bridges",
      description: "Most reserved eco-experience near Catarata Resort.",
      info: "Includes transport from hotel and local guide.",
      image: "https://cdn.arenalcloud.com/arenal-a65b6eb9-29d7-4dec-9784-b1b37ff7dfce-afortunados/cabalgata__1__f01d99a8.jpg",
      link: "/tours"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-16 bg-white text-gray-800 pt-32"> <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> <h2 class="text-3xl md:text-4xl font-bold mb-4 leading-tight">
OPCIONES PARA HOSPEDARSE EN LA FORTUNA
</h2> <p class="max-w-2xl mx-auto mb-8 text-gray-600 text-base md:text-lg">
Al hospedarte con nosotros se incluirá el pase del día en las aguas termales del Hotel Sueño Dorado...
</p> <!-- Filtros --> <div class="flex flex-wrap justify-center gap-2 mb-10" id="filtros"> <button class="filter-btn bg-emerald-100 text-emerald-800 px-4 py-1 rounded-full font-semibold text-sm md:text-base" data-tipo="todas">Todas</button> <button class="filter-btn px-4 py-1 rounded-full border text-sm md:text-base" data-tipo="villa">Villa</button> <button class="filter-btn px-4 py-1 rounded-full border text-sm md:text-base" data-tipo="hotel">Hoteles</button> </div> <!-- Grid totalmente responsiva --> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="card-grid"> ${villas.map((villa) => renderTemplate`<div class="card bg-white border rounded-xl shadow-sm p-4 text-left relative w-full"${addAttribute(villa.tipo, "data-tipo")}> ${villa.destacado && renderTemplate`<span class="absolute top-4 left-4 bg-red-500 text-white text-xs px-2 py-1 rounded"> ${villa.destacado} </span>`} <img${addAttribute(villa.imagen, "src")}${addAttribute(villa.nombre, "alt")} class="rounded-lg w-full h-52 object-cover mb-4"> <h3 class="font-semibold text-lg mb-1">${villa.nombre}</h3> <p class="text-sm text-gray-600 mb-2 line-clamp-3">${villa.descripcionCorta}</p> <p class="text-sm text-gray-700 font-medium mb-3">Capacidad: ${villa.capacidad}</p> <a${addAttribute(`${villa.id}`, "href")} class="inline-block border border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white transition px-4 py-2 rounded-full text-sm font-semibold w-full text-center">
+ INFO
</a> </div>`)} </div> <br> <br> <!-- Banner estilo teaser: 3 tours más reservados --> <div class="max-w-6xl mx-auto mb-12 p-6 bg-emerald-50 rounded-3xl shadow-sm"> <div class="text-center mb-6"> <span class="text-xs uppercase tracking-[0.3em] text-emerald-700">Tours más reservados</span> <h3 class="mt-2 text-2xl md:text-3xl font-bold">Los 3 tours top para considerar antes de reservar hospedaje</h3> <p class="mt-2 text-gray-700">Incluye Hotel Catarata Resort en tu plan para una experiencia completa en Arenal.</p> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-4"> ${topTours.map((tour) => renderTemplate`<div class="rounded-2xl overflow-hidden bg-white border border-emerald-100 shadow-sm"> <img${addAttribute(tour.image, "src")}${addAttribute(tour.title, "alt")} class="w-full h-40 object-cover" loading="lazy"> <div class="p-4"> <h4 class="font-semibold text-lg mb-1">${tour.title}</h4> <p class="text-sm text-gray-600 mb-1">${tour.description}</p> <p class="text-xs text-gray-500 mb-3">${tour.info}</p> <a${addAttribute(tour.link, "href")} class="inline-block w-full text-center bg-emerald-600 text-white px-3 py-2 rounded-full text-sm font-semibold hover:bg-emerald-700 transition">Conocer tour</a> </div> </div>`)} </div> </div> </div> </section> <!-- JS para filtrar --> `;
}, "C:/Users/gamer/Documents/GitHub/afortuna2new/src/components/vacacionales/Villas.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://afortunadoscr.com");
const $$VacacionalesLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$VacacionalesLayout;
  return renderTemplate(_a || (_a = __template(['<html lang="es" data-astro-cid-j7iegqch> <head><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/faviconA.png"><meta name="generator"', '><title>Afortunados - Pura Vida</title><meta charset="UTF-8">', '<script>\n      function gtagSendEvent(url, target) {\n        var isBlank = target === "_blank";\n        var navigate = function () {\n          if (!isBlank && typeof url === "string") {\n            window.location = url;\n          }\n        };\n        if (typeof gtag === "function") {\n          gtag("event", "conversion_event_outbound_click", {\n            event_callback: navigate,\n            event_timeout: 2000,\n          });\n          return !isBlank;\n        }\n        navigate();\n        return !isBlank;\n      }\n    <\/script>', '</head> <body class="flex flex-col min-h-screen bg-white text-gray-900" data-astro-cid-j7iegqch> ', ' <div class="flex-1" data-astro-cid-j7iegqch> ', " </div> <div data-astro-cid-j7iegqch> ", " ", " ", " </div> </body></html>"])), addAttribute(Astro2.generator, "content"), renderComponent($$result, "Hreflang", $$Hreflang, { "data-astro-cid-j7iegqch": true }), renderHead(), renderComponent($$result, "Header", $$HeaderPages, { "enHref": "/en/vacacionales", "data-astro-cid-j7iegqch": true }), renderComponent($$result, "Villas", $$Villas, { "data-astro-cid-j7iegqch": true }), renderComponent($$result, "ToursTeaser", $$ToursTeaser, { "data-astro-cid-j7iegqch": true }), renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-j7iegqch": true }), renderComponent($$result, "WhatsAppButton", $$WhatsAppButton, { "data-astro-cid-j7iegqch": true }));
}, "C:/Users/gamer/Documents/GitHub/afortuna2new/src/layouts/VacacionalesLayout.astro", void 0);

const $$Vacacionales = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "VacacionalesLayout", $$VacacionalesLayout, {})}`;
}, "C:/Users/gamer/Documents/GitHub/afortuna2new/src/pages/vacacionales.astro", void 0);

const $$file = "C:/Users/gamer/Documents/GitHub/afortuna2new/src/pages/vacacionales.astro";
const $$url = "/vacacionales";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Vacacionales,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
