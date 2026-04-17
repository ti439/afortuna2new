/* empty css                                   */
import { g as createAstro, c as createComponent, m as maybeRenderHead, e as addAttribute, d as renderTemplate, f as renderComponent } from '../../chunks/astro/server_0zlbAbnM.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_KWyqBV07.mjs';
import { $ as $$Modal } from '../../chunks/Modal_rqKFveYP.mjs';
import { t as toursData } from '../../chunks/tours_Dnzj0QlD.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro("https://afortunadoscr.com");
const $$tour$1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$tour$1;
  const { tour } = Astro2.props;
  const whatsappText = encodeURIComponent(`Hola, quiero reservar el tour ${tour.nombre}`);
  const heroImage = tour.imagenDetalle ?? tour.imagen;
  const shortDescription = tour.descripcionCorta ?? tour.descripcion;
  const longDescription = tour.descripcionLarga ?? tour.descripcion;
  return renderTemplate`${maybeRenderHead()}<main class="max-w-5xl mx-auto py-10 px-4 space-y-6"> <div class="flex items-center"> <a href="/tours" class="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition"> <span aria-hidden="true">←</span>
Ver más tours
</a> </div> <div class="flex flex-col md:flex-row gap-6"> <img${addAttribute(heroImage, "src")}${addAttribute(tour.nombre, "alt")} class="w-full md:w-1/2 rounded-xl object-cover shadow" loading="lazy"> <div class="flex-1 space-y-3"> <h1 class="text-3xl font-bold">${tour.nombre}</h1> ${shortDescription ? renderTemplate`<p class="text-gray-700">${shortDescription}</p>` : null} <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-600"> <p><strong>Duración:</strong> ${tour.duracion}</p> <p><strong>Ubicación:</strong> ${tour.ubicacion}</p> <p><strong>Dificultad:</strong> ${tour.dificultad}</p> <p><strong>Precio:</strong> $${tour.precio}</p> </div> ${tour.tags?.length ? renderTemplate`<div class="flex flex-wrap gap-2"> ${tour.tags.map((tag) => renderTemplate`<span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs">${tag}</span>`)} </div>` : null} <div class="flex gap-3 pt-2"> <!-- <button
              onclick="document.getElementById('modal-info').showModal()"
              class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
            >
              Ver más detalles
            </button> --> <a${addAttribute(`https://wa.me/50663156210?text=${whatsappText}`, "href")} onclick="return gtagSendEvent(this.href, this.target)" target="_blank" class="bg-green-100 text-green-800 px-4 py-2 rounded border border-green-300 hover:bg-green-200 transition">
Reservar vía WhatsApp
</a> </div> </div> </div> ${longDescription ? renderTemplate`<section class="space-y-3"> <h2 class="text-2xl font-semibold">Descripción</h2> <p class="text-gray-700 leading-relaxed">${longDescription}</p> </section>` : null} ${tour.queEsperar?.length ? renderTemplate`<section class="space-y-3"> <h2 class="text-2xl font-semibold">Qué esperar</h2> <ul class="list-disc list-inside space-y-2 text-gray-700"> ${tour.queEsperar.map((item) => renderTemplate`<li>${item}</li>`)} </ul> </section>` : null} ${tour.incluye?.length ? renderTemplate`<section class="space-y-3"> <h2 class="text-2xl font-semibold">Incluye</h2> <ul class="list-disc list-inside space-y-2 text-gray-700"> ${tour.incluye.map((item) => renderTemplate`<li>${item}</li>`)} </ul> </section>` : null} ${renderComponent($$result, "Modal", $$Modal, { "id": "modal-info", "title": "Descripci\xF3n del Tour" }, { "default": ($$result2) => renderTemplate` <div class="space-y-4 text-sm text-left leading-relaxed"> <img${addAttribute(heroImage, "src")}${addAttribute(`Detalle del tour ${tour.nombre}`, "alt")} class="rounded-lg mb-4 object-cover w-full" loading="lazy"> ${longDescription ? renderTemplate`<p>${longDescription}</p>` : null} ${tour.incluye?.length ? renderTemplate`<div> <p class="font-semibold mb-2">Incluye:</p> <ul class="list-disc list-inside space-y-1"> ${tour.incluye.map((item) => renderTemplate`<li>${item}</li>`)} </ul> </div>` : null} </div> ` })} </main>`;
}, "C:/Users/gamer/Documents/GitHub/afortuna2new/src/components/tours/[tour].astro", void 0);

const toursDetailData = [
	{
		slug: "arenal-one-day-package-tour",
		nombre: "Arenal One Day Package Tour",
		descripcionCorta: "El dia perfecto para vivir lo mejor de La Fortuna en una sola aventura.",
		descripcionLarga: "Este paquete es la forma mas completa de vivir las atracciones mas famosas de La Fortuna en un solo dia, explorando selva, cataratas, volcanes y vida silvestre con guias expertos.\n\nLa aventura inicia con la visita a los Puentes Colgantes de Mistico Park, una caminata de dos horas entre bosques tropicales donde podras observar monos, tucanes, perezosos, pavos salvajes y una amplia variedad de aves. Caminar entre las copas de los arboles despierta una sensacion de libertad y asombro unica.\n\nLuego continuamos hacia la imponente Catarata del Rio Fortuna, uno de los iconos naturales de Costa Rica. Tras el descenso, podras relajarte en sus aguas cristalinas y recargar energias con un almuerzo tipico costarricense.\n\nLa siguiente parada te llevara a los senderos del Lava 1968, una reserva que muestra como el poder del volcan transformo el paisaje. Aqui podras disfrutar de vistas espectaculares del Volcan Arenal y el Lago Arenal, mientras aprendes sobre su historia, su actividad y la flora y fauna que lo rodean.\n\nPara cerrar el dia, tenes la opcion de agregar una visita a las aguas termales de tu preferencia (opcional), una experiencia perfecta para relajar cuerpo y mente tras un dia lleno de naturaleza y emociones.",
		imagen: "https://cdn.arenalcloud.com/arenal-a65b6eb9-29d7-4dec-9784-b1b37ff7dfce-afortunados/puente_09973237.png",
		imagenDetalle: "https://cdn.arenalcloud.com/arenal-a65b6eb9-29d7-4dec-9784-b1b37ff7dfce-afortunados/puente_09973237.png",
		dificultad: "Moderado",
		duracion: "9 horas",
		ubicacion: "La Palma",
		tags: [
			"Aventura",
			"Belleza"
		],
		precio: 160,
		queEsperar: [
			"Caminatas inolvidables en los puntos mas emblematicos de La Fortuna.",
			"Naturaleza pura, vida silvestre y vistas impresionantes.",
			"Un itinerario disenado para aprovechar cada momento.",
			"Guias expertos que explican historia, geologia, flora y fauna.",
			"Un dia completo que combina aventura, conocimiento y relajacion."
		],
		incluye: [
			"Seguros",
			"Transporte",
			"Guia bilingue",
			"Entradas a los parques",
			"Agua embotellada",
			"Almuerzo tipico"
		]
	},
	{
		slug: "white-water-rafting",
		nombre: "White Water Rafting II–III",
		descripcionCorta: "Aventura de rafting en el rio Sarapiqui con rapidos clase II–III, ideal para familias y quienes buscan emocion moderada en un entorno natural.",
		descripcionLarga: "Preparate para una experiencia inolvidable llena de emocion, naturaleza y diversion mientras recorres las cristalinas aguas del majestuoso rio Sarapiqui. Desde La Fortuna, nos dirigimos a este paraiso tropical donde te espera un dia lleno de aventura y conexion con la naturaleza.\n\nAl llegar, nuestros guias expertos brindan una completa charla de seguridad e instrucciones sobre el manejo del equipo. Luego, iniciamos el descenso de 13 kilometros (8 millas) por el rio, navegando entre rapidos emocionantes y tramos de aguas tranquilas que permiten admirar la exuberante flora y fauna del lugar.\n\nDurante el recorrido, se realiza una parada especial para refrescarse y degustar frutas tropicales de la region. Al finalizar la aventura, se visita un restaurante tipico para disfrutar de un almuerzo tradicional costarricense.\n\nEste tour es ideal para toda la familia y se puede disfrutar con total seguridad.",
		imagen: "https://cdn.arenalcloud.com/arenal-a65b6eb9-29d7-4dec-9784-b1b37ff7dfce-afortunados/rafting_1ccfa83f.png",
		imagenDetalle: "https://cdn.arenalcloud.com/arenal-a65b6eb9-29d7-4dec-9784-b1b37ff7dfce-afortunados/rafting_1ccfa83f.png",
		dificultad: "Media",
		duracion: "3 horas",
		ubicacion: "Rio Sarapiqui, Costa Rica",
		tags: [
			"Rafting",
			"Aventura",
			"Naturaleza",
			"Familia",
			"Rio Sarapiqui",
			"Deportes acuaticos",
			"Ecoturismo",
			"Adrenalina",
			"Actividades al aire libre",
			"Tour guiado"
		],
		precio: 95,
		queEsperar: [
			"Charla de seguridad e instrucciones de equipo.",
			"Descenso de 13 kilometros por rapidos clase II–III.",
			"Parada para refrescarse y degustar frutas tropicales.",
			"Almuerzo tipico costarricense al finalizar."
		],
		incluye: [
			"Transporte",
			"Guia",
			"Chaleco salvavidas",
			"Toalla",
			"Frutas",
			"Refill de agua",
			"Almuerzo",
			"Jugo o cerveza"
		]
	},
	{
		slug: "atv-tour-ecologico",
		nombre: "ATV Tour Ecológico – Aventura en La Fortuna",
		descripcionCorta: "Experiencia en cuatriciclo que combina aventura, naturaleza y cultura local a los pies del Volcan Arenal.",
		descripcionLarga: "El ATV Tour Ecologico combina aventura pura, naturaleza salvaje y cultura local en un solo recorrido. La aventura comienza en la finca privada La Naciente, a pocos minutos del centro de La Fortuna. Tras una charla de seguridad y un circuito de practica, estaras listo para tomar el control del cuatriciclo y adentrarte en un mundo de selva, barro y vistas impresionantes del Volcan Arenal.\n\nLos senderos de La Naciente atraviesan bosque primario, zonas fangosas y caminos desafiantes rodeados de arboles gigantes y fauna tropical. En el trayecto nos detenemos en la Quebrada Platanillo, una cuenca natural que alimenta al rio Arenal y a las comunidades locales. En esta area tambien podras observar los famosos toros Watusi, reconocidos por sus enormes y llamativos cuernos.\n\nLa experiencia continua con una visita al pintoresco pueblo de La Guaria, donde podras ver de cerca la vida rural costarricense recorriendo su iglesia, su antigua pulperia y sus tradiciones intactas. Desde alli seguimos por senderos abiertos, cruzando charcas naturales y llegando a la orilla del rio Arenal (si las condiciones lo permiten), donde haremos una pausa para fotos memorables.\n\nAl final del recorrido, descansaremos en Rancho La Poza, donde podras disfrutar de un refrigerio y relajarte en la piscina al aire libre. Es una aventura perfecta para quienes buscan adrenalina, cultura autentica y paisajes inolvidables.",
		imagen: "https://cdn.arenalcloud.com/arenal-a65b6eb9-29d7-4dec-9784-b1b37ff7dfce-afortunados/EcologicalATV_1005f75d.jpg",
		imagenDetalle: "https://cdn.arenalcloud.com/arenal-a65b6eb9-29d7-4dec-9784-b1b37ff7dfce-afortunados/EcologicalATV_1005f75d.jpg",
		dificultad: "Media",
		duracion: "2.5 - 3 horas",
		ubicacion: "La Fortuna, Costa Rica",
		tags: [
			"ATV",
			"Aventura",
			"Naturaleza",
			"Volcan Arenal",
			"Cultura local",
			"Selva",
			"Adrenalina",
			"Tour guiado",
			"Actividades al aire libre"
		],
		precio: 105,
		queEsperar: [
			"Conducir un ATV entre senderos selvaticos y zonas fangosas.",
			"Vistas espectaculares del Volcan Arenal.",
			"Parada en Quebrada Platanillo y observacion de toros Watusi.",
			"Visita al pueblo rural de La Guaria.",
			"Cruce de charcas, caminos desafiantes y posible visita al rio Arenal.",
			"Descanso final con refrigerio y piscina al aire libre.",
			"Aventura segura, guiada y apta para principiantes."
		],
		incluye: [
		]
	},
	{
		slug: "cabalgata-al-volcan-arenal",
		nombre: "Cabalgata al Volcan Arenal",
		descripcionCorta: "Cabalgata en finca privada con vistas del Volcan Arenal, selva tropical y acceso a piscinas termales al finalizar.",
		descripcionLarga: "Vivir una cabalgata en La Fortuna no es solo montar un caballo: es conectar con la naturaleza desde su ritmo mas puro y autentico. Este recorrido se realiza dentro de una finca privada rodeada de bosque primario y secundario, muy cerca del Parque Nacional Volcan Arenal, lo que permite disfrutar de vistas panoramicas privilegiadas del canon del volcan, sus antiguos flujos de lava y la selva tropical que lo rodea.\n\nCon caballos sanos, dociles y entrenados, comenzaras una travesia inolvidable cruzando rios, senderos naturales y zonas abiertas desde donde se aprecian las llanuras de San Carlos en todo su esplendor. Nuestros guias compartiran informacion valiosa sobre los ecosistemas, arboles gigantes, aves tropicales y animales que suelen verse en la zona, como tucanes, halcones y monos.\n\nAl finalizar la cabalgata, disfrutaras del acceso a las piscinas termales del Hotel Montana de Fuego, que incluyen tres albercas de agua caliente y dos piscinas frias, el complemento perfecto para relajar el cuerpo despues de la aventura. Una experiencia ideal para familias, parejas, amantes de la naturaleza y viajeros que buscan un dia autentico, seguro y memorable.",
		imagen: "https://cdn.arenalcloud.com/arenal-a65b6eb9-29d7-4dec-9784-b1b37ff7dfce-afortunados/cabalgata__1__f01d99a8.jpg",
		imagenDetalle: "https://cdn.arenalcloud.com/arenal-a65b6eb9-29d7-4dec-9784-b1b37ff7dfce-afortunados/cabalgata__1__f01d99a8.jpg",
		dificultad: "Moderado",
		duracion: "3 horas",
		ubicacion: "La Fortuna, Costa Rica",
		tags: [
			"Cabalgata",
			"Naturaleza",
			"Volcan Arenal",
			"Termales",
			"Familia",
			"Aventura",
			"Caballos",
			"Tour guiado"
		],
		precio: 65,
		queEsperar: [
			"Montar caballos entrenados en una finca privada.",
			"Cruzar rios y senderos naturales de selva tropical.",
			"Vistas del Volcan Arenal y antiguos campos de lava.",
			"Contacto cercano con fauna silvestre.",
			"Relajacion en piscinas termales al finalizar.",
			"Actividad segura y apta para adultos y ninos."
		],
		incluye: [
			"Seguros",
			"Transporte",
			"Equipo completo",
			"Guias bilingues",
			"Entradas",
			"Agua embotellada",
			"Ponchos por si llueve",
			"Acceso a piscinas termales"
		]
	},
	{
		slug: "tour-de-cafe-y-chocolate",
		nombre: "Tour de Cafe y Chocolate",
		descripcionCorta: "Tour guiado en una granja familiar cerca del Volcan Arenal para conocer el proceso del cafe, el chocolate y la cana de azucar con degustaciones.",
		descripcionLarga: "Descubre la rica herencia de la produccion de cafe y chocolate en un tour guiado en La Fortuna, Costa Rica. Experimenta el viaje de la semilla a la taza cerca del pintoresco Volcan Arenal.\n\nSumergite en el mundo del cafe y el chocolate en North Fields Coffee, una granja familiar enclavada en los exuberantes paisajes de La Fortuna, cerca del Volcan Arenal. Comenza tu visita con la calida bienvenida de guias expertos y apasionados por la agricultura sostenible.\n\nDurante el recorrido, aprenderas tecnicas de agricultura ecologica de primera mano, experimentaras el procesamiento tradicional de la cana de azucar, degustaras cafe y chocolate recien hechos y conoceras la fauna local que apoya el proceso de cultivo ecologico.",
		imagen: "https://cdn.arenalcloud.com/arenal-a65b6eb9-29d7-4dec-9784-b1b37ff7dfce-afortunados/cafe_60848456.jpg",
		imagenDetalle: "https://cdn.arenalcloud.com/arenal-a65b6eb9-29d7-4dec-9784-b1b37ff7dfce-afortunados/cafe_60848456.jpg",
		dificultad: "Baja",
		duracion: "2.5 horas",
		ubicacion: "La Fortuna, Costa Rica",
		tags: [
			"Cafe",
			"Chocolate",
			"Tour cultural",
			"Experiencia gastronomica",
			"Sostenibilidad",
			"Agricultura ecologica",
			"Volcan Arenal",
			"La Fortuna",
			"Turismo rural",
			"Familiar"
		],
		precio: 60,
		queEsperar: [
			"Recorrido guiado por una granja familiar cerca del Volcan Arenal.",
			"Aprender el proceso del cafe, el chocolate y la cana de azucar.",
			"Degustaciones de cafe y chocolate recien hechos.",
			"Enfoque en agricultura sostenible y fauna local."
		],
		incluye: [
			"Guia",
			"Cafe",
			"Cata de chocolate",
			"Cata de cana de azucar",
			"Agua",
			"Impuestos locales",
			"Servicio de recogida y regreso al hotel (a no mas de 15 minutos de la zona de La Fortuna)"
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
  return renderTemplate`${renderComponent($$result, "Layout", $$BaseLayout, { "title": `Tour: ${tour.nombre}` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TourDetail", $$tour$1, { "tour": tour })} ` })}`;
}, "C:/Users/gamer/Documents/GitHub/afortuna2new/src/pages/tours/[tour].astro", void 0);

const $$file = "C:/Users/gamer/Documents/GitHub/afortuna2new/src/pages/tours/[tour].astro";
const $$url = "/tours/[tour]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$tour,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
