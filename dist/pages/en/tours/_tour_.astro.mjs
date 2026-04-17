/* empty css                                      */
import { g as createAstro, c as createComponent, d as renderTemplate, f as renderComponent, h as renderSlot, r as renderHead, m as maybeRenderHead, e as addAttribute } from '../../../chunks/astro/server_0zlbAbnM.mjs';
import 'kleur/colors';
import 'html-escaper';
/* empty css                                       */
import { $ as $$Hreflang } from '../../../chunks/Hreflang_CRzrx2EL.mjs';
import { $ as $$WhatsAppButtonEn } from '../../../chunks/WhatsAppButtonEn_BKhDBu1J.mjs';
import { $ as $$Modal } from '../../../chunks/Modal_rqKFveYP.mjs';
import { t as toursData } from '../../../chunks/tours_en_CkBeGt4D.mjs';
export { renderers } from '../../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro("https://afortunadoscr.com");
const $$BaseLayoutEn = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BaseLayoutEn;
  const { title = "Afortunados - Pura Vida" } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description" content="Afortunados in La Fortuna, Costa Rica. Tours, stays, and local experiences."><title>', "</title>", '<script>\n      function gtagSendEvent(url, target) {\n        var isBlank = target === "_blank";\n        var navigate = function () {\n          if (!isBlank && typeof url === "string") {\n            window.location = url;\n          }\n        };\n        if (typeof gtag === "function") {\n          gtag("event", "conversion_event_outbound_click", {\n            event_callback: navigate,\n            event_timeout: 2000,\n          });\n          return !isBlank;\n        }\n        navigate();\n        return !isBlank;\n      }\n    <\/script>', '</head> <body class="bg-white text-gray-800 font-sans antialiased"> ', " ", " </body></html>"])), title, renderComponent($$result, "Hreflang", $$Hreflang, {}), renderHead(), renderSlot($$result, $$slots["default"]), renderComponent($$result, "WhatsAppButton", $$WhatsAppButtonEn, {}));
}, "C:/Users/gamer/Documents/GitHub/afortuna2new/src/layouts/BaseLayoutEn.astro", void 0);

const $$Astro$1 = createAstro("https://afortunadoscr.com");
const $$tour$1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$tour$1;
  const { tour } = Astro2.props;
  const whatsappText = encodeURIComponent(`Hi, I want to book the tour ${tour.nombre}`);
  const heroImage = tour.imagenDetalle ?? tour.imagen;
  const shortDescription = tour.descripcionCorta ?? tour.descripcion;
  const longDescription = tour.descripcionLarga ?? tour.descripcion;
  return renderTemplate`${maybeRenderHead()}<main class="max-w-5xl mx-auto py-10 px-4 space-y-6"> <div class="flex items-center"> <a href="/en/tours" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 transition">
Back to tours
</a> </div> <div class="flex flex-col md:flex-row gap-6"> <img${addAttribute(heroImage, "src")}${addAttribute(tour.nombre, "alt")} class="w-full md:w-1/2 rounded-xl object-cover shadow" loading="lazy"> <div class="flex-1 space-y-3"> <h1 class="text-3xl font-bold">${tour.nombre}</h1> ${shortDescription ? renderTemplate`<p class="text-gray-700">${shortDescription}</p>` : null} <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-600"> <p><strong>Duration:</strong> ${tour.duracion}</p> <p><strong>Location:</strong> ${tour.ubicacion}</p> <p><strong>Difficulty:</strong> ${tour.dificultad}</p> <p><strong>Price:</strong> $${tour.precio}</p> </div> ${tour.tags?.length ? renderTemplate`<div class="flex flex-wrap gap-2"> ${tour.tags.map((tag) => renderTemplate`<span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs">${tag}</span>`)} </div>` : null} <div class="flex gap-3 pt-2"> <a${addAttribute(`https://wa.me/506XXXXXXXX?text=${whatsappText}`, "href")} onclick="return gtagSendEvent(this.href, this.target)" target="_blank" class="bg-green-100 text-green-800 px-4 py-2 rounded border border-green-300 hover:bg-green-200 transition">
Book via WhatsApp
</a> </div> </div> </div> ${longDescription ? renderTemplate`<section class="space-y-3"> <h2 class="text-2xl font-semibold">Description</h2> <p class="text-gray-700 leading-relaxed">${longDescription}</p> </section>` : null} ${tour.queEsperar?.length ? renderTemplate`<section class="space-y-3"> <h2 class="text-2xl font-semibold">What to expect</h2> <ul class="list-disc list-inside space-y-2 text-gray-700"> ${tour.queEsperar.map((item) => renderTemplate`<li>${item}</li>`)} </ul> </section>` : null} ${tour.incluye?.length ? renderTemplate`<section class="space-y-3"> <h2 class="text-2xl font-semibold">Includes</h2> <ul class="list-disc list-inside space-y-2 text-gray-700"> ${tour.incluye.map((item) => renderTemplate`<li>${item}</li>`)} </ul> </section>` : null} ${renderComponent($$result, "Modal", $$Modal, { "id": "modal-info", "title": "Tour Description" }, { "default": ($$result2) => renderTemplate` <div class="space-y-4 text-sm text-left leading-relaxed"> <img${addAttribute(heroImage, "src")}${addAttribute(`Tour detail ${tour.nombre}`, "alt")} class="rounded-lg mb-4 object-cover w-full" loading="lazy"> ${longDescription ? renderTemplate`<p>${longDescription}</p>` : null} ${tour.incluye?.length ? renderTemplate`<div> <p class="font-semibold mb-2">Includes:</p> <ul class="list-disc list-inside space-y-1"> ${tour.incluye.map((item) => renderTemplate`<li>${item}</li>`)} </ul> </div>` : null} </div> ` })} </main>`;
}, "C:/Users/gamer/Documents/GitHub/afortuna2new/src/components/en/tours/[tour].astro", void 0);

const toursDetailData = [
	{
		slug: "arenal-one-day-package-tour",
		nombre: "Arenal One Day Package Tour",
		descripcionCorta: "The perfect day to experience the best of La Fortuna in a single adventure.",
		descripcionLarga: "This package is the most complete way to experience the most famous attractions of La Fortuna in one day, exploring rainforest, waterfalls, volcanoes, and wildlife with expert guides.\n\nThe adventure begins with a visit to the Mistico Park Hanging Bridges, a two-hour walk through tropical forests where you can spot monkeys, toucans, sloths, wild turkeys, and a wide variety of birds. Walking among the treetops brings a unique sense of freedom and awe.\n\nNext we continue to the impressive La Fortuna Waterfall, one of Costa Rica's iconic natural sites. After the descent, you can relax in its crystal-clear waters and recharge with a traditional Costa Rican lunch.\n\nThe next stop takes you to the Lava 1968 trails, a reserve that shows how the power of the volcano transformed the landscape. Here you can enjoy spectacular views of Arenal Volcano and Lake Arenal while learning about its history, activity, and the flora and fauna that surround it.\n\nTo close the day, you have the option to add a visit to the hot springs of your choice (optional), a perfect experience to relax body and mind after a day full of nature and emotions.",
		imagen: "https://cdn.arenalcloud.com/arenal-a65b6eb9-29d7-4dec-9784-b1b37ff7dfce-afortunados/puente_09973237.png",
		imagenDetalle: "https://cdn.arenalcloud.com/arenal-a65b6eb9-29d7-4dec-9784-b1b37ff7dfce-afortunados/puente_09973237.png",
		dificultad: "Moderate",
		duracion: "9 hours",
		ubicacion: "La Palma",
		tags: [
			"Adventure",
			"Scenery"
		],
		precio: 160,
		queEsperar: [
			"Unforgettable walks at the most iconic spots of La Fortuna.",
			"Pure nature, wildlife, and impressive views.",
			"An itinerary designed to make the most of every moment.",
			"Expert guides who explain history, geology, flora, and fauna.",
			"A full day that combines adventure, knowledge, and relaxation."
		],
		incluye: [
			"Insurance",
			"Transportation",
			"Bilingual guide",
			"Park entrance fees",
			"Bottled water",
			"Traditional lunch"
		]
	},
	{
		slug: "white-water-rafting",
		nombre: "White Water Rafting II-III",
		descripcionCorta: "Rafting on the Sarapiqui River with Class II-III rapids, ideal for families and those seeking moderate excitement in a natural setting.",
		descripcionLarga: "Get ready for an unforgettable experience full of excitement, nature, and fun as you paddle through the crystal-clear waters of the majestic Sarapiqui River. From La Fortuna, we head to this tropical paradise where a day of adventure and connection with nature awaits.\n\nUpon arrival, our expert guides provide a complete safety briefing and equipment instructions. Then we begin the 13 kilometer (8 mile) descent down the river, navigating thrilling rapids and calm stretches of water that let you admire the lush flora and fauna around you.\n\nDuring the trip, we make a special stop to refresh and taste delicious tropical fruits from the region. At the end of the adventure, we visit a local restaurant to enjoy a traditional Costa Rican lunch.\n\nThis tour is ideal for the whole family and can be enjoyed safely.",
		imagen: "https://cdn.arenalcloud.com/arenal-a65b6eb9-29d7-4dec-9784-b1b37ff7dfce-afortunados/rafting_1ccfa83f.png",
		imagenDetalle: "https://cdn.arenalcloud.com/arenal-a65b6eb9-29d7-4dec-9784-b1b37ff7dfce-afortunados/rafting_1ccfa83f.png",
		dificultad: "Moderate",
		duracion: "3 hours",
		ubicacion: "Sarapiqui River, Costa Rica",
		tags: [
			"Rafting",
			"Adventure",
			"Nature",
			"Family",
			"Sarapiqui River",
			"Water sports",
			"Ecotourism",
			"Adrenaline",
			"Outdoor activities",
			"Guided tour"
		],
		precio: 95,
		queEsperar: [
			"Safety briefing and equipment instructions.",
			"13 kilometer descent through Class II-III rapids.",
			"Stop to refresh and taste tropical fruits.",
			"Traditional Costa Rican lunch at the end."
		],
		incluye: [
			"Transportation",
			"Guide",
			"Life jacket",
			"Towel",
			"Fruits",
			"Water refill",
			"Lunch",
			"Juice or beer"
		]
	},
	{
		slug: "eco-atv-tour-la-fortuna",
		nombre: "Eco ATV Tour - La Fortuna Adventure",
		descripcionCorta: "ATV experience that combines adventure, nature, and local culture at the foot of Arenal Volcano.",
		descripcionLarga: "The Eco ATV Tour combines pure adventure, wild nature, and local culture in a single route. The adventure starts at the private La Naciente farm, just minutes from downtown La Fortuna. After a safety briefing and a practice circuit, you will be ready to take control of the ATV and enter a world of jungle, mud, and impressive views of Arenal Volcano.\n\nThe La Naciente trails cross primary forest, muddy zones, and challenging paths surrounded by giant trees and tropical fauna. Along the way we stop at Quebrada Platanillo, a natural basin that feeds the Arenal River and local communities. In this area you can also observe the famous Watusi bulls, recognized for their huge and striking horns.\n\nThe experience continues with a visit to the picturesque village of La Guaria, where you can see rural Costa Rican life up close by visiting its church, its old corner store, and its intact traditions. From there we continue on open trails, crossing natural puddles and reaching the bank of the Arenal River (if conditions allow), where we make a pause for memorable photos.\n\nAt the end of the route, we relax at Rancho La Poza, where you can enjoy a snack and unwind in the outdoor pool. It is a perfect adventure for those seeking adrenaline, authentic culture, and unforgettable landscapes.",
		imagen: "https://cdn.arenalcloud.com/arenal-a65b6eb9-29d7-4dec-9784-b1b37ff7dfce-afortunados/EcologicalATV_1005f75d.jpg",
		imagenDetalle: "https://cdn.arenalcloud.com/arenal-a65b6eb9-29d7-4dec-9784-b1b37ff7dfce-afortunados/EcologicalATV_1005f75d.jpg",
		dificultad: "Moderate",
		duracion: "2.5 - 3 hours",
		ubicacion: "La Fortuna, Costa Rica",
		tags: [
			"ATV",
			"Adventure",
			"Nature",
			"Arenal Volcano",
			"Local culture",
			"Jungle",
			"Adrenaline",
			"Guided tour",
			"Outdoor activities"
		],
		precio: 105,
		queEsperar: [
			"Drive an ATV through jungle trails and muddy areas.",
			"Spectacular views of Arenal Volcano.",
			"Stop at Quebrada Platanillo and see Watusi bulls.",
			"Visit the rural village of La Guaria.",
			"Cross puddles, challenging paths, and possibly visit the Arenal River.",
			"Final break with a snack and outdoor pool.",
			"Safe, guided adventure suitable for beginners."
		],
		incluye: [
		]
	},
	{
		slug: "arenal-volcano-horseback-ride",
		nombre: "Arenal Volcano Horseback Ride",
		descripcionCorta: "Horseback ride on a private farm with views of Arenal Volcano, tropical forest, and access to hot springs at the end.",
		descripcionLarga: "Experiencing a horseback ride in La Fortuna is not just about riding a horse: it is connecting with nature at its most authentic rhythm. This tour takes place on a private farm surrounded by primary and secondary forest, very close to Arenal Volcano National Park, which allows privileged panoramic views of the volcano canyon, its old lava flows, and the tropical rainforest that surrounds it.\n\nWith healthy, gentle, well trained horses, you begin an unforgettable journey crossing rivers, natural trails, and open areas where you can admire the plains of San Carlos at their best. Our guides, experts in nature and local wildlife, share valuable information about ecosystems, giant trees, tropical birds, and animals often seen in the area, such as toucans, hawks, and monkeys.\n\nAt the end of the ride, you will enjoy access to the hot spring pools at Montana de Fuego Hotel, which include three hot water pools and two cold pools, the perfect complement to relax your body after the adventure. An ideal experience for families, couples, nature lovers, and travelers looking for an authentic, safe, and memorable day.",
		imagen: "https://cdn.arenalcloud.com/arenal-a65b6eb9-29d7-4dec-9784-b1b37ff7dfce-afortunados/cabalgata__1__f01d99a8.jpg",
		imagenDetalle: "https://cdn.arenalcloud.com/arenal-a65b6eb9-29d7-4dec-9784-b1b37ff7dfce-afortunados/cabalgata__1__f01d99a8.jpg",
		dificultad: "Moderate",
		duracion: "3 hours",
		ubicacion: "La Fortuna, Costa Rica",
		tags: [
			"Horseback riding",
			"Nature",
			"Arenal Volcano",
			"Hot springs",
			"Family",
			"Adventure",
			"Horses",
			"Guided tour"
		],
		precio: 65,
		queEsperar: [
			"Ride well trained horses on a private farm.",
			"Cross rivers and natural tropical forest trails.",
			"Views of Arenal Volcano and old lava fields.",
			"Close contact with local wildlife.",
			"Relaxation in hot spring pools at the end.",
			"Safe activity suitable for adults and children."
		],
		incluye: [
			"Insurance",
			"Transportation",
			"Full equipment",
			"Bilingual guides",
			"Entrance fees",
			"Bottled water",
			"Ponchos in case of rain",
			"Access to hot spring pools"
		]
	},
	{
		slug: "coffee-and-chocolate-tour",
		nombre: "Coffee and Chocolate Tour",
		descripcionCorta: "Guided tour at a family farm near Arenal Volcano to learn the coffee, chocolate, and sugarcane process with tastings.",
		descripcionLarga: "Discover the rich heritage of coffee and chocolate production on a guided tour in La Fortuna, Costa Rica. Experience the journey from seed to cup near the scenic Arenal Volcano.\n\nDive into the world of coffee and chocolate at North Fields Coffee, a family farm nestled in the lush landscapes of La Fortuna near Arenal Volcano. Begin your visit with a warm welcome from expert guides passionate about sustainable agriculture.\n\nDuring the tour, you will learn organic farming techniques first hand, experience traditional sugarcane processing, taste freshly made coffee and chocolate, and learn about the local fauna that supports the organic cultivation process.",
		imagen: "https://cdn.arenalcloud.com/arenal-a65b6eb9-29d7-4dec-9784-b1b37ff7dfce-afortunados/cafe_60848456.jpg",
		imagenDetalle: "https://cdn.arenalcloud.com/arenal-a65b6eb9-29d7-4dec-9784-b1b37ff7dfce-afortunados/cafe_60848456.jpg",
		dificultad: "Easy",
		duracion: "2.5 hours",
		ubicacion: "La Fortuna, Costa Rica",
		tags: [
			"Coffee",
			"Chocolate",
			"Cultural tour",
			"Gastronomic experience",
			"Sustainability",
			"Organic farming",
			"Arenal Volcano",
			"La Fortuna",
			"Rural tourism",
			"Family"
		],
		precio: 60,
		queEsperar: [
			"Guided visit to a family farm near Arenal Volcano.",
			"Learn the coffee, chocolate, and sugarcane process.",
			"Tastings of freshly made coffee and chocolate.",
			"Focus on sustainable agriculture and local fauna."
		],
		incluye: [
			"Guide",
			"Coffee",
			"Chocolate tasting",
			"Sugarcane tasting",
			"Water",
			"Local taxes",
			"Hotel pick up and drop off service (no more than 15 minutes from the La Fortuna area)"
		]
	}
];

const $$Astro = createAstro("https://afortunadoscr.com");
async function getStaticPaths() {
  const slugify = (name) => name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  const toursBase = toursData.map((tour) => ({
    ...tour,
    slug: tour.slug ?? slugify(tour.nombre)
  }));
  const toursDetail = toursDetailData.map((tour) => ({
    ...tour,
    slug: tour.slug ?? slugify(tour.nombre)
  }));
  const buildTour = (slug) => {
    const base = toursBase.find((t) => t.slug === slug) ?? {};
    const detail = toursDetail.find((t) => t.slug === slug) ?? {};
    return { ...base, ...detail };
  };
  return toursBase.map((tour) => ({
    params: { tour: tour.slug },
    props: { tour: buildTour(tour.slug) }
  }));
}
const $$tour = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$tour;
  const { tour } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$BaseLayoutEn, { "title": `Tour: ${tour.nombre}` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TourDetail", $$tour$1, { "tour": tour })} ` })}`;
}, "C:/Users/gamer/Documents/GitHub/afortuna2new/src/pages/en/tours/[tour].astro", void 0);

const $$file = "C:/Users/gamer/Documents/GitHub/afortuna2new/src/pages/en/tours/[tour].astro";
const $$url = "/en/tours/[tour]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$tour,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
