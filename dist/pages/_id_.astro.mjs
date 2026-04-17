/* empty css                                */
import { g as createAstro, c as createComponent, f as renderComponent, m as maybeRenderHead, d as renderTemplate, e as addAttribute } from '../chunks/astro/server_0zlbAbnM.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_KWyqBV07.mjs';
import { $ as $$HeaderPages } from '../chunks/HeaderPages_C9iZXJtP.mjs';
import { I as ImageCarousel } from '../chunks/PhotoCarrusel_C4_SB5hv.mjs';
import { $ as $$ToursTeaser } from '../chunks/ToursTeaser_pe-NrVF1.mjs';
export { renderers } from '../renderers.mjs';

const villas = [
	{
		id: "ecovilla",
		titulo: "Eco Village",
		subtitulo: "Eco Village: amor, privacidad y naturaleza en perfecta armonía",
		parrafoPrincipal: "Ubicada en las montañas con vistas que roban el aliento al valle y al bosque tropical, Eco Village es una cabaña íntima creada especialmente para parejas que desean celebrar momentos románticos y especiales, rodeados por la belleza exuberante y la calma absoluta de Costa Rica.",
		price: "$190.00",
		secciones: [
			{
				titulo: "Cabaña privada con cama King",
				contenido: "decorada con un diseño moderno y sofisticado."
			},
			{
				titulo: "Piscina privada exclusiva",
				contenido: "ideal para relajarte en pareja, con total intimidad."
			},
			{
				titulo: "Vistas privilegiadas al bosque y valle",
				contenido: "generando un ambiente mágico y romántico."
			}
		],
		beneficios: [
			"Acceso a Aguas Termales del Hotel Sueño Dorado",
			"Parqueo privado, aire acondicionado, TV, y confort absoluto para disfrutar cada minuto juntos."
		],
		habitaciones: [
			"1 habitaciones privadas con baño propio",
			"Capacidad para 2 personas (1 cama queen)",
			"Materiales naturales y vistas al bosque"
		],
		sustentabilidad: "Operamos bajo principios de sustentabilidad: piscinas alimentadas por el río, prácticas de bajo impacto ambiental y conservación activa del ecosistema que nos rodea.",
		cierre: "Sorprende a tu pareja con la escapada romántica ideal: reserva tu estadía en Eco Village ahora.",
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
		titulo: "Despertá frente al majestuoso Volcán Arenal",
		subtitulo: "Exclusividad, aguas termales privadas y naturaleza pura en el corazón de La Fortuna.",
		parrafoPrincipal: "Una historia que nace del corazón de La Fortuna Fundado por la familia Hidalgo-Sánchez, el Hotel Sueño Dorado conserva la calidez y hospitalidad costarricense que transforma a cada huésped en parte de nuestra familia. El susurro de las aguas termales, la majestuosidad del volcán Arenal y la sinfonía del bosque tropical crean el escenario perfecto para desconectarte del mundo exterior y reconectar con lo esencial. El verdadero lujo está en los pequeños detalles que te hacen sentir en casa.",
		price: "$180",
		secciones: [
			{
				titulo: "3 Tipos de Habitaciones",
				contenido: [
					"Santuario de Intimidad ",
					"El Refugio Familiar ",
					"Experiencia Compartida"
				]
			},
			{
				titulo: "Piscina privada exclusiva",
				contenido: "ideal para relajarte en pareja, con total intimidad."
			},
			{
				titulo: "Vistas privilegiadas al bosque y valle",
				contenido: "generando un ambiente mágico y romántico."
			}
		],
		beneficios: [
			"Piscinas Termales",
			"Jardines Tropicales, Restaurante Gourmet."
		],
		habitaciones: [
			"Cama King size con ropa de cama premium",
			"Materiales naturales y vistas al bosque"
		],
		sustentabilidad: "Vive experiencias unicas",
		cierre: "Bienestar, Aventura, Cultura",
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
		subtitulo: "Nuestro hermoso hotel está en una magnifica ubicación en La Fortuna",
		parrafoPrincipal: "Tenemos vistas increíbles al volcán Arenal y la combinación perfecta entre cultura y naturaleza. Estamos en el centro del pueblo, y a su vez, rodeados de un pequeño y maravilloso bosque. Tendrás la oportunidad de ver el famoso perezoso, una gran variedad de coloridas ranas, iguanas, ardillas, pájaros y hasta monos. ¡No dudes en visitarnos, nuestro profesional y cálido equipo te esperan!",
		price: "$150",
		secciones: [
			{
				titulo: "3 Tipos de Habitaciones",
				contenido: [
					"Habitaciones Standar",
					"Habitaciones Premium",
					"Habitaciones JR Suite"
				]
			},
			{
				titulo: "Restaurante The Garden",
				contenido: "Comida Mediterranea y LatinoAmericana"
			},
			{
				titulo: "Vistas privilegiadas al bosque y valle",
				contenido: "generando un ambiente mágico y romántico."
			}
		],
		beneficios: [
			"Piscinas Termales",
			"Jardines Tropicales, Restaurante Gourmet."
		],
		habitaciones: [
			"Cama King size con ropa de cama premium",
			"Materiales naturales y vistas al bosque"
		],
		sustentabilidad: "Vive experiencias unicas",
		cierre: "Bienestar, Aventura, Cultura",
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
		subtitulo: "Una experiencia única de hospedaje en el corazón de La Fortuna",
		parrafoPrincipal: "Somos el hotel más céntrico de La Fortuna, rodeado de cultura, naturaleza y gastronomía. Contamos con acceso inmediato a las principales atracciones como el Volcán Arenal, la Catarata Río Fortuna y las aguas termales. Nuestro equipo te acompaña para vivir aventuras, relajación y bienestar en un ambiente boutique y auténtico.",
		price: "$140",
		secciones: [
			{
				titulo: "Tipos de Habitaciones",
				contenido: [
					"Habitaciones Estándar",
					"Habitaciones Premium",
					"Suites con balcón y vistas"
				]
			},
			{
				titulo: "Gastronomía y Entretenimiento",
				contenido: [
					"María Bonita Steak House: cortes premium y experiencias sensoriales",
					"Selva Negra: mixología creativa y cenas temáticas",
					"Pinto e' Gallo: desayunos buffet costarricenses",
					"La Ventanita de María Bonita: parrilla rápida con calidad gourmet"
				]
			},
			{
				titulo: "Arte y Cultura",
				contenido: "Nuwa Art Gallery, espacio vibrante que celebra el arte costarricense."
			},
			{
				titulo: "Facilidades",
				contenido: [
					"Piscina al aire libre",
					"WiFi de alta velocidad",
					"Parqueo privado y estación de carga eléctrica",
					"Concierge y tours personalizados"
				]
			}
		],
		beneficios: [
			"Ubicación céntrica",
			"Ambiente boutique",
			"Gastronomía variada",
			"Galería de arte en sitio"
		],
		habitaciones: [
			"Camas king y queen con ropa de cama premium",
			"Decoración moderna con detalles naturales",
			"Opciones con balcón y vistas"
		],
		sustentabilidad: "Promovemos el turismo responsable y experiencias auténticas en conexión con la naturaleza y la comunidad local.",
		cierre: "Bienestar, Gastronomía, Cultura y Aventura en un solo lugar",
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
const $$VillaDetalle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$VillaDetalle;
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
  return renderTemplate`${renderComponent($$result, "Header", $$HeaderPages, { "enHref": `/en/${id}` })} ${maybeRenderHead()}<section class="py-16 px-6 pt-28 max-w-5xl mx-auto text-gray-800"> <div class="mb-8"> ${renderComponent($$result, "ImageCarousel", ImageCarousel, { "client:load": true, "images": imagenes, "client:component-hydration": "load", "client:component-path": "C:/Users/gamer/Documents/GitHub/afortuna2new/src/components/PhotoCarrusel", "client:component-export": "default" })} <div class="mt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3"> ${precio && renderTemplate`<span class="text-lg font-semibold text-gray-900">Desde ${precio}</span>`} <a${addAttribute(url ? url : "/#reservar", "href")} class="inline-block bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-6 rounded-full transition">
Reservar Ahora
</a> </div> </div> <span class="text-sm text-emerald-700 font-medium uppercase">${subtitulo}</span> <h1 class="text-4xl font-bold mb-6">${titulo}</h1> <p class="text-lg mb-10">${parrafoPrincipal}</p> ${secciones.map((sec) => renderTemplate`<div class="mb-10"> <h2 class="text-2xl font-semibold text-emerald-600 mb-2">${sec.titulo}</h2> ${Array.isArray(sec.contenido) ? renderTemplate`<ul class="list-disc list-inside text-gray-700 space-y-1"> ${sec.contenido.map((item) => renderTemplate`<li>${item}</li>`)} </ul>` : renderTemplate`<p class="text-gray-700 text-base">${sec.contenido}</p>`} </div>`)} <div class="grid md:grid-cols-2 gap-8 mb-10"> <div> <h3 class="text-xl font-bold text-emerald-600 mb-2">Beneficios Exclusivos</h3> <ul class="list-disc list-inside text-gray-700 space-y-1"> ${beneficios.map((b) => renderTemplate`<li>${b}</li>`)} </ul> </div> <div> <h3 class="text-xl font-bold text-emerald-600 mb-2">Habitaciones</h3> <ul class="list-disc list-inside text-gray-700 space-y-1"> ${habitaciones.map((h) => renderTemplate`<li>${h}</li>`)} </ul> </div> </div> <div class="mb-8"> <h3 class="text-xl font-bold text-emerald-600 mb-2">Sustentabilidad</h3> <p>${sustentabilidad}</p> </div> <div class="mt-12 text-center"> <p class="text-lg italic">${cierre}</p> <a${addAttribute(url ? url : "/#reservar", "href")} class="mt-6 inline-block bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-6 rounded-full transition">
Reservar Ahora
</a> </div> </section> ${renderComponent($$result, "ToursTeaser", $$ToursTeaser, {})}`;
}, "C:/Users/gamer/Documents/GitHub/afortuna2new/src/components/vacacionales/VillaDetalle.astro", void 0);

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
    throw new Error(`Villa no encontrada: ${id}`);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$BaseLayout, { "title": villa.titulo }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "VillaDetalle", $$VillaDetalle, { "id": id, "titulo": villa.titulo, "subtitulo": villa.subtitulo, "parrafoPrincipal": villa.parrafoPrincipal, "imagenPrincipal": villa.imagenPrincipal, "imagenes": villa.imagenes, "secciones": villa.secciones, "beneficios": villa.beneficios, "habitaciones": villa.habitaciones, "sustentabilidad": villa.sustentabilidad, "cierre": villa.cierre, "url": villa.url, "precio": villa.precio ?? villa.price })} ` })}`;
}, "C:/Users/gamer/Documents/GitHub/afortuna2new/src/pages/[id].astro", void 0);

const $$file = "C:/Users/gamer/Documents/GitHub/afortuna2new/src/pages/[id].astro";
const $$url = "/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
