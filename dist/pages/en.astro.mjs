/* empty css                                */
import { c as createComponent, m as maybeRenderHead, f as renderComponent, d as renderTemplate, e as addAttribute } from '../chunks/astro/server_0zlbAbnM.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Image } from '../chunks/_astro_assets_Cf83jt-1.mjs';
import { t as tripadvisor, g as google, b as booking, e as expedia, v as villa, d as downtown, c as casa, a as tours } from '../chunks/IMG_1702_DCIgnjpI.mjs';
import '@astrojs/internal-helpers/path';
import { l as logoAF } from '../chunks/logoafortundosV_i13GW9fM.mjs';
import { $ as $$FooterEn } from '../chunks/FooterEn_CCgEsIWq.mjs';
import 'clsx';
/* empty css                                 */
import { v as v2 } from '../chunks/v2_CZudLLzn.mjs';
import { $ as $$Layout } from '../chunks/Layout_BlTM9sQi.mjs';
import { v as volcan } from '../chunks/habitacion_DQUvn9Fc.mjs';
import { $ as $$ToursTeaserEN } from '../chunks/ToursTeaserEN_DMYl_y2B.mjs';
export { renderers } from '../renderers.mjs';

const $$ReviewsEn = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="reviews" class="bg-white text-center py-10"> <h2 class="text-4xl font-bold text-gray-500 mb-8 uppercase">Ratings on platforms</h2> <div class="flex flex-wrap justify-center gap-8 text-gray-700 font-medium"> <div> <p class="text-2xl font-bold">8.3/10</p> <p><span class="number" data-value="500">0</span> reviews</p> ${renderComponent($$result, "Image", $$Image, { "src": tripadvisor, "alt": "Tripadvisor", "class": "w-32 mx-auto mt-2" })} </div> <div> <p class="text-2xl font-bold">8.3/10</p> <p><span class="number" data-value="2123">0</span> reviews</p> ${renderComponent($$result, "Image", $$Image, { "src": google, "alt": "Google", "class": "w-28 mx-auto mt-2" })} </div> <div> <p class="text-2xl font-bold">8.3/10</p> <p><span class="number" data-value="1500">0</span> reviews</p> ${renderComponent($$result, "Image", $$Image, { "src": booking, "alt": "Booking", "class": "w-32 mx-auto mt-2" })} </div> <div> <p class="text-2xl font-bold">8.3/10</p> <p><span class="number" data-value="1234">0</span> reviews</p> ${renderComponent($$result, "Image", $$Image, { "src": expedia, "alt": "Expedia", "class": "w-32 mx-auto mt-2" })} </div> </div> </section> `;
}, "C:/Users/gamer/Documents/GitHub/afortuna2new/src/components/en/ReviewsEn.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$AboutUsEn = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(["<!-- About us -->", '<section id="nosotros" class="bg-[#7A8E89] text-white py-20 px-6"> <div class="max-w-4xl mx-auto text-center"> <h2 class="text-4xl font-extrabold mb-3">WE ARE AFORTUNADOS</h2> <p class="text-lg sm:text-xl font-semibold mb-8">\n15+ years creating local experiences in La Fortuna and Costa Rica\n</p> <div class="relative"> <!-- Full text hidden initially --> <div id="texto-nosotros" class="transition-all duration-500 ease-in-out max-h-[320px] overflow-hidden text-left text-lg space-y-4"> <p class="font-semibold">\nLocal platform with our own homes, curated tours, and personalized support so you travel\n          without stress.\n</p> <ul class="space-y-2"> <li class="flex items-center gap-2"> <span class="inline-block h-2 w-2 rounded-full bg-white"></span>\nVacation homes carefully designed\n</li> <li class="flex items-center gap-2"> <span class="inline-block h-2 w-2 rounded-full bg-white"></span>\nExclusive agreements with parks and operators\n</li> <li class="flex items-center gap-2"> <span class="inline-block h-2 w-2 rounded-full bg-white"></span>\nFast local support before and during your trip\n</li> </ul> <div class="flex flex-wrap gap-4 text-sm sm:text-base"> <div class="rounded-full border border-white/50 bg-white/10 px-4 py-1">15+ years of experience</div> <div class="rounded-full border border-white/50 bg-white/10 px-4 py-1">Personalized attention</div> </div> <p>\nAt <strong>Afortunados</strong>, we have spent more than 15 years turning dreams into\n          unforgettable experiences. We started as a simple Facebook page offering local lodging\n          and tours in La Fortuna, and thanks to the commitment and passion of our team, today we\n          are an integrated and exclusive platform of tourism services in Costa Rica.\n</p> <p>\nWe have our own vacation homes, carefully designed to provide comfort, warmth, and a\n          genuine connection with nature. We also have exclusive agreements with parks and the best\n          tour operators in the country, allowing us to offer not only the best prices, but also\n          close support to enjoy each destination fully.\n</p> <p>\nOur passion for unique experiences goes beyond borders, organizing exclusive trips for\n          our clients to fascinating international destinations such as Turkey, Indonesia, Thailand,\n          Greece, Mexico, South America, and beautiful European capitals.\n</p> <p>\nWhat truly sets us apart is our multidisciplinary team, with extensive experience in\n          hospitality, gastronomy, sales, tour operations, and personalized attention. We strongly\n          believe that responsibility and care in every detail make the difference.\n</p> <p>\nAt <strong>Afortunados</strong>, we do not sell only tourism services, we share\n          experiences filled with family warmth, peace of mind, and trust. Our mission is clear: to\n          become the leading platform and reference to discover Costa Rica in an authentic, safe,\n          personalized way, full of Costa Rican hospitality.\n</p> <p class="italic">\nWelcome to Afortunados, where every trip is a story you will want to tell again and\n          again!\n</p> </div> <!-- Gradient to show more --> <div id="fade" class="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#7A8E89] to-transparent pointer-events-none"></div> <!-- Action button --> <div class="mt-6 text-center"> <button id="boton-ver-mas" class="bg-white text-[#7A8E89] px-6 py-2 font-semibold rounded hover:bg-gray-100 transition" aria-expanded="false" aria-controls="texto-nosotros" onclick="expandirTexto()">\nRead more\n</button> </div> </div> <div class="mt-6"> <a href="https://wa.me/50684597077" onclick="return gtagSendEvent(this.href, this.target)" class="inline-block border border-white px-6 py-3 rounded-full text-white font-semibold hover:bg-white hover:text-[#7A8E89] transition">\nTalk to an advisor\n</a> </div> </div> </section> <div class="w-full"> ', ' </div> <script>\n  function expandirTexto() {\n    const texto = document.getElementById("texto-nosotros");\n    const boton = document.getElementById("boton-ver-mas");\n    const fade = document.getElementById("fade");\n\n    if (texto.classList.contains("max-h-[320px]")) {\n      texto.classList.remove("max-h-[320px]");\n      texto.classList.add("max-h-[2000px]");\n      fade.classList.add("hidden");\n      boton.innerText = "Read less";\n      boton.setAttribute("aria-expanded", "true");\n    } else {\n      texto.classList.add("max-h-[320px]");\n      texto.classList.remove("max-h-[2000px]");\n      fade.classList.remove("hidden");\n      boton.innerText = "Read more";\n      boton.setAttribute("aria-expanded", "false");\n    }\n  }\n<\/script>'])), maybeRenderHead(), renderComponent($$result, "Reviews", $$ReviewsEn, {}));
}, "C:/Users/gamer/Documents/GitHub/afortuna2new/src/components/en/AboutUsEn.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$HeaderEn = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<header class="absolute top-0 left-0 w-full z-50"> <nav class="flex items-center justify-between px-6 md:px-12 bg-white/10 backdrop-blur-md text-white"> <!-- Logo --> <a href="/en"> ', ` </a> <!-- Desktop menu --> <ul class="hidden md:flex gap-8 text-2xl tracking-wider mr-26"> <li class="relative group"> <button class="menu-link text-base md:text-sm font-semibold hover:text-botones flex items-center gap-1">
Villas
<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.586l3.71-3.356a.75.75 0 111.04 1.08l-4.25 3.85a.75.75 0 01-1.04 0l-4.25-3.85a.75.75 0 01.02-1.06z" clip-rule="evenodd"></path> </svg> </button> <ul class="absolute invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 top-[2.8rem] left-0 bg-white text-black rounded-md shadow-md w-56 z-50 py-2"> <li> <a href="/ecovilla" class="block px-4 py-2 hover:bg-gray-100 text-sm font-medium">
Eco Villa
</a> </li> </ul> </li> <li class="relative group"> <button class="menu-link text-base md:text-sm font-semibold hover:text-botones flex items-center gap-1">
Hotels
<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.586l3.71-3.356a.75.75 0 111.04 1.08l-4.25 3.85a.75.75 0 01-1.04 0l-4.25-3.85a.75.75 0 01.02-1.06z" clip-rule="evenodd"></path> </svg> </button> <ul class="absolute invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 top-[2.8rem] left-0 bg-white text-black rounded-md shadow-md w-56 z-50 py-2"> <li> <a href="/en/suenodorado" class="block px-4 py-2 hover:bg-gray-100 text-sm font-medium">
Sueno Dorado
</a> </li> <li> <a href="/lafortuna-downtown" class="block px-4 py-2 hover:bg-gray-100 text-sm font-medium">
Downtown Boutique
</a> </li> <li> <a href="/monte-real" class="block px-4 py-2 hover:bg-gray-100 text-sm font-medium">
Monte Real
</a> </li> <li> <a href="/en/cascadadefuego" class="block px-4 py-2 hover:bg-gray-100 text-sm font-medium">
Hotel Cascada de Fuego
</a> </li> </ul> </li> <li><a href="/en/tours" class="text-base md:text-sm font-semibold hover:text-botones flex items-center">Tours & Experiences</a></li> </ul> <div class="hidden md:flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-white"> <a href="/" class="hover:text-white">ES</a> <span class="text-white/60">|</span> <span class="text-white">EN</span> </div> <!-- Hamburger button --> <button id="mobile-menu-toggle" class="md:hidden focus:outline-none" aria-controls="mobile-menu" aria-expanded="false" onclick="window.toggleMobileMenu?.()"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> </button> </nav> <!-- Mobile menu --> <div id="mobile-menu" class="fixed inset-0 z-50 hidden md:hidden"> <button id="mobile-menu-backdrop" class="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-200" aria-label="Close menu" onclick="window.toggleMobileMenu?.()"></button> <div id="mobile-menu-panel" class="absolute top-0 right-0 h-full w-[85%] max-w-xs bg-[#879996] text-white p-6 overflow-y-auto translate-x-full transition-transform duration-200" role="dialog" aria-modal="true"> <div class="flex items-center justify-between pb-4 border-b border-white/20"> <span class="text-sm font-semibold uppercase tracking-widest">Menu</span> <button id="mobile-menu-close" class="text-white/90 text-sm uppercase tracking-wide" onclick="window.toggleMobileMenu?.()">
Close
</button> </div> <ul class="flex flex-col gap-4 pt-6 text-base font-semibold uppercase tracking-wide"> <li class="border-b border-white/10 pb-4"> <button class="w-full text-left flex items-center justify-between py-2" onclick="document.getElementById('mobile-villas').classList.toggle('hidden')">
Villas
<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.586l3.71-3.356a.75.75 0 111.04 1.08l-4.25 3.85a.75.75 0 01-1.04 0l-4.25-3.85a.75.75 0 01.02-1.06z" clip-rule="evenodd"></path> </svg> </button> <ul id="mobile-villas" class="hidden pl-4 mt-2 flex flex-col gap-3 text-sm font-normal tracking-normal uppercase"> <li><a href="/ecovilla" class="block py-1">Eco Villa</a></li> </ul> </li> <li class="border-b border-white/10 pb-4"> <button class="w-full text-left flex items-center justify-between py-2" onclick="document.getElementById('mobile-hoteles').classList.toggle('hidden')">
Hotels
<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.586l3.71-3.356a.75.75 0 111.04 1.08l-4.25 3.85a.75.75 0 01-1.04 0l-4.25-3.85a.75.75 0 01.02-1.06z" clip-rule="evenodd"></path> </svg> </button> <ul id="mobile-hoteles" class="hidden pl-4 mt-2 flex flex-col gap-3 text-sm font-normal tracking-normal uppercase"> <li><a href="/en/suenodorado" class="block py-1">Sueno Dorado</a></li> <li><a href="/lafortuna-downtown" class="block py-1">Downtown Boutique</a></li> <li><a href="/monte-real" class="block py-1">Monte Real</a></li> <li><a href="/en/cascadadefuego" class="block py-1">Hotel Cascada de Fuego</a></li> </ul> </li> <li class="border-b border-white/10 pb-4"> <a href="/en/tours" class="block py-2">Tours & Experiences</a> </li> <li class="flex items-center gap-2 pt-2 text-sm font-semibold"> <a href="/" class="hover:underline">ES</a> <span class="text-white/60">|</span> <span class="text-white">EN</span> </li> </ul> </div> </div> </header> <script>
  const menu = document.getElementById("mobile-menu");
  const panel = document.getElementById("mobile-menu-panel");
  const backdrop = document.getElementById("mobile-menu-backdrop");
  const toggleButton = document.getElementById("mobile-menu-toggle");
  const submenuIds = ["mobile-villas", "mobile-hoteles"];

  function setMenuOpen(open) {
    if (!menu || !panel || !backdrop) return;
    toggleButton?.setAttribute("aria-expanded", open ? "true" : "false");

    if (open) {
      menu.classList.remove("hidden");
      document.body.classList.add("overflow-hidden");
      requestAnimationFrame(() => {
        panel.classList.remove("translate-x-full");
        backdrop.classList.remove("opacity-0");
      });
      return;
    }

    panel.classList.add("translate-x-full");
    backdrop.classList.add("opacity-0");
    document.body.classList.remove("overflow-hidden");
    submenuIds.forEach((id) => {
      const submenu = document.getElementById(id);
      submenu?.classList.add("hidden");
    });
    window.setTimeout(() => {
      menu.classList.add("hidden");
    }, 200);
  }

  window.toggleMobileMenu = () => {
    const isHidden = menu?.classList.contains("hidden");
    setMenuOpen(Boolean(isHidden));
  };
<\/script>`])), maybeRenderHead(), renderComponent($$result, "Image", $$Image, { "src": logoAF, "alt": "Afortunados logo", "class": "h-auto w-40" }));
}, "C:/Users/gamer/Documents/GitHub/afortuna2new/src/components/en/HeaderEn.astro", void 0);

const $$WelcomeEn = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative h-[90vh] w-full sm:h-screen bg-cover bg-center flex items-center justify-start px-4 sm:px-8 md:px-12"${addAttribute(`background-image: url(${v2.src});`, "style")}> <div> <!-- Dark overlay --> <div class="absolute inset-0 bg-black/50 z-0"></div> <!-- Content --> <div class="relative z-10 max-w-3xl text-white space-y-5 sm:space-y-6"> <h1 class="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-8xl font-extrabold leading-tight">
A FRIEND IN COSTA RICA
</h1> <p class="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold uppercase">
Easy booking on WhatsApp and live Costa Rica like a local
</p> <p class="text-sm sm:text-base md:text-lg lg:text-1xl text-gray-200 leading-relaxed font-semibold">
Homes, villas, and tours around Arenal Volcano with personal attention, real
        recommendations, and stress-free logistics.
</p> <ul class="text-sm sm:text-base md:text-lg text-gray-200 space-y-2 font-semibold"> <li class="flex items-center gap-2"> <span class="inline-block h-2 w-2 rounded-full bg-white"></span>
Flexible check-in and immediate support
</li> <li class="flex items-center gap-2"> <span class="inline-block h-2 w-2 rounded-full bg-white"></span>
Private tours and reliable transportation
</li> <li class="flex items-center gap-2"> <span class="inline-block h-2 w-2 rounded-full bg-white"></span>
Ideal for families, couples, and groups
</li> </ul> <div class="flex flex-wrap items-center gap-4"> <a href="https://wa.me/50684597077" onclick="return gtagSendEvent(this.href, this.target)" class="inline-block px-8 py-4 bg-white text-black text-base md:text-lg rounded-full hover:bg-gray-200 transition">
Quote on WhatsApp
</a> </div> <p class="text-xs sm:text-sm text-gray-300">
120+ happy guests · Fast response
</p> </div> </div> </section>`;
}, "C:/Users/gamer/Documents/GitHub/afortuna2new/src/components/en/WelcomeEn.astro", void 0);

const $$ComentariesEn = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-gradient-to-br from-green-900 to-blue-100 py-16 px-6 text-white"> <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center"> <!-- Text + CTA --> <div class="space-y-6"> <h2 class="text-4xl font-extrabold leading-tight">
Do not leave without securing your dates <br>
We help you choose what is best!
</h2> <p class="text-lg leading-relaxed">
Our local team is ready to guide you with personalized attention and real recommendations
        for your trip. <br> <strong>Your next experience starts with a message.</strong> </p> <ul class="list-disc list-inside text-base text-white/90 space-y-1"> <li>Clear advice to choose lodging or tours</li> <li>Options for your budget and travel style</li> <li>Direct attention before and during your stay</li> </ul> <p class="text-sm text-white/80">
Popular dates fill fast: check availability today.
</p> <div class="flex flex-col sm:flex-row gap-4 pt-4"> <a href="https://wa.me/50684597077" onclick="return gtagSendEvent(this.href, this.target)" class="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full text-lg font-semibold text-center">
Quote on WhatsApp
</a> <a href="/en/vacacionales" class="border border-white/70 text-white px-6 py-3 rounded-full text-lg font-semibold text-center hover:bg-white hover:text-green-900 transition">
View stays
</a> </div> <p class="text-xs text-white/70">
Fast response and no commitment.
</p> </div> <!-- Images --> <div class="grid grid-cols-2 gap-4"> ${renderComponent($$result, "Image", $$Image, { "src": volcan, "class": "rounded-lg shadow-lg", "alt": "Arenal Volcano" })} ${renderComponent($$result, "Image", $$Image, { "src": villa, "class": "rounded-lg shadow-lg", "alt": "Nature" })} ${renderComponent($$result, "Image", $$Image, { "src": downtown, "class": "rounded-lg shadow-lg col-span-2", "alt": "Afortunados tour" })} </div> </div> </section>`;
}, "C:/Users/gamer/Documents/GitHub/afortuna2new/src/components/en/ComentariesEn.astro", void 0);

const $$InfoCasasEn = createComponent(($$result, $$props, $$slots) => {
  const servicios = [
    {
      titulo: "Stays",
      descripcion: "Stay in La Fortuna with local attention and prime locations.",
      imagen: casa.src,
      color: "bg-sky-50",
      url: "/en/vacacionales",
      cta: "View stays",
      badge: "120+ happy guests",
      bullets: [
        "Vacation homes carefully designed",
        "Flexible check-in and fast support",
        "Ideal for families, couples, and groups"
      ]
    },
    {
      titulo: "Adventure & Nature Activities",
      descripcion: "Tours and reliable transport to enjoy nature without stress.",
      imagen: tours.src,
      color: "bg-amber-50",
      url: "/en/tours",
      cta: "View tours",
      badge: "Verified operators",
      bullets: [
        "Adventure, hot springs, and nature",
        "Local guides and safe experiences",
        "Schedule coordination and transfers"
      ]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<main> <section class="relative flex justify-center"> <!-- Background with gradient --> <div class="absolute inset-0 w-full h-[600px] overflow-hidden"> <div class="absolute inset-0 bg-gradient-to-br from-green-600 via-blue-400 to-black/80"></div> </div> <!-- Content --> <div class="relative pt-40 pb-20 px-4 md:px-6 max-w-7xl mx-auto"> <div class="text-center mb-12 text-white"> <h2 class="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
Stays and tours in Costa Rica with 24/7 local support
</h2> <p class="text-white/90 max-w-2xl mx-auto text-lg">
Easy booking, fast support, and real experiences near La Fortuna. <br>
With <strong>Afortunados</strong>, you travel safe, comfortable, and worry-free.
</p> <p class="text-white/80 text-sm mt-4">
Fast response · Personalized attention
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center justify-items-center"> ${servicios.map((servicio) => renderTemplate`<div class="flex flex-col items-center text-center overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group w-full max-w-xs bg-white rounded-xl"> <!-- Image --> <div class="relative h-48 w-full overflow-hidden"> <img${addAttribute(servicio.imagen, "src")}${addAttribute(servicio.titulo, "alt")} class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy"> </div> <!-- Info --> <div${addAttribute(`${servicio.color} p-5 w-full`, "class")}> <h3 class="font-bold text-lg mb-2 upper">${servicio.titulo}</h3> <p class="text-sm text-gray-700 min-h-[3rem]">${servicio.descripcion}</p> <ul class="text-sm text-gray-700 mt-4 space-y-2"> ${servicio.bullets.map((bullet) => renderTemplate`<li class="flex items-center gap-2"> <span class="inline-block h-2 w-2 rounded-full bg-emerald-500"></span> ${bullet} </li>`)} </ul> <div class="mt-4 inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-700"> ${servicio.badge} </div> </div> <!-- Button --> <div${addAttribute(`${servicio.color} pt-0 pb-5 px-5 w-full`, "class")}> <a${addAttribute(servicio.url, "href")}${addAttribute(servicio.cta, "aria-label")} class="block w-full text-center sm:flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-green-400 hover:from-green-600 hover:to-emerald-500 text-white font-semibold py-2 px-4 rounded-full transition duration-200"> ${servicio.cta} <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path> </svg> </a> </div> </div>`)} </div> </div> </section> </main>`;
}, "C:/Users/gamer/Documents/GitHub/afortuna2new/src/components/en/InfoCasasEn.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div> ${renderComponent($$result2, "Header", $$HeaderEn, {})} </div> <div> ${renderComponent($$result2, "Welcome", $$WelcomeEn, {})} </div> ${renderComponent($$result2, "AboutUs", $$AboutUsEn, {})} ${renderComponent($$result2, "InfoCasas", $$InfoCasasEn, {})} ${renderComponent($$result2, "ToursTeaser", $$ToursTeaserEN, {})} ${renderComponent($$result2, "Comentaries", $$ComentariesEn, {})} ${renderComponent($$result2, "Footer", $$FooterEn, {})} ` })}`;
}, "C:/Users/gamer/Documents/GitHub/afortuna2new/src/pages/en/index.astro", void 0);

const $$file = "C:/Users/gamer/Documents/GitHub/afortuna2new/src/pages/en/index.astro";
const $$url = "/en";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
