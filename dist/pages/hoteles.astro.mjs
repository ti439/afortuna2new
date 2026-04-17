/* empty css                                */
import { c as createComponent, m as maybeRenderHead, e as addAttribute, d as renderTemplate, f as renderComponent } from '../chunks/astro/server_0zlbAbnM.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { $ as $$Layout } from '../chunks/Layout_BlTM9sQi.mjs';
export { renderers } from '../renderers.mjs';

const hoteles = [
	{
		nombre: "Hotel Sueño Dorado",
		descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint ",
		precio: 120,
		imagen: "../../Imagenes/v2.jpg"
	},
	{
		nombre: "LA FORTUNA DOWNTOWN",
		descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint ",
		precio: 120,
		imagen: "../../Imagenes/v2.jpg"
	},
	{
		nombre: "LA FORTUNA DOWNTOWN",
		descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint ",
		precio: 120,
		imagen: "../../Imagenes/v2.jpg"
	}
];

const $$HotelesDetalles = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-16 bg-[#f7fbee] text-gray-800 min-h-full"> <div class="container mx-auto px-4 md:px-8"> <!-- Título --> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold text-green-800">
Nuestros Hoteles de Lujo
</h2> <p class="max-w-3xl mx-auto mt-4 text-gray-600">
Descubre una colección exclusiva de hoteles que ofrecen experiencias únicas en los destinos más deseados del mundo.
</p> </div> <!-- Grid de Hoteles --> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${hoteles.map((hotel) => renderTemplate`<div class="bg-white rounded-xl shadow-md overflow-hidden flex flex-col"> <!-- Imagen --> <div class="relative"> <img${addAttribute(hotel.imagen, "src")}${addAttribute(hotel.nombre, "alt")} class="w-full h-52 object-cover">  </div> <!-- Contenido --> <div class="p-5 flex-1 flex flex-col"> <h3 class="font-semibold text-lg text-green-800">${hotel.nombre}</h3>  <p class="text-gray-600 mb-4">${hotel.descripcion}</p> <!-- Tags -->  <!-- Precio --> <p class="text-green-700 font-bold text-xl mb-4">
$${hotel.precio} <span class="text-gray-500 text-sm">/noche</span> </p> <!-- Botones --> <div class="mt-auto flex gap-3"> <a${addAttribute(hotel.url || "#", "href")} target="_blank" class="flex-1 border border-gray-300 text-gray-700 py-2 rounded-md text-center hover:bg-gray-100 transition">
Ver Más
</a> <a${addAttribute(hotel.reservaUrl || "#", "href")} target="_blank" class="flex-1 bg-green-700 text-white py-2 rounded-md text-center hover:bg-green-800 transition">
Reservar Ahora
</a> </div> </div> </div>`)} </div> </div> </section>`;
}, "C:/Users/gamer/Documents/GitHub/afortuna2new/src/components/suenodorado/HotelesDetalles.astro", void 0);

const $$Hoteles = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HotelesDetalles", $$HotelesDetalles, {})} ` })}`;
}, "C:/Users/gamer/Documents/GitHub/afortuna2new/src/pages/hoteles.astro", void 0);

const $$file = "C:/Users/gamer/Documents/GitHub/afortuna2new/src/pages/hoteles.astro";
const $$url = "/hoteles";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Hoteles,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
