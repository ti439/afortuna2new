/* empty css                                   */
import { g as createAstro, c as createComponent, f as renderComponent, m as maybeRenderHead, d as renderTemplate, e as addAttribute } from '../../chunks/astro/server_0zlbAbnM.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_KWyqBV07.mjs';
import { $ as $$HeaderPagesEn } from '../../chunks/HeaderPagesEn_CZ3tPm_s.mjs';
import { I as ImageCarousel } from '../../chunks/PhotoCarrusel_C4_SB5hv.mjs';
import { $ as $$ToursTeaserEN } from '../../chunks/ToursTeaserEN_DMYl_y2B.mjs';
export { renderers } from '../../renderers.mjs';

const villas = [
	{
		id: "ecovilla",
		titulo: "Eco Village",
		subtitulo: "Eco Village: love, privacy, and nature in perfect harmony",
		parrafoPrincipal: "Nestled in the mountains with breathtaking views of the valley and rainforest, Eco Village is an intimate cabin created especially for couples who want to celebrate romantic and special moments, surrounded by the lush beauty and calm of Costa Rica.",
		price: "$190.00",
		secciones: [
			{
				titulo: "Private cabin with king bed",
				contenido: "decorated with a modern and sophisticated design."
			},
			{
				titulo: "Exclusive private pool",
				contenido: "ideal for relaxing as a couple, with complete privacy."
			},
			{
				titulo: "Privileged forest and valley views",
				contenido: "creating a magical and romantic atmosphere."
			}
		],
		beneficios: [
			"Access to the hot springs at Hotel Sueno Dorado",
			"Private parking, air conditioning, TV, and total comfort to enjoy every minute together."
		],
		habitaciones: [
			"1 private room with its own bathroom",
			"Capacity for 2 guests (1 queen bed)",
			"Natural materials and forest views"
		],
		sustentabilidad: "We operate under sustainability principles: pools fed by the river, low-impact practices, and active conservation of the surrounding ecosystem.",
		cierre: "Surprise your partner with the ideal romantic getaway: book your stay at Eco Village now.",
		imagenPrincipal: "https://cdn.arenalcloud.com/arenal-a65b6eb9-29d7-4dec-9784-b1b37ff7dfce-afortunados/ecovilla_dcfd0dc3.jpg",
		imagenes: [
			{
				src: "https://cdn.arenalcloud.com/arenal-a65b6eb9-29d7-4dec-9784-b1b37ff7dfce-afortunados/piscina_a5e6b762.jpg"
			},
			{
				src: "https://cdn.arenalcloud.com/arenal-a65b6eb9-29d7-4dec-9784-b1b37ff7dfce-afortunados/afuera_843b1191.jpg"
			}
		],
		url: "https://reservations.orbebooking.com/Search/Init/AhA2g/es"
	},
	{
		id: "sueno-dorado",
		titulo: "Wake up to the majestic Arenal Volcano",
		subtitulo: "Exclusivity, private hot springs, and pure nature in the heart of La Fortuna.",
		parrafoPrincipal: "A story born in the heart of La Fortuna. Founded by the Hidalgo-Sanchez family, Hotel Sueno Dorado preserves the warmth and Costa Rican hospitality that makes every guest part of the family. The whisper of hot springs, the majesty of Arenal Volcano, and the symphony of the rainforest create the perfect setting to disconnect from the outside world and reconnect with what matters. True luxury is in the small details that make you feel at home.",
		price: "$180",
		secciones: [
			{
				titulo: "3 room types",
				contenido: [
					"Sanctuary of Intimacy",
					"The Family Refuge",
					"Shared Experience"
				]
			},
			{
				titulo: "Exclusive private pool",
				contenido: "ideal for relaxing as a couple, with complete privacy."
			},
			{
				titulo: "Privileged forest and valley views",
				contenido: "creating a magical and romantic atmosphere."
			}
		],
		beneficios: [
			"Thermal pools",
			"Tropical gardens, gourmet restaurant."
		],
		habitaciones: [
			"King-size bed with premium linens",
			"Natural materials and forest views"
		],
		sustentabilidad: "Live unique experiences",
		cierre: "Wellness, Adventure, Culture",
		imagenPrincipal: "https://cdn.arenalcloud.com/arenal-a65b6eb9-29d7-4dec-9784-b1b37ff7dfce-afortunados/sueno_dorado_1.jpg",
		imagenes: [
			{
				src: "https://cdn.arenalcloud.com/arenal-a65b6eb9-29d7-4dec-9784-b1b37ff7dfce-afortunados/sueno_dorado_1.jpg"
			},
			{
				src: "https://cdn.arenalcloud.com/arenal-a65b6eb9-29d7-4dec-9784-b1b37ff7dfce-afortunados/sueno_dorado_2.jpg"
			},
			{
				src: "https://cdn.arenalcloud.com/arenal-a65b6eb9-29d7-4dec-9784-b1b37ff7dfce-afortunados/sueno_dorado_3.jpg"
			}
		],
		url: "/suenodorado"
	},
	{
		id: "monte-real",
		titulo: "Hotel Monte Real",
		subtitulo: "Our beautiful hotel is in a magnificent location in La Fortuna",
		parrafoPrincipal: "We have incredible views of Arenal Volcano and the perfect combination of culture and nature. We are in the town center while surrounded by a small and wonderful forest. You will have the chance to see the famous sloth, a wide variety of colorful frogs, iguanas, squirrels, birds, and even monkeys. Do not hesitate to visit us; our professional and warm team awaits you!",
		price: "$150",
		secciones: [
			{
				titulo: "3 room types",
				contenido: [
					"Standard rooms",
					"Premium rooms",
					"JR Suite rooms"
				]
			},
			{
				titulo: "The Garden Restaurant",
				contenido: "Mediterranean and Latin American cuisine"
			},
			{
				titulo: "Privileged forest and valley views",
				contenido: "creating a magical and romantic atmosphere."
			}
		],
		beneficios: [
			"Thermal pools",
			"Tropical gardens, gourmet restaurant."
		],
		habitaciones: [
			"King-size bed with premium linens",
			"Natural materials and forest views"
		],
		sustentabilidad: "Live unique experiences",
		cierre: "Wellness, Adventure, Culture",
		imagenPrincipal: "https://cdn.arenalcloud.com/arenal-a65b6eb9-29d7-4dec-9784-b1b37ff7dfce-afortunados/monte_real_1.jpg",
		imagenes: [
			{
				src: "https://cdn.arenalcloud.com/arenal-a65b6eb9-29d7-4dec-9784-b1b37ff7dfce-afortunados/monte_real_1.jpg"
			},
			{
				src: "https://cdn.arenalcloud.com/arenal-a65b6eb9-29d7-4dec-9784-b1b37ff7dfce-afortunados/monte_real_2.jpg"
			},
			{
				src: "https://cdn.arenalcloud.com/arenal-a65b6eb9-29d7-4dec-9784-b1b37ff7dfce-afortunados/monte_real_3.jpg"
			}
		],
		url: "https://wa.me/50684597077"
	},
	{
		id: "lafortuna-downtown",
		titulo: "La Fortuna Downtown Boutique Hotel",
		subtitulo: "A unique lodging experience in the heart of La Fortuna",
		parrafoPrincipal: "We are the most centrally located hotel in La Fortuna, surrounded by culture, nature, and gastronomy. We have immediate access to top attractions like Arenal Volcano, Rio Fortuna Waterfall, and the hot springs. Our team helps you live adventures, relaxation, and wellness in a boutique and authentic setting.",
		price: "$140",
		secciones: [
			{
				titulo: "Room types",
				contenido: [
					"Standard rooms",
					"Premium rooms",
					"Suites with balcony and views"
				]
			},
			{
				titulo: "Gastronomy and entertainment",
				contenido: [
					"Maria Bonita Steak House: premium cuts and sensory experiences",
					"Selva Negra: creative mixology and themed dinners",
					"Pinto e' Gallo: Costa Rican buffet breakfasts",
					"La Ventanita de Maria Bonita: quick grill with gourmet quality"
				]
			},
			{
				titulo: "Art and culture",
				contenido: "Nuwa Art Gallery, a vibrant space that celebrates Costa Rican art."
			},
			{
				titulo: "Amenities",
				contenido: [
					"Outdoor pool",
					"High-speed WiFi",
					"Private parking and EV charging station",
					"Concierge and personalized tours"
				]
			}
		],
		beneficios: [
			"Central location",
			"Boutique atmosphere",
			"Varied gastronomy",
			"On-site art gallery"
		],
		habitaciones: [
			"King and queen beds with premium linens",
			"Modern decor with natural touches",
			"Options with balcony and views"
		],
		sustentabilidad: "We promote responsible tourism and authentic experiences in connection with nature and the local community.",
		cierre: "Wellness, gastronomy, culture, and adventure in one place",
		imagenPrincipal: "https://cdn.arenalcloud.com/arenal-a65b6eb9-29d7-4dec-9784-b1b37ff7dfce-afortunados/lafortuna_downtown_1.jpg",
		imagenes: [
			{
				src: "https://cdn.arenalcloud.com/arenal-a65b6eb9-29d7-4dec-9784-b1b37ff7dfce-afortunados/lafortuna_downtown_1.jpg"
			},
			{
				src: "https://cdn.arenalcloud.com/arenal-a65b6eb9-29d7-4dec-9784-b1b37ff7dfce-afortunados/lafortuna_downtown_2.jpg"
			},
			{
				src: "https://cdn.arenalcloud.com/arenal-a65b6eb9-29d7-4dec-9784-b1b37ff7dfce-afortunados/lafortuna_downtown_3.jpg"
			}
		],
		url: "https://wa.me/50684597077"
	}
];

const $$Astro$1 = createAstro("https://afortunadoscr.com");
const $$VillaDetalleEn = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$VillaDetalleEn;
  const {
    id,
    titulo,
    subtitulo,
    parrafoPrincipal,
    imagenPrincipal,
    imagenes,
    secciones,
    beneficios,
    habitaciones,
    sustentabilidad,
    cierre,
    url,
    precio
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Header", $$HeaderPagesEn, { "esHref": `/${id}` })} ${maybeRenderHead()}<section class="py-16 px-6 pt-28 max-w-5xl mx-auto text-gray-800"> <div class="mb-8"> ${renderComponent($$result, "ImageCarousel", ImageCarousel, { "client:load": true, "images": imagenes, "client:component-hydration": "load", "client:component-path": "C:/Users/gamer/Documents/GitHub/afortuna2new/src/components/PhotoCarrusel", "client:component-export": "default" })} <div class="mt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3"> ${precio && renderTemplate`<span class="text-lg font-semibold text-gray-900">From ${precio}</span>`} <a${addAttribute(url ? url : "/#reservar", "href")} class="inline-block bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-6 rounded-full transition">
Book now
</a> </div> </div> <span class="text-sm text-emerald-700 font-medium uppercase">${subtitulo}</span> <h1 class="text-4xl font-bold mb-6">${titulo}</h1> <p class="text-lg mb-10">${parrafoPrincipal}</p> ${secciones.map((sec) => renderTemplate`<div class="mb-10"> <h2 class="text-2xl font-semibold text-emerald-600 mb-2">${sec.titulo}</h2> ${Array.isArray(sec.contenido) ? renderTemplate`<ul class="list-disc list-inside text-gray-700 space-y-1"> ${sec.contenido.map((item) => renderTemplate`<li>${item}</li>`)} </ul>` : renderTemplate`<p class="text-gray-700 text-base">${sec.contenido}</p>`} </div>`)} <div class="grid md:grid-cols-2 gap-8 mb-10"> <div> <h3 class="text-xl font-bold text-emerald-600 mb-2">Exclusive benefits</h3> <ul class="list-disc list-inside text-gray-700 space-y-1"> ${beneficios.map((b) => renderTemplate`<li>${b}</li>`)} </ul> </div> <div> <h3 class="text-xl font-bold text-emerald-600 mb-2">Rooms</h3> <ul class="list-disc list-inside text-gray-700 space-y-1"> ${habitaciones.map((h) => renderTemplate`<li>${h}</li>`)} </ul> </div> </div> <div class="mb-8"> <h3 class="text-xl font-bold text-emerald-600 mb-2">Sustainability</h3> <p>${sustentabilidad}</p> </div> <div class="mt-12 text-center"> <p class="text-lg italic">${cierre}</p> <a${addAttribute(url ? url : "/#reservar", "href")} class="mt-6 inline-block bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-6 rounded-full transition">
Book now
</a> </div> </section> ${renderComponent($$result, "ToursTeaser", $$ToursTeaserEN, {})}`;
}, "C:/Users/gamer/Documents/GitHub/afortuna2new/src/components/vacacionales/en/VillaDetalleEn.astro", void 0);

const $$Astro = createAstro("https://afortunadoscr.com");
async function getStaticPaths() {
  return villas.map((v) => ({
    params: { id: v.id }
  }));
}
const $$id = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const villa = villas.find((v) => v.id === id);
  if (!villa) {
    throw new Error(`Villa not found: ${id}`);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$BaseLayout, { "title": villa.titulo }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "VillaDetalle", $$VillaDetalleEn, { "id": id, "titulo": villa.titulo, "subtitulo": villa.subtitulo, "parrafoPrincipal": villa.parrafoPrincipal, "imagenPrincipal": villa.imagenPrincipal, "imagenes": villa.imagenes, "secciones": villa.secciones, "beneficios": villa.beneficios, "habitaciones": villa.habitaciones, "sustentabilidad": villa.sustentabilidad, "cierre": villa.cierre, "url": villa.url, "precio": villa.precio ?? villa.price })} ` })}`;
}, "C:/Users/gamer/Documents/GitHub/afortuna2new/src/pages/en/[id].astro", void 0);

const $$file = "C:/Users/gamer/Documents/GitHub/afortuna2new/src/pages/en/[id].astro";
const $$url = "/en/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
