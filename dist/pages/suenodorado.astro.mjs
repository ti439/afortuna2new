/* empty css                                */
import { c as createComponent, m as maybeRenderHead, e as addAttribute, d as renderTemplate, f as renderComponent, g as createAstro, r as renderHead } from '../chunks/astro/server_0zlbAbnM.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { v as volcanBg, f as familia, k as king, q as quintuple, c as cuadruples, p as piscinas, j as jardines, l as logoAF } from '../chunks/logosuenosV_D2L27wyJ.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from '../chunks/_astro_assets_Cf83jt-1.mjs';
import { v as v2 } from '../chunks/v2_CZudLLzn.mjs';
import { $ as $$Footer } from '../chunks/Footer_CRNz6cnf.mjs';
import { $ as $$Hreflang } from '../chunks/Hreflang_CRzrx2EL.mjs';
import { $ as $$ToursTeaser } from '../chunks/ToursTeaser_pe-NrVF1.mjs';
/* empty css                                 */
/* empty css                                       */
export { renderers } from '../renderers.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative h-[70%] sm:h-screen bg-cover bg-center text-white"${addAttribute(`background-image: url(${volcanBg.src})`, "style")}> <!-- Capa de oscurecimiento --> <div class="absolute inset-0 bg-black/40 z-0 backdrop-blur-sm"></div> <!-- Contenido centrado --> <div class="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-8 max-w-4xl mx-auto"> <span class="inline-flex items-center gap-2 bg-white/15 px-4 py-2 rounded-full text-sm uppercase tracking-widest">
Reserva directa con el hotel
</span> <h1 class="mt-6 text-3xl sm:text-5xl font-bold drop-shadow-lg">
Tu escape frente al majestuoso <br class="hidden md:block">
Volcán Arenal
</h1> <p class="mt-6 text-xl md:text-2xl font-light drop-shadow-md max-w-2xl">
Termales privadas, vistas panorámicas y una atención cálida para que tu descanso sea inolvidable.
</p> <div class="mt-8 flex flex-col sm:flex-row items-center gap-4"> <a href="https://reservations.orbebooking.com/Search/Init/Ero8S/es" class="text-lg sm:text-xl inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-7 rounded-full transition duration-300">
Reservar ahora
</a> <a href="#hospedajes" class="text-lg sm:text-xl inline-block border border-white/70 hover:bg-white/10 text-white font-semibold py-3 px-7 rounded-full transition duration-300">
Ver habitaciones
</a> </div> <div class="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-white/90 w-full"> <div class="bg-white/10 rounded-lg py-3 px-4">Termales privadas</div> <div class="bg-white/10 rounded-lg py-3 px-4">Desayuno incluido</div> <div class="bg-white/10 rounded-lg py-3 px-4">Vista al volcán</div> </div> </div> </section>`;
}, "C:/Users/gamer/Documents/GitHub/afortuna2new/src/components/suenodorado/Hero.astro", void 0);

const $$AboutUs = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="sobre-nosotros" class="py-16 bg-white text-gray-800"> <div class=" mx-auto px-4 md:px-8 flex flex-col-reverse md:flex-row sm:justify-center items-center gap-12"> <!-- Texto --> <div class="w-full md:w-1/2"> <h2 class="text-4xl md:text-4xl font-bold mb-6 text-amber-600">
Una historia que nace del corazón de La Fortuna
</h2> <p class="text-1xl sm:text-base leading-relaxed mb-4">
Fundado por la familia Hidalgo-Sánchez, el Hotel Sueño Dorado conserva la calidez y hospitalidad costarricense que transforma a cada huésped en parte de nuestra familia.
</p> <p class="text-1xl sm:text-base leading-relaxed mb-4">
El susurro de las aguas termales, la majestuosidad del volcán Arenal y la sinfonía del bosque tropical crean el escenario perfecto para desconectarte del mundo exterior y reconectar con lo esencial.
</p> <blockquote class="mt-6 text-xl  text-amber-700 italic font-medium border-l-4 border-amber-500 pl-4">
“El verdadero lujo está en los pequeños detalles que te hacen sentir en casa.”
</blockquote> </div> <!-- Imagen --> <div class="w-full md:w-1/3"> ${renderComponent($$result, "Image", $$Image, { "src": familia, "alt": "Familia fundadora del Hotel Sue\xF1o Dorado", "class": "rounded-2xl shadow-xl object-cover w-full h-auto" })} </div> </div> </section>`;
}, "C:/Users/gamer/Documents/GitHub/afortuna2new/src/components/suenodorado/AboutUs.astro", void 0);

const $$Habitaciones = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="hospedajes" class="py-16 bg-gray-50 text-gray-800"> <div class=" mx-auto px-4 md:px-8"> <h2 class="text-3xl md:text-4xl font-bold text-center text-amber-600 mb-4">
Habitaciones diseñadas para tu descanso
</h2> <p class="text-center text-gray-600 text-base md:text-lg mb-12">
Elige la opción ideal para tu viaje y reserva directo con el hotel en minutos.
</p> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> <!-- Habitación King --> <div class="bg-white rounded-xl shadow-md overflow-hidden"> ${renderComponent($$result, "Image", $$Image, { "src": king, "alt": "Habitaci\xF3n King", "class": "w-full h-56 object-cover" })} <div class="p-6"> <h3 class="text-xl font-semibold text-amber-700 mb-2">Santuario de Intimidad</h3> <p class="text-gray-700 text-base mb-4">
Sumérgete en un espacio donde el romance y la privacidad son protagonistas. Nuestra habitación con cama King ofrece vistas inigualables al volcán Arenal.
</p> <div class="mt-2 flex flex-wrap gap-3"> <a${addAttribute(`/habitaciones/${"king"}`, "href")} class="inline-block bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-4 rounded-full transition duration-300">
Ver detalles
</a> <a href="https://reservations.orbebooking.com/Search/Init/Ero8S/es" class="inline-block border border-amber-500 text-amber-700 hover:bg-amber-50 font-medium py-2 px-4 rounded-full transition duration-300">
Reservar ahora
</a> </div> </div> </div> <!-- Habitación Familiar --> <div class="bg-white rounded-xl shadow-md overflow-hidden"> ${renderComponent($$result, "Image", $$Image, { "src": quintuple, "alt": "Habitaci\xF3n Familiar", "class": "w-full h-56 object-cover" })} <div class="p-6"> <h3 class="text-xl font-semibold text-amber-700 mb-2">El Refugio Familiar</h3> <p class="text-gray-700 text-base mb-4">
Espaciosas habitaciones para 5 personas con aire acondicionado y todas las amenidades, ideales para disfrutar de La Fortuna en familia.
</p> <div class="mt-2 flex flex-wrap gap-3"> <a${addAttribute(`/habitaciones/${"familiar"}`, "href")} class="inline-block bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-4 rounded-full transition duration-300">
Ver detalles
</a> <a href="https://reservations.orbebooking.com/Search/Init/Ero8S/es" class="inline-block border border-amber-500 text-amber-700 hover:bg-amber-50 font-medium py-2 px-4 rounded-full transition duration-300">
Reservar ahora
</a> </div> </div> </div> <!-- Habitación Cuádruple --> <div class="bg-white rounded-xl shadow-md overflow-hidden"> ${renderComponent($$result, "Image", $$Image, { "src": cuadruples, "alt": "Habitaci\xF3n Cu\xE1druple", "class": "w-full h-56 object-cover" })} <div class="p-6"> <h3 class="text-xl font-semibold text-amber-700 mb-2">Experiencia Compartida</h3> <p class="text-gray-700 text-base mb-4">
Perfectas para grupos de amigos o familias, estas habitaciones para 4 personas combinan privacidad y convivencia para una estadía inolvidable.
</p> <div class="mt-2 flex flex-wrap gap-3"> <a${addAttribute(`/habitaciones/${"cuadruple"}`, "href")} class="inline-block bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-4 rounded-full transition duration-300">
Ver detalles
</a> <a href="https://reservations.orbebooking.com/Search/Init/Ero8S/es" class="inline-block border border-amber-500 text-amber-700 hover:bg-amber-50 font-medium py-2 px-4 rounded-full transition duration-300">
Reservar ahora
</a> </div> </div> </div> </div> </div> </section>`;
}, "C:/Users/gamer/Documents/GitHub/afortuna2new/src/components/suenodorado/Habitaciones.astro", void 0);

const $$Instalaciones = createComponent(($$result, $$props, $$slots) => {
  const restaurante = "https://i.ibb.co/BV1KZZ0S/IMG-6005-2.jpg";
  return renderTemplate`${maybeRenderHead()}<section id="instalaciones" class="py-16 bg-white text-gray-800"> <div class=" mx-auto px-4 md:px-8"> <h2 class="text-3xl md:text-4xl font-bold text-center text-amber-600 mb-12">
Instalaciones que despiertan tus sentidos
</h2> <div class="space-y-12"> <!-- Piscinas --> <div class="flex flex-col lg:flex-row items-center gap-8"> <div class="lg:w-1/2"> ${renderComponent($$result, "Image", $$Image, { "src": piscinas, "alt": "Piscinas termales", "class": "rounded-xl shadow-lg w-full h-auto object-cover" })} </div> <div class="lg:w-1/2"> <h3 class="text-2xl font-semibold text-amber-700 mb-4">Piscinas Termales</h3> <p class="text-gray-700 text-lg leading-relaxed">
Sumérgete en nuestras cinco piscinas, cuatro de ellas alimentadas directamente por las aguas termales del volcán Arenal. Disfruta de distintas temperaturas para una experiencia terapéutica única mientras contemplas las vistas al volcán.
</p> </div> </div> <!-- Jardines --> <div class="flex flex-col lg:flex-row-reverse items-center gap-8"> <div class="lg:w-1/2"> ${renderComponent($$result, "Image", $$Image, { "src": jardines, "alt": "Jardines tropicales", "class": "rounded-xl shadow-lg w-full h-auto object-cover" })} </div> <div class="lg:w-1/2"> <h3 class="text-2xl font-semibold text-amber-700 mb-4">Jardines Tropicales</h3> <p class="text-gray-700 text-lg leading-relaxed">
Explora senderos rodeados de flora nativa, escucha aves exóticas y conecta con la biodiversidad costarricense en cada rincón de nuestros jardines. Un lugar perfecto para caminar, meditar o simplemente disfrutar la sombra de un árbol centenario.
</p> </div> </div> <!-- Restaurante --> <div class="flex flex-col lg:flex-row items-center gap-8"> <div class="lg:w-1/2"> <img${addAttribute(restaurante, "src")} alt="Restaurante gourmet" class="rounded-xl shadow-lg w-full h-auto object-cover" loading="lazy" decoding="async"> </div> <div class="lg:w-1/2"> <h3 class="text-2xl font-semibold text-amber-700 mb-4">Restaurante Gourmet</h3> <p class="text-gray-700 text-lg leading-relaxed">
Disfruta de una experiencia culinaria inolvidable con nuestros cortes Angus, mariscos frescos del Pacífico y recetas tradicionales preparadas con ingredientes locales. Un espacio ideal para compartir sabores y momentos memorables.
</p> </div> </div> </div> </div> </section>`;
}, "C:/Users/gamer/Documents/GitHub/afortuna2new/src/components/suenodorado/Instalaciones.astro", void 0);

const $$Experiencias = createComponent(($$result, $$props, $$slots) => {
  const bienestar = "https://cdn.arenalcloud.com/arenal-a65b6eb9-29d7-4dec-9784-b1b37ff7dfce-afortunados/7b0ccd43c52b6e51a81af781727b4dfe.jpg";
  const aventura = "https://cdn.arenalcloud.com/arenal-a65b6eb9-29d7-4dec-9784-b1b37ff7dfce-afortunados/27f1d784567f0c562d3f711e91e89156.jpg";
  const cultura = "https://cdn.arenalcloud.com/arenal-a65b6eb9-29d7-4dec-9784-b1b37ff7dfce-afortunados/2c8e427c39ad361879db90a0b50b4df2.jpg";
  return renderTemplate`${maybeRenderHead()}<section id="experiencias" class="py-16 bg-gray-50 text-gray-800"> <div class=" mx-auto px-4 md:px-8"> <h2 class="text-3xl md:text-4xl font-bold text-center text-amber-600 mb-4">
Vive experiencias únicas
</h2> <p class="text-center text-gray-600 text-base md:text-lg mb-12">
Complementa tu estadía con bienestar, aventura o cultura, y reserva directo con nuestro equipo.
</p> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> <!-- Bienestar --> <div class="bg-white rounded-xl shadow-md overflow-hidden flex flex-col"> <img${addAttribute(bienestar, "src")} alt="Spa bienestar" class="h-52 w-full object-cover" loading="lazy" decoding="async"> <div class="p-6 flex-1 flex flex-col"> <h3 class="text-xl font-semibold text-amber-700 mb-2">Bienestar</h3> <p class="text-gray-700 text-base mb-4 flex-1">
Transforma tu habitación en un santuario con masajes terapéuticos y tratamientos rejuvenecedores. Relájate con aceites esenciales locales en la intimidad de tu espacio.
</p> <a href="#reservar" class="mt-auto inline-block bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-4 rounded-full transition">
Reservar experiencia
</a> </div> </div> <!-- Aventura --> <div class="bg-white rounded-xl shadow-md overflow-hidden flex flex-col"> <img${addAttribute(aventura, "src")} alt="Tours de aventura" class="h-52 w-full object-cover"> <div class="p-6 flex-1 flex flex-col"> <h3 class="text-xl font-semibold text-amber-700 mb-2">Aventura</h3> <p class="text-gray-700 text-base mb-4 flex-1">
Canopy, rafting, senderismo y cataratas escondidas. Nuestro equipo te conecta con experiencias auténticas diseñadas para que descubras la magia de La Fortuna.
</p> <a href="/tours" class="mt-auto inline-block bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-4 rounded-full transition">
Explorar tours
</a> </div> </div> <!-- Cultura --> <div class="bg-white rounded-xl shadow-md overflow-hidden flex flex-col"> <img${addAttribute(cultura, "src")} alt="Experiencias culturales" class="h-52 w-full object-cover" loading="lazy" decoding="async"> <div class="p-6 flex-1 flex flex-col"> <h3 class="text-xl font-semibold text-amber-700 mb-2">Cultura</h3> <p class="text-gray-700 text-base mb-4 flex-1">
Desde talleres de cocina tradicional hasta visitas a comunidades locales. Sumérgete en la esencia costarricense más allá del turismo convencional.
</p> <a href="#contacto" class="mt-auto inline-block bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-4 rounded-full transition">
Conocer más
</a> </div> </div> </div> </div> </section>`;
}, "C:/Users/gamer/Documents/GitHub/afortuna2new/src/components/suenodorado/Experiencias.astro", void 0);

const $$Contacto = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="reservar" class="relative bg-cover bg-center text-white"${addAttribute(`background-image: url(${v2.src});`, "style")}> <!-- Capa oscura --> <div class="absolute inset-0 bg-black/60 backdrop-blur-sm z-0"></div> <!-- Contenido --> <div class="relative z-10 max-w-3xl mx-auto text-center py-24 px-6"> <h2 class="text-3xl md:text-4xl font-bold mb-6">¿Listo para tu escape a la naturaleza?</h2> <p class="text-lg md:text-xl mb-8">
Reserva directo con el hotel y recibe una atención cercana para personalizar cada detalle de tu estadía.
</p> <div class="flex flex-col md:flex-row justify-center gap-4"> <a href="https://reservations.orbebooking.com/Search/Init/Ero8S/es" class="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded-full transition">
Reservar ahora
</a> <a href="https://wa.me/50663156210" onclick="return gtagSendEvent(this.href, this.target)" target="_blank" rel="noopener noreferrer" class="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full transition">
Consultar por WhatsApp
</a> </div> <p class="mt-10 italic text-amber-300 font-medium text-lg">
“En Sueño Dorado no vendemos habitaciones, creamos recuerdos que perduran toda la vida.”
</p> </div> </section>`;
}, "C:/Users/gamer/Documents/GitHub/afortuna2new/src/components/suenodorado/Contacto.astro", void 0);

const $$Beneficios = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="beneficios" class="py-16 bg-white text-gray-800"> <div class="container mx-auto px-4 md:px-8 max-w-4xl"> <h2 class="text-3xl md:text-4xl font-bold text-center text-amber-600 mb-10">
Beneficios de reservar directo en Sueño Dorado
</h2> <ul class="space-y-6 text-lg list-disc list-inside text-gray-700"> <li><strong>Vista panorámica al volcán</strong> desde cada habitación, bar y restaurante.</li> <li><strong>Termales exclusivas</strong> en un entorno íntimo, privado y relajante.</li> <li><strong>Bar con Happy Hour</strong> (5–7 pm), coctelería premium y ambiente ideal para compartir.</li> <li><strong>Restaurante gourmet</strong> con exquisitos cortes Angus, mariscos frescos y snacks deliciosos para toda la familia.</li> <li><strong>Desayuno buffet incluido</strong>, delicioso, variado y energizante.</li> <li><strong>Wi-Fi fibra óptica</strong>, aire acondicionado, parqueo privado, TV por cable, y confort garantizado en todas las habitaciones.</li> <li><strong>Atención directa del hotel</strong> para ayudarte con detalles especiales y recomendaciones locales.</li> </ul> <p class="mt-10 text-xl font-medium text-center text-gray-800">
Sueño Dorado no es solo un hotel, es tu espacio especial para reconectar con lo que realmente importa: tu familia, tu pareja y tu bienestar.
</p> <p class="mt-4 text-center text-amber-600 italic text-lg font-semibold">
"Reserva hoy y empieza a vivir el sueño dorado de tus vacaciones."
</p> </div> </section>`;
}, "C:/Users/gamer/Documents/GitHub/afortuna2new/src/components/suenodorado/Beneficios.astro", void 0);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(cooked.slice()) }));
var _a$2;
const $$Astro = createAstro("https://afortunadoscr.com");
const $$HeaderSueno = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$HeaderSueno;
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", '<header class="w-full bg-yellow-200/10 text-gray-800  shadow"> <nav class="flex items-center justify-between px-6 md:px-12 py-4"> <!-- Logo --> <a href="/"> ', ' </a> <!-- Men\xFA de escritorio --> <ul class="hidden md:flex gap-8 text-base sm:text-sm  font-semibold uppercase tracking-wide"> <li><a href="/" class="hover:underline">Inicio</a></li> <li><a href="#hospedajes" class="hover:underline">Habitaciones</a></li> <li><a href="/tours" class="hover:underline">Tours</a></li> </ul> <div class="hidden md:flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-gray-700"> <span class="text-gray-900">ES</span> <span class="text-gray-400">|</span> <a href="/en/suenodorado" class="hover:text-gray-900">EN</a> </div> <!-- Bot\xF3n hamburguesa --> <button id="mobile-menu-toggle" class="md:hidden focus:outline-none" aria-controls="mobile-menu" aria-expanded="false" aria-label="Abrir men\xFA" onclick="window.toggleMobileMenu?.()"> <svg class="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> </button> </nav> <!-- Men\xFA m\xF3vil --> <div id="mobile-menu" class="fixed inset-0 z-50 hidden md:hidden"> <button id="mobile-menu-backdrop" class="absolute inset-0 bg-black/30 opacity-0 transition-opacity duration-200" aria-label="Cerrar men\xFA" onclick="window.toggleMobileMenu?.()"></button> <div id="mobile-menu-panel" class="absolute top-0 right-0 h-full w-[85%] max-w-xs bg-white text-gray-800 p-6 overflow-y-auto translate-x-full transition-transform duration-200" role="dialog" aria-modal="true"> <div class="flex items-center justify-between pb-4 border-b border-gray-200"> <span class="text-sm font-semibold uppercase tracking-widest">Men\xFA</span> <button id="mobile-menu-close" class="text-gray-700 text-sm uppercase tracking-wide" onclick="window.toggleMobileMenu?.()">\nCerrar\n</button> </div> <ul class="flex flex-col gap-4 pt-6 text-base font-semibold uppercase tracking-wide"> <li class="border-b border-gray-100 pb-4"> <a href="/" class="block py-2">Inicio</a> </li> <li class="border-b border-gray-100 pb-4"> <a href="#hospedajes" class="block py-2">Habitaciones</a> </li> <li class="border-b border-gray-100 pb-4"> <a href="/tours" class="block py-2">Tours</a> </li> <li class="flex items-center gap-2 pt-2 text-sm font-semibold"> <span class="text-gray-900">ES</span> <span class="text-gray-400">|</span> <a href="/en/suenodorado" class="hover:underline">EN</a> </li> </ul> </div> </div> </header> <script>\n  const menu = document.getElementById("mobile-menu");\n  const panel = document.getElementById("mobile-menu-panel");\n  const backdrop = document.getElementById("mobile-menu-backdrop");\n  const toggleButton = document.getElementById("mobile-menu-toggle");\n\n  function setMenuOpen(open) {\n    if (!menu || !panel || !backdrop) return;\n    toggleButton?.setAttribute("aria-expanded", open ? "true" : "false");\n\n    if (open) {\n      menu.classList.remove("hidden");\n      document.body.classList.add("overflow-hidden");\n      requestAnimationFrame(() => {\n        panel.classList.remove("translate-x-full");\n        backdrop.classList.remove("opacity-0");\n      });\n      return;\n    }\n\n    panel.classList.add("translate-x-full");\n    backdrop.classList.add("opacity-0");\n    document.body.classList.remove("overflow-hidden");\n    window.setTimeout(() => {\n      menu.classList.add("hidden");\n    }, 200);\n  }\n\n  window.toggleMobileMenu = () => {\n    const isHidden = menu?.classList.contains("hidden");\n    setMenuOpen(Boolean(isHidden));\n  };\n<\/script>'])), maybeRenderHead(), renderComponent($$result, "Image", $$Image, { "src": logoAF, "alt": "Logo de Afortunados", "class": " w-64 bg-cover sm:h-auto" }));
}, "C:/Users/gamer/Documents/GitHub/afortuna2new/src/components/suenodorado/HeaderSueno.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$OtrosHospedajesBanner = createComponent(($$result, $$props, $$slots) => {
  const hospedajes = [
    {
      name: "Downtown La Fortuna Boutique Hotel",
      tag: "En el Coraz\xF3n de las experiencias",
      description: "Somos el hotel m\xE1s c\xE9ntrico de La Fortuna, rodeado de cultura, naturaleza y gastronom\xEDa.",
      url: "/lafortuna-downtown",
      image: "https://cdn.arenalcloud.com/arenal-a65b6eb9-29d7-4dec-9784-b1b37ff7dfce-afortunados/ff6601f025ae5fdb8c63cbcb67f7b91f.png"
    },
    {
      name: "Eco Village",
      tag: "Amor, privacidad y naturaleza en perfecta armon\xEDa",
      description: "Ubicada en las monta\xF1as con vistas que roban el aliento al valle y al bosque tropical, Eco Village es una caba\xF1a \xEDntima creada especialmente para parejas que desean celebrar momentos rom\xE1nticos y especiales",
      url: "/ecovilla",
      image: "https://cdn.arenalcloud.com/arenal-a65b6eb9-29d7-4dec-9784-b1b37ff7dfce-afortunados/7b1f6e4fa0414a15f8165e41f0998950.jpg"
    },
    {
      name: "Hotel Monte Real",
      tag: "Beautiful hotel location in La Fortuna",
      description: "We have incredible views of the Arenal volcano and the perfect combination of culture and nature.",
      url: "/monte-real",
      image: "https://cdn.arenalcloud.com/arenal-a65b6eb9-29d7-4dec-9784-b1b37ff7dfce-afortunados/49792c3c669ca4a28872da7daa116cad.jpg"
    },
    {
      name: "Hotel Catarata Resort",
      tag: "Relajaci\xF3n y tradici\xF3n costarricense",
      description: "Un espacio ideal para descansar en La Fortuna con \xE1reas verdes, excelente ubicaci\xF3n y atenci\xF3n cercana.",
      url: "/catarataresort",
      image: "https://i.ibb.co/zWDQKjrm/fuera.jpg"
    }
  ];
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<section id="otros-hospedajes" data-otros-hospedajes-carousel class="py-16 bg-gradient-to-b from-amber-50 to-white text-gray-800"> <div class="mx-auto px-4 md:px-8"> <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-10"> <div> <p class="text-sm uppercase tracking-widest text-amber-600 font-semibold">M\xE1s opciones</p> <h2 class="text-3xl md:text-4xl font-bold text-amber-700 mt-2">\nOtros hospedajes para tu pr\xF3xima escapada\n</h2> <p class="text-gray-600 mt-3 max-w-2xl">\nDescubre alternativas cercanas con estilos diferentes. Comparte con tu cliente y elige la experiencia ideal.\n</p> </div> <a href="/hospedajes" class="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-full transition">\nVer todos\n<span aria-hidden="true">\u2192</span> </a> </div> <div class="relative"> <div data-carousel-track class="otros-hospedajes-track flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth"> ', ' </div> <button type="button" data-carousel-prev class="absolute left-3 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-white/95 text-amber-700 shadow-md border border-amber-100 hover:bg-white transition disabled:opacity-40 disabled:cursor-not-allowed" aria-label="Hospedaje anterior"> <span aria-hidden="true">\u2039</span> </button> <button type="button" data-carousel-next class="absolute right-3 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-white/95 text-amber-700 shadow-md border border-amber-100 hover:bg-white transition disabled:opacity-40 disabled:cursor-not-allowed" aria-label="Siguiente hospedaje"> <span aria-hidden="true">\u203A</span> </button> </div> <div class="mt-6 flex items-center justify-center gap-2"> ', ' </div> </div> </section> <script>\n  (() => {\n    const carousels = document.querySelectorAll("[data-otros-hospedajes-carousel]");\n\n    carousels.forEach((carousel) => {\n      const track = carousel.querySelector("[data-carousel-track]");\n      const cards = Array.from(carousel.querySelectorAll("[data-carousel-card]"));\n      const dots = Array.from(carousel.querySelectorAll("[data-carousel-dot]"));\n      const prevButton = carousel.querySelector("[data-carousel-prev]");\n      const nextButton = carousel.querySelector("[data-carousel-next]");\n\n      if (!track || !cards.length || !prevButton || !nextButton) return;\n\n      const getStep = () => {\n        if (cards.length < 2) return track.clientWidth;\n        return cards[1].offsetLeft - cards[0].offsetLeft;\n      };\n\n      const getCurrentIndex = () => {\n        const step = getStep();\n        if (!step) return 0;\n        const rawIndex = Math.round(track.scrollLeft / step);\n        return Math.min(Math.max(rawIndex, 0), getMaxStartIndex());\n      };\n\n      const getMaxStartIndex = () => {\n        const maxScrollLeft = track.scrollWidth - track.clientWidth;\n        let maxIndex = 0;\n\n        cards.forEach((card, index) => {\n          if (card.offsetLeft <= maxScrollLeft + 1) {\n            maxIndex = index;\n          }\n        });\n\n        return maxIndex;\n      };\n\n      const setActiveDot = (activeIndex, maxIndex) => {\n        dots.forEach((dot, dotIndex) => {\n          const isVisible = dotIndex <= maxIndex;\n          const isActive = dotIndex === activeIndex;\n          dot.classList.toggle("hidden", !isVisible);\n          dot.classList.toggle("bg-amber-600", isActive);\n          dot.classList.toggle("w-6", isActive);\n          dot.classList.toggle("bg-amber-200", !isActive);\n          dot.classList.toggle("w-2.5", !isActive);\n          dot.disabled = !isVisible;\n          dot.setAttribute("aria-current", isActive ? "true" : "false");\n        });\n      };\n\n      const updateControls = () => {\n        const maxStartIndex = getMaxStartIndex();\n        const currentIndex = getCurrentIndex();\n        prevButton.disabled = currentIndex === 0;\n        nextButton.disabled = currentIndex >= maxStartIndex;\n        setActiveDot(currentIndex, maxStartIndex);\n      };\n\n      const goToIndex = (targetIndex) => {\n        const safeIndex = Math.min(Math.max(targetIndex, 0), getMaxStartIndex());\n        track.scrollTo({\n          left: cards[safeIndex].offsetLeft,\n          behavior: "smooth",\n        });\n      };\n\n      prevButton.addEventListener("click", () => {\n        goToIndex(getCurrentIndex() - 1);\n      });\n\n      nextButton.addEventListener("click", () => {\n        goToIndex(getCurrentIndex() + 1);\n      });\n\n      dots.forEach((dot, index) => {\n        dot.addEventListener("click", () => {\n          goToIndex(index);\n        });\n      });\n\n      track.addEventListener("scroll", updateControls, { passive: true });\n      window.addEventListener("resize", updateControls);\n      updateControls();\n    });\n  })();\n<\/script> <style>\n  .otros-hospedajes-track {\n    scrollbar-width: none;\n    -ms-overflow-style: none;\n  }\n\n  .otros-hospedajes-track::-webkit-scrollbar {\n    display: none;\n  }\n</style>'])), maybeRenderHead(), hospedajes.map((hospedaje) => renderTemplate`<a${addAttribute(hospedaje.url, "href")} data-carousel-card class="group bg-white rounded-2xl shadow-md overflow-hidden border border-amber-100 hover:shadow-xl transition shrink-0 snap-start basis-full md:basis-[calc((100%-1.5rem)/2)] lg:basis-[calc((100%-3rem)/3)]"> <div class="relative h-60 md:h-72 overflow-hidden"> <img${addAttribute(hospedaje.image, "src")}${addAttribute(hospedaje.name, "alt")} class="h-full w-full object-cover group-hover:scale-105 transition duration-500" loading="lazy" decoding="async"> <span class="absolute top-4 left-4 bg-white/90 text-amber-700 text-xs font-semibold px-3 py-1 rounded-full"> ${hospedaje.tag} </span> </div> <div class="p-6 md:p-8"> <h3 class="text-2xl font-semibold text-amber-700">${hospedaje.name}</h3> <p class="text-gray-600 mt-3 max-w-3xl">${hospedaje.description}</p> <div class="mt-6 inline-flex items-center text-amber-600 font-semibold">
Conocer más
<span class="ml-2" aria-hidden="true">→</span> </div> </div> </a>`), hospedajes.map((_, index) => renderTemplate`<button type="button" data-carousel-dot${addAttribute(index, "data-index")}${addAttribute(`h-2.5 rounded-full transition-all ${index === 0 ? "w-6 bg-amber-600" : "w-2.5 bg-amber-200"}`, "class")}${addAttribute(`Ir al hospedaje ${index + 1}`, "aria-label")}></button>`));
}, "C:/Users/gamer/Documents/GitHub/afortuna2new/src/components/suenodorado/OtrosHospedajesBanner.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$HotelLayout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(['<html lang="es" data-astro-cid-omrllba2> <head><title>Hotel Sue\xF1o Dorado</title><meta charset="UTF-8"><meta name="viewport" content="width=device-width">', '<script>\n      function gtagSendEvent(url, target) {\n        var isBlank = target === "_blank";\n        var navigate = function () {\n          if (!isBlank && typeof url === "string") {\n            window.location = url;\n          }\n        };\n        if (typeof gtag === "function") {\n          gtag("event", "conversion_event_outbound_click", {\n            event_callback: navigate,\n            event_timeout: 2000,\n          });\n          return !isBlank;\n        }\n        navigate();\n        return !isBlank;\n      }\n    <\/script>', '</head> <body class="bg-white text-gray-900" data-astro-cid-omrllba2> ', " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " </body></html>"])), renderComponent($$result, "Hreflang", $$Hreflang, { "data-astro-cid-omrllba2": true }), renderHead(), renderComponent($$result, "Header", $$HeaderSueno, { "data-astro-cid-omrllba2": true }), renderComponent($$result, "Hero", $$Hero, { "data-astro-cid-omrllba2": true }), renderComponent($$result, "AboutUs", $$AboutUs, { "data-astro-cid-omrllba2": true }), renderComponent($$result, "Habitaciones", $$Habitaciones, { "data-astro-cid-omrllba2": true }), renderComponent($$result, "Instalaciones", $$Instalaciones, { "data-astro-cid-omrllba2": true }), renderComponent($$result, "Experiecias", $$Experiencias, { "data-astro-cid-omrllba2": true }), renderComponent($$result, "OtrosHospedajesBanner", $$OtrosHospedajesBanner, { "data-astro-cid-omrllba2": true }), renderComponent($$result, "ToursTeaser", $$ToursTeaser, { "data-astro-cid-omrllba2": true }), renderComponent($$result, "Beneficios", $$Beneficios, { "data-astro-cid-omrllba2": true }), renderComponent($$result, "Contacto", $$Contacto, { "data-astro-cid-omrllba2": true }), renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-omrllba2": true }));
}, "C:/Users/gamer/Documents/GitHub/afortuna2new/src/layouts/HotelLayout.astro", void 0);

const $$Suenodorado = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Hotel", $$HotelLayout, {})}`;
}, "C:/Users/gamer/Documents/GitHub/afortuna2new/src/pages/suenodorado.astro", void 0);

const $$file = "C:/Users/gamer/Documents/GitHub/afortuna2new/src/pages/suenodorado.astro";
const $$url = "/suenodorado";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Suenodorado,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
