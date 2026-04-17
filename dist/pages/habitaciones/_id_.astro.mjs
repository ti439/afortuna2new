/* empty css                                   */
import { g as createAstro, c as createComponent, f as renderComponent, m as maybeRenderHead, d as renderTemplate, e as addAttribute } from '../../chunks/astro/server_0zlbAbnM.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$HeaderPages } from '../../chunks/HeaderPages_C9iZXJtP.mjs';
import { $ as $$Footer } from '../../chunks/Footer_CRNz6cnf.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_KWyqBV07.mjs';
export { renderers } from '../../renderers.mjs';

const data = [
	{
		id: "king",
		titulo: "Habitación King",
		subtitulo: "Santuario de Intimidad",
		descripcion: "Sumérgete en un espacio donde el romance y la privacidad son protagonistas. Nuestra habitación con cama King ofrece vistas inigualables al volcán Arenal.",
		precio: "120",
		imagenes: [
			"/src/assets/v2.jpg",
			"/src/assets/v2.jpg"
		],
		beneficios: [
			"Vista al volcán",
			"Ideal para parejas",
			"Desayuno incluido",
			"WiFi gratuito",
			"Smart TV",
			"Baño privado"
		],
		detalles: [
			"Cama King size con ropa de cama premium",
			"Balcón privado con vista panorámica al volcán Arenal",
			"Baño completo con amenidades orgánicas",
			"Aire acondicionado y ventilador de techo",
			"Minibar surtido con bebidas locales",
			"Caja fuerte digital"
		],
		experiencias: [
			"Desayuno típico costarricense servido en la terraza",
			"Acceso a las piscinas termales del hotel",
			"Cóctel de bienvenida con frutas tropicales",
			"Servicio de concierge para reserva de tours y actividades"
		]
	},
	{
		id: "familiar",
		titulo: "Habitación Familiar",
		subtitulo: "El Refugio Familiar",
		descripcion: "Diseñadas pensando en el confort de toda la familia, nuestras habitaciones para 5 personas combinan espacio y privacidad. Tres camas cuidadosamente distribuidas, aire acondicionado y amenidades completas para que grandes y pequeños disfruten de la magia de La Fortuna sin renunciar al confort de un hogar.",
		precio: "135",
		imagenes: [
			"/src/assets/v2.jpg",
			"/src/assets/v2.jpg"
		],
		beneficios: [
			"Ideal para familias",
			"Tres camas cómodas",
			"Desayuno incluido",
			"WiFi gratuito",
			"Aire acondicionado",
			"Baño privado"
		],
		detalles: [
			"Tres camas distribuidas para máximo confort",
			"Espacio amplio para convivir en familia",
			"Baño completo con artículos de higiene natural",
			"Aire acondicionado y ventilación eficiente",
			"TV por cable y escritorio de trabajo",
			"Minibar con refrigerios familiares"
		],
		experiencias: [
			"Desayuno buffet variado para toda la familia",
			"Acceso a piscinas termales del hotel",
			"Zona de juegos para niños",
			"Atención personalizada y servicio de concierge"
		]
	},
	{
		id: "cuadruple",
		titulo: "Habitación Cuádruple",
		subtitulo: "Experiencia Compartida",
		descripcion: "Perfectas para grupos de amigos o familias, nuestras ocho habitaciones para 4 personas ofrecen el equilibrio perfecto entre privacidad y convivencia. Cada detalle está pensado para que puedas disfrutar de la compañía de tus seres queridos mientras te sumerges en la experiencia Sueño Dorado.",
		precio: "110",
		imagenes: [
			"/src/assets/v2.jpg",
			"/src/assets/v2.jpg"
		],
		beneficios: [
			"Capacidad para 4 personas",
			"WiFi gratuito",
			"Desayuno incluido",
			"TV por cable",
			"Baño privado",
			"Aire acondicionado"
		],
		detalles: [
			"Dos camas dobles con colchones ortopédicos",
			"Espacio compartido con zona de descanso",
			"Baño privado con ducha caliente y amenities",
			"Aire acondicionado y ventilador de techo",
			"Escritorio y espacio para equipaje",
			"Cerradura electrónica y seguridad adicional"
		],
		experiencias: [
			"Desayuno costarricense completo",
			"Acceso a piscinas termales del hotel",
			"Cóctel de bienvenida para el grupo",
			"Recomendaciones locales y actividades grupales"
		]
	}
];

const $$Astro$1 = createAstro("https://afortunadoscr.com");
const $$HabitacionesDetalle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$HabitacionesDetalle;
  const {
    titulo,
    subtitulo,
    descripcion,
    precio,
    imagenes,
    beneficios,
    detalles,
    experiencias
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Header", $$HeaderPages, {})} ${maybeRenderHead()}<section class="py-16 bg-white text-gray-800"> <div class="container mx-auto px-4 md:px-8"> <!-- Título y descripción --> <div class="grid lg:grid-cols-2 gap-10 items-center"> <div> <span class="inline-block bg-amber-100 text-amber-700 text-sm px-3 py-1 rounded-full mb-4 font-medium"> ${subtitulo} </span> <h1 class="text-4xl font-bold text-gray-900 mb-4">${titulo}</h1> <p class="text-lg leading-relaxed mb-6">${descripcion}</p> <!-- Beneficios --> <div class="grid grid-cols-2 gap-4 mb-6 text-sm text-gray-700"> ${beneficios.map((item) => renderTemplate`<div class="flex items-center gap-2"> <span class="text-amber-600 text-xl">•</span> ${item} </div>`)} </div> <!-- Precio + botón --> <div class="flex items-center gap-4 mt-4"> <!-- <p class="text-2xl font-bold text-gray-900">\${precio} <span class="text-sm font-normal text-gray-500">/noche</span></p> --> <a href="https://reservations.orbebooking.com/Search/Init/Ero8S/es" class="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-6 rounded-full transition">
Reservar Ahora
</a> </div> </div> <!-- Galería (solo imagen principal en esta base) --> <div class="w-full"> <img${addAttribute(imagenes[0], "src")}${addAttribute(titulo, "alt")} class="rounded-xl shadow-lg w-full object-cover"> <!-- Si quieres miniaturas: 
        <div class="flex gap-2 mt-4">
          <img src={imagenes[1]} class="w-20 h-20 rounded-lg object-cover border" />
          <img src={imagenes[2]} class="w-20 h-20 rounded-lg object-cover border" />
        </div> 
        --> </div> </div> <!-- Sección inferior con dos columnas --> <div class="grid md:grid-cols-2 gap-10 mt-16"> <div> <h2 class="text-xl font-bold mb-4">Detalles de la habitación</h2> <ul class="list-disc list-inside space-y-2 text-gray-700"> ${detalles.map((item) => renderTemplate`<li>${item}</li>`)} </ul> </div> <div> <h2 class="text-xl font-bold mb-4">Experiencias incluidas</h2> <ul class="list-disc list-inside space-y-2 text-gray-700"> ${experiencias.map((item) => renderTemplate`<li>${item}</li>`)} </ul> </div> </div> </div> </section> ${renderComponent($$result, "Footer", $$Footer, {})}`;
}, "C:/Users/gamer/Documents/GitHub/afortuna2new/src/components/suenodorado/HabitacionesDetalle.astro", void 0);

const $$Astro = createAstro("https://afortunadoscr.com");
async function getStaticPaths() {
  return data.map((h) => ({
    params: { id: h.id }
  }));
}
const $$id = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const habitacion = data.find((h) => h.id === id);
  if (!habitacion) {
    throw new Error(`Habitaci\xF3n no encontrada: ${id}`);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$BaseLayout, { "title": habitacion.titulo }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HabitacionDetalle", $$HabitacionesDetalle, { "titulo": habitacion.titulo, "subtitulo": habitacion.subtitulo, "descripcion": habitacion.descripcion, "precio": habitacion.precio, "imagenes": habitacion.imagenes, "beneficios": habitacion.beneficios, "detalles": habitacion.detalles, "experiencias": habitacion.experiencias })} ` })}`;
}, "C:/Users/gamer/Documents/GitHub/afortuna2new/src/pages/habitaciones/[id].astro", void 0);

const $$file = "C:/Users/gamer/Documents/GitHub/afortuna2new/src/pages/habitaciones/[id].astro";
const $$url = "/habitaciones/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
