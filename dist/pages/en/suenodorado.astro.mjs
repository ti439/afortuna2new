/* empty css                                   */
import { c as createComponent, m as maybeRenderHead, e as addAttribute, d as renderTemplate, f as renderComponent, r as renderHead } from '../../chunks/astro/server_0zlbAbnM.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { v as volcanBg, f as familia, k as king, q as quintuple, c as cuadruples, p as piscinas, j as jardines, l as logoAF } from '../../chunks/logosuenosV_D2L27wyJ.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from '../../chunks/_astro_assets_Cf83jt-1.mjs';
import { v as v2 } from '../../chunks/v2_CZudLLzn.mjs';
import { $ as $$Footer } from '../../chunks/Footer_CRNz6cnf.mjs';
import { $ as $$Hreflang } from '../../chunks/Hreflang_CRzrx2EL.mjs';
import { $ as $$ToursTeaserEN } from '../../chunks/ToursTeaserEN_DMYl_y2B.mjs';
import { $ as $$WhatsAppButtonEn } from '../../chunks/WhatsAppButtonEn_BKhDBu1J.mjs';
/* empty css                                    */
/* empty css                                          */
export { renderers } from '../../renderers.mjs';

const $$HeroEn = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative h-[70%] sm:h-screen bg-cover bg-center text-white"${addAttribute(`background-image: url(${volcanBg.src})`, "style")}> <div class="absolute inset-0 bg-black/40 z-0 backdrop-blur-sm"></div> <div class="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-8 max-w-4xl mx-auto"> <span class="inline-flex items-center gap-2 bg-white/15 px-4 py-2 rounded-full text-sm uppercase tracking-widest">
Direct booking with the hotel
</span> <h1 class="mt-6 text-3xl sm:text-5xl font-bold drop-shadow-lg">
Your escape facing the majestic <br class="hidden md:block">
Arenal Volcano
</h1> <p class="mt-6 text-xl md:text-2xl font-light drop-shadow-md max-w-2xl">
Private hot springs, panoramic views, and warm service for an unforgettable stay.
</p> <div class="mt-8 flex flex-col sm:flex-row items-center gap-4"> <a href="https://reservations.orbebooking.com/Search/Init/Ero8S/en" class="text-lg sm:text-xl inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-7 rounded-full transition duration-300">
Book now
</a> <a href="#hospedajes" class="text-lg sm:text-xl inline-block border border-white/70 hover:bg-white/10 text-white font-semibold py-3 px-7 rounded-full transition duration-300">
View rooms
</a> </div> <div class="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-white/90 w-full"> <div class="bg-white/10 rounded-lg py-3 px-4">Private hot springs</div> <div class="bg-white/10 rounded-lg py-3 px-4">Breakfast included</div> <div class="bg-white/10 rounded-lg py-3 px-4">Volcano views</div> </div> </div> </section>`;
}, "C:/Users/gamer/Documents/GitHub/afortuna2new/src/components/suenodorado/en/HeroEn.astro", void 0);

const $$AboutUsEn = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="about-us" class="py-16 bg-white text-gray-800"> <div class="mx-auto px-4 md:px-8 flex flex-col-reverse md:flex-row sm:justify-center items-center gap-12"> <div class="w-full md:w-1/2"> <h2 class="text-4xl md:text-4xl font-bold mb-6 text-amber-600">
A story born in the heart of La Fortuna
</h2> <p class="text-1xl sm:text-base leading-relaxed mb-4">
Founded by the Hidalgo-Sanchez family, Hotel Sueno Dorado keeps the warmth and Costa Rican hospitality that make every guest feel part of our family.
</p> <p class="text-1xl sm:text-base leading-relaxed mb-4">
The whisper of hot springs, the majesty of Arenal Volcano, and the rainforest symphony create the perfect setting to disconnect and reconnect with what matters most.
</p> <blockquote class="mt-6 text-xl text-amber-700 italic font-medium border-l-4 border-amber-500 pl-4">
"True luxury lives in the small details that make you feel at home."
</blockquote> </div> <div class="w-full md:w-1/3"> ${renderComponent($$result, "Image", $$Image, { "src": familia, "alt": "Founding family of Hotel Sueno Dorado", "class": "rounded-2xl shadow-xl object-cover w-full h-auto" })} </div> </div> </section>`;
}, "C:/Users/gamer/Documents/GitHub/afortuna2new/src/components/suenodorado/en/AboutUsEn.astro", void 0);

const $$HabitacionesEn = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="hospedajes" class="py-16 bg-gray-50 text-gray-800"> <div class="mx-auto px-4 md:px-8"> <h2 class="text-3xl md:text-4xl font-bold text-center text-amber-600 mb-4">
Rooms designed for deep rest
</h2> <p class="text-center text-gray-600 text-base md:text-lg mb-12">
Choose the ideal option for your trip and book direct with the hotel in minutes.
</p> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> <div class="bg-white rounded-xl shadow-md overflow-hidden"> ${renderComponent($$result, "Image", $$Image, { "src": king, "alt": "King room", "class": "w-full h-56 object-cover" })} <div class="p-6"> <h3 class="text-xl font-semibold text-amber-700 mb-2">Sanctuary of Intimacy</h3> <p class="text-gray-700 text-base mb-4">
A space where romance and privacy take center stage. Our King room offers unbeatable Arenal Volcano views.
</p> <div class="mt-2 flex flex-wrap gap-3"> <a${addAttribute(`/habitaciones/${"king"}`, "href")} class="inline-block bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-4 rounded-full transition duration-300">
View details
</a> <a href="https://reservations.orbebooking.com/Search/Init/Ero8S/en" class="inline-block border border-amber-500 text-amber-700 hover:bg-amber-50 font-medium py-2 px-4 rounded-full transition duration-300">
Book now
</a> </div> </div> </div> <div class="bg-white rounded-xl shadow-md overflow-hidden"> ${renderComponent($$result, "Image", $$Image, { "src": quintuple, "alt": "Family room", "class": "w-full h-56 object-cover" })} <div class="p-6"> <h3 class="text-xl font-semibold text-amber-700 mb-2">Family Retreat</h3> <p class="text-gray-700 text-base mb-4">
Spacious rooms for up to 5 guests with air conditioning and full amenities, perfect for family time in La Fortuna.
</p> <div class="mt-2 flex flex-wrap gap-3"> <a${addAttribute(`/habitaciones/${"familiar"}`, "href")} class="inline-block bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-4 rounded-full transition duration-300">
View details
</a> <a href="https://reservations.orbebooking.com/Search/Init/Ero8S/en" class="inline-block border border-amber-500 text-amber-700 hover:bg-amber-50 font-medium py-2 px-4 rounded-full transition duration-300">
Book now
</a> </div> </div> </div> <div class="bg-white rounded-xl shadow-md overflow-hidden"> ${renderComponent($$result, "Image", $$Image, { "src": cuadruples, "alt": "Quad room", "class": "w-full h-56 object-cover" })} <div class="p-6"> <h3 class="text-xl font-semibold text-amber-700 mb-2">Shared Experience</h3> <p class="text-gray-700 text-base mb-4">
Ideal for friends or families, these rooms for 4 combine privacy and connection for a memorable stay.
</p> <div class="mt-2 flex flex-wrap gap-3"> <a${addAttribute(`/habitaciones/${"cuadruple"}`, "href")} class="inline-block bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-4 rounded-full transition duration-300">
View details
</a> <a href="https://reservations.orbebooking.com/Search/Init/Ero8S/en" class="inline-block border border-amber-500 text-amber-700 hover:bg-amber-50 font-medium py-2 px-4 rounded-full transition duration-300">
Book now
</a> </div> </div> </div> </div> </div> </section>`;
}, "C:/Users/gamer/Documents/GitHub/afortuna2new/src/components/suenodorado/en/HabitacionesEn.astro", void 0);

const $$InstalacionesEn = createComponent(($$result, $$props, $$slots) => {
  const restaurante = "https://i.ibb.co/BV1KZZ0S/IMG-6005-2.jpg";
  return renderTemplate`${maybeRenderHead()}<section id="facilities" class="py-16 bg-white text-gray-800"> <div class="mx-auto px-4 md:px-8"> <h2 class="text-3xl md:text-4xl font-bold text-center text-amber-600 mb-12">
Facilities that awaken your senses
</h2> <div class="space-y-12"> <div class="flex flex-col lg:flex-row items-center gap-8"> <div class="lg:w-1/2"> ${renderComponent($$result, "Image", $$Image, { "src": piscinas, "alt": "Thermal pools", "class": "rounded-xl shadow-lg w-full h-auto object-cover" })} </div> <div class="lg:w-1/2"> <h3 class="text-2xl font-semibold text-amber-700 mb-4">Thermal Pools</h3> <p class="text-gray-700 text-lg leading-relaxed">
Enjoy five pools, four of them fed directly by Arenal Volcano hot springs. Different temperatures create a therapeutic experience with volcano views.
</p> </div> </div> <div class="flex flex-col lg:flex-row-reverse items-center gap-8"> <div class="lg:w-1/2"> ${renderComponent($$result, "Image", $$Image, { "src": jardines, "alt": "Tropical gardens", "class": "rounded-xl shadow-lg w-full h-auto object-cover" })} </div> <div class="lg:w-1/2"> <h3 class="text-2xl font-semibold text-amber-700 mb-4">Tropical Gardens</h3> <p class="text-gray-700 text-lg leading-relaxed">
Wander through native flora, listen to exotic birds, and connect with Costa Rican biodiversity in every corner of our gardens.
</p> </div> </div> <div class="flex flex-col lg:flex-row items-center gap-8"> <div class="lg:w-1/2"> <img${addAttribute(restaurante, "src")} alt="Gourmet restaurant" class="rounded-xl shadow-lg w-full h-auto object-cover" loading="lazy" decoding="async"> </div> <div class="lg:w-1/2"> <h3 class="text-2xl font-semibold text-amber-700 mb-4">Gourmet Restaurant</h3> <p class="text-gray-700 text-lg leading-relaxed">
Enjoy an unforgettable culinary experience with Angus cuts, fresh Pacific seafood, and traditional recipes prepared with local ingredients.
</p> </div> </div> </div> </div> </section>`;
}, "C:/Users/gamer/Documents/GitHub/afortuna2new/src/components/suenodorado/en/InstalacionesEn.astro", void 0);

const $$ExperienciasEn = createComponent(($$result, $$props, $$slots) => {
  const bienestar = "https://cdn.arenalcloud.com/arenal-a65b6eb9-29d7-4dec-9784-b1b37ff7dfce-afortunados/7b0ccd43c52b6e51a81af781727b4dfe.jpg";
  const aventura = "https://cdn.arenalcloud.com/arenal-a65b6eb9-29d7-4dec-9784-b1b37ff7dfce-afortunados/27f1d784567f0c562d3f711e91e89156.jpg";
  const cultura = "https://cdn.arenalcloud.com/arenal-a65b6eb9-29d7-4dec-9784-b1b37ff7dfce-afortunados/2c8e427c39ad361879db90a0b50b4df2.jpg";
  return renderTemplate`${maybeRenderHead()}<section id="experiences" class="py-16 bg-gray-50 text-gray-800"> <div class="mx-auto px-4 md:px-8"> <h2 class="text-3xl md:text-4xl font-bold text-center text-amber-600 mb-4">
Live unique experiences
</h2> <p class="text-center text-gray-600 text-base md:text-lg mb-12">
Complement your stay with wellness, adventure, or culture, and book directly with our team.
</p> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> <div class="bg-white rounded-xl shadow-md overflow-hidden flex flex-col"> <img${addAttribute(bienestar, "src")} alt="Wellness spa" class="h-52 w-full object-cover" loading="lazy" decoding="async"> <div class="p-6 flex-1 flex flex-col"> <h3 class="text-xl font-semibold text-amber-700 mb-2">Wellness</h3> <p class="text-gray-700 text-base mb-4 flex-1">
Turn your room into a sanctuary with therapeutic massages and rejuvenating treatments. Relax with local essential oils in the privacy of your space.
</p> <a href="#reservar" class="mt-auto inline-block bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-4 rounded-full transition">
Book an experience
</a> </div> </div> <div class="bg-white rounded-xl shadow-md overflow-hidden flex flex-col"> ${renderComponent($$result, "Image", $$Image, { "src": aventura, "alt": "Adventure tours", "class": "h-52 w-full object-cover" })} <div class="p-6 flex-1 flex flex-col"> <h3 class="text-xl font-semibold text-amber-700 mb-2">Adventure</h3> <p class="text-gray-700 text-base mb-4 flex-1">
Canopy, rafting, hiking, and hidden waterfalls. Our team connects you with authentic experiences in La Fortuna.
</p> <a href="/tours" class="mt-auto inline-block bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-4 rounded-full transition">
Explore tours
</a> </div> </div> <div class="bg-white rounded-xl shadow-md overflow-hidden flex flex-col"> <img${addAttribute(cultura, "src")} alt="Cultural experiences" class="h-52 w-full object-cover" loading="lazy" decoding="async"> <div class="p-6 flex-1 flex flex-col"> <h3 class="text-xl font-semibold text-amber-700 mb-2">Culture</h3> <p class="text-gray-700 text-base mb-4 flex-1">
From traditional cooking workshops to visits with local communities. Discover Costa Rica beyond conventional tourism.
</p> <a href="#reservar" class="mt-auto inline-block bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-4 rounded-full transition">
Learn more
</a> </div> </div> </div> </div> </section>`;
}, "C:/Users/gamer/Documents/GitHub/afortuna2new/src/components/suenodorado/en/ExperienciasEn.astro", void 0);

const $$ContactoEn = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="reservar" class="relative bg-cover bg-center text-white"${addAttribute(`background-image: url(${v2.src});`, "style")}> <div class="absolute inset-0 bg-black/60 backdrop-blur-sm z-0"></div> <div class="relative z-10 max-w-3xl mx-auto text-center py-24 px-6"> <h2 class="text-3xl md:text-4xl font-bold mb-6">Ready for your nature escape?</h2> <p class="text-lg md:text-xl mb-8">
Book direct with the hotel and receive attentive support to personalize every detail of your stay.
</p> <div class="flex flex-col md:flex-row justify-center gap-4"> <a href="https://reservations.orbebooking.com/Search/Init/Ero8S/en" class="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded-full transition">
Book now
</a> <a href="https://wa.me/50663156210" onclick="return gtagSendEvent(this.href, this.target)" target="_blank" rel="noopener noreferrer" class="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full transition">
Ask on WhatsApp
</a> </div> <p class="mt-10 italic text-amber-300 font-medium text-lg">
"At Sueno Dorado, we do not just sell rooms, we create memories that last a lifetime."
</p> </div> </section>`;
}, "C:/Users/gamer/Documents/GitHub/afortuna2new/src/components/suenodorado/en/ContactoEn.astro", void 0);

const $$BeneficiosEn = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="benefits" class="py-16 bg-white text-gray-800"> <div class="container mx-auto px-4 md:px-8 max-w-4xl"> <h2 class="text-3xl md:text-4xl font-bold text-center text-amber-600 mb-10">
Benefits of booking direct at Sueno Dorado
</h2> <ul class="space-y-6 text-lg list-disc list-inside text-gray-700"> <li><strong>Panoramic volcano views</strong> from every room, bar, and restaurant.</li> <li><strong>Exclusive hot springs</strong> in an intimate, private setting.</li> <li><strong>Happy Hour bar</strong> (5-7 pm) with premium cocktails and a relaxed vibe.</li> <li><strong>Gourmet restaurant</strong> with Angus cuts, fresh seafood, and family-friendly options.</li> <li><strong>Breakfast buffet included</strong>, delicious, varied, and energizing.</li> <li><strong>Fiber Wi-Fi</strong>, air conditioning, private parking, cable TV, and comfort in every room.</li> <li><strong>Direct hotel attention</strong> to help with special requests and local tips.</li> </ul> <p class="mt-10 text-xl font-medium text-center text-gray-800">
Sueno Dorado is more than a hotel. It is your space to reconnect with what truly matters: family, your partner, and your well-being.
</p> <p class="mt-4 text-center text-amber-600 italic text-lg font-semibold">
"Book today and start living the golden dream of your vacation."
</p> </div> </section>`;
}, "C:/Users/gamer/Documents/GitHub/afortuna2new/src/components/suenodorado/en/BeneficiosEn.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$HeaderSuenoEn = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<header class="w-full bg-yellow-200/10 text-gray-800 shadow"> <nav class="flex items-center justify-between px-6 md:px-12 py-4"> <a href="/en/suenodorado"> ', ' </a> <ul class="hidden md:flex gap-8 text-base sm:text-sm font-semibold uppercase tracking-wide"> <li><a href="/en" class="hover:underline">Home</a></li> <li><a href="#hospedajes" class="hover:underline">Rooms</a></li> <li><a href="/tours" class="hover:underline">Tours</a></li> </ul> <div class="hidden md:flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-gray-700"> <a href="/suenodorado" class="hover:text-gray-900">ES</a> <span class="text-gray-400">|</span> <span class="text-gray-900">EN</span> </div> <button id="mobile-menu-toggle" class="md:hidden focus:outline-none" aria-controls="mobile-menu" aria-expanded="false" aria-label="Open menu" onclick="window.toggleMobileMenu?.()"> <svg class="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> </button> </nav> <div id="mobile-menu" class="fixed inset-0 z-50 hidden md:hidden"> <button id="mobile-menu-backdrop" class="absolute inset-0 bg-black/30 opacity-0 transition-opacity duration-200" aria-label="Close menu" onclick="window.toggleMobileMenu?.()"></button> <div id="mobile-menu-panel" class="absolute top-0 right-0 h-full w-[85%] max-w-xs bg-white text-gray-800 p-6 overflow-y-auto translate-x-full transition-transform duration-200" role="dialog" aria-modal="true"> <div class="flex items-center justify-between pb-4 border-b border-gray-200"> <span class="text-sm font-semibold uppercase tracking-widest">Menu</span> <button id="mobile-menu-close" class="text-gray-700 text-sm uppercase tracking-wide" onclick="window.toggleMobileMenu?.()">\nClose\n</button> </div> <ul class="flex flex-col gap-4 pt-6 text-base font-semibold uppercase tracking-wide"> <li class="border-b border-gray-100 pb-4"> <a href="/en" class="block py-2">Home</a> </li> <li class="border-b border-gray-100 pb-4"> <a href="#hospedajes" class="block py-2">Rooms</a> </li> <li class="border-b border-gray-100 pb-4"> <a href="/tours" class="block py-2">Tours</a> </li> <li class="flex items-center gap-2 pt-2 text-sm font-semibold"> <a href="/suenodorado" class="hover:underline">ES</a> <span class="text-gray-400">|</span> <span class="text-gray-900">EN</span> </li> </ul> </div> </div> </header> <script>\n  const menu = document.getElementById("mobile-menu");\n  const panel = document.getElementById("mobile-menu-panel");\n  const backdrop = document.getElementById("mobile-menu-backdrop");\n  const toggleButton = document.getElementById("mobile-menu-toggle");\n\n  function setMenuOpen(open) {\n    if (!menu || !panel || !backdrop) return;\n    toggleButton?.setAttribute("aria-expanded", open ? "true" : "false");\n\n    if (open) {\n      menu.classList.remove("hidden");\n      document.body.classList.add("overflow-hidden");\n      requestAnimationFrame(() => {\n        panel.classList.remove("translate-x-full");\n        backdrop.classList.remove("opacity-0");\n      });\n      return;\n    }\n\n    panel.classList.add("translate-x-full");\n    backdrop.classList.add("opacity-0");\n    document.body.classList.remove("overflow-hidden");\n    window.setTimeout(() => {\n      menu.classList.add("hidden");\n    }, 200);\n  }\n\n  window.toggleMobileMenu = () => {\n    const isHidden = menu?.classList.contains("hidden");\n    setMenuOpen(Boolean(isHidden));\n  };\n<\/script>'])), maybeRenderHead(), renderComponent($$result, "Image", $$Image, { "src": logoAF, "alt": "Sueno Dorado logo", "class": "w-64 bg-cover sm:h-auto" }));
}, "C:/Users/gamer/Documents/GitHub/afortuna2new/src/components/suenodorado/en/HeaderSuenoEn.astro", void 0);

const $$OtrosHospedajesBannerEn = createComponent(($$result, $$props, $$slots) => {
  const hospedajes = [
    {
      name: "Downtown La Fortuna Boutique Hotel",
      tag: "At the Heart of Experiences",
      description: "We are the most centrally located hotel in La Fortuna, surrounded by culture, nature, and gastronomy.",
      url: "/en/lafortuna-downtown",
      image: "https://cdn.arenalcloud.com/arenal-a65b6eb9-29d7-4dec-9784-b1b37ff7dfce-afortunados/ff6601f025ae5fdb8c63cbcb67f7b91f.png"
    },
    {
      name: "Eco Village",
      tag: "Love, privacy, and nature in perfect harmony",
      description: "Nestled in the mountains with breathtaking views of the valley and rainforest, Eco Village is an intimate cabin created especially for couples who want to celebrate romantic and special moments.",
      url: "/en/ecovilla",
      image: "https://cdn.arenalcloud.com/arenal-a65b6eb9-29d7-4dec-9784-b1b37ff7dfce-afortunados/7b1f6e4fa0414a15f8165e41f0998950.jpg"
    },
    {
      name: "Hotel Monte Real",
      tag: "Boutique",
      description: "Modern suites, rooftop views, and personalized service.",
      url: "/en/monte-real",
      image: "https://cdn.arenalcloud.com/arenal-a65b6eb9-29d7-4dec-9784-b1b37ff7dfce-afortunados/49792c3c669ca4a28872da7daa116cad.jpg"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="other-stays" class="py-16 bg-gradient-to-b from-amber-50 to-white text-gray-800"> <div class="mx-auto px-4 md:px-8"> <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-10"> <div> <p class="text-sm uppercase tracking-widest text-amber-600 font-semibold">More options</p> <h2 class="text-3xl md:text-4xl font-bold text-amber-700 mt-2">
Other stays for your next getaway
</h2> <p class="text-gray-600 mt-3 max-w-2xl">
Explore nearby alternatives with different styles. Share with your client and choose the ideal experience.
</p> </div> <a href="/en/hospedajes" class="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-full transition">
View all
<span aria-hidden="true">→</span> </a> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> ${hospedajes.map((hospedaje) => renderTemplate`<a${addAttribute(hospedaje.url, "href")} class="group bg-white rounded-2xl shadow-md overflow-hidden border border-amber-100 hover:shadow-xl transition"> <div class="relative h-52 overflow-hidden"> <img${addAttribute(hospedaje.image, "src")}${addAttribute(hospedaje.name, "alt")} class="h-full w-full object-cover group-hover:scale-105 transition duration-500" loading="lazy" decoding="async"> <span class="absolute top-4 left-4 bg-white/90 text-amber-700 text-xs font-semibold px-3 py-1 rounded-full"> ${hospedaje.tag} </span> </div> <div class="p-6"> <h3 class="text-xl font-semibold text-amber-700">${hospedaje.name}</h3> <p class="text-gray-600 mt-2">${hospedaje.description}</p> <div class="mt-5 inline-flex items-center text-amber-600 font-semibold">
Learn more
<span class="ml-2" aria-hidden="true">→</span> </div> </div> </a>`)} </div> </div> </section>`;
}, "C:/Users/gamer/Documents/GitHub/afortuna2new/src/components/suenodorado/en/OtrosHospedajesBannerEn.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$HotelLayoutEn = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(['<html lang="en" data-astro-cid-eaphqvkf> <head><title>Hotel Sueno Dorado</title><meta charset="UTF-8"><meta name="viewport" content="width=device-width">', '<script>\n      function gtagSendEvent(url, target) {\n        var isBlank = target === "_blank";\n        var navigate = function () {\n          if (!isBlank && typeof url === "string") {\n            window.location = url;\n          }\n        };\n        if (typeof gtag === "function") {\n          gtag("event", "conversion_event_outbound_click", {\n            event_callback: navigate,\n            event_timeout: 2000,\n          });\n          return !isBlank;\n        }\n        navigate();\n        return !isBlank;\n      }\n    <\/script>', '</head> <body class="bg-white text-gray-900" data-astro-cid-eaphqvkf> ', " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " </body></html>"])), renderComponent($$result, "Hreflang", $$Hreflang, { "data-astro-cid-eaphqvkf": true }), renderHead(), renderComponent($$result, "Header", $$HeaderSuenoEn, { "data-astro-cid-eaphqvkf": true }), renderComponent($$result, "Hero", $$HeroEn, { "data-astro-cid-eaphqvkf": true }), renderComponent($$result, "AboutUs", $$AboutUsEn, { "data-astro-cid-eaphqvkf": true }), renderComponent($$result, "Habitaciones", $$HabitacionesEn, { "data-astro-cid-eaphqvkf": true }), renderComponent($$result, "Instalaciones", $$InstalacionesEn, { "data-astro-cid-eaphqvkf": true }), renderComponent($$result, "Experiencias", $$ExperienciasEn, { "data-astro-cid-eaphqvkf": true }), renderComponent($$result, "OtrosHospedajesBanner", $$OtrosHospedajesBannerEn, { "data-astro-cid-eaphqvkf": true }), renderComponent($$result, "ToursTeaser", $$ToursTeaserEN, { "data-astro-cid-eaphqvkf": true }), renderComponent($$result, "Beneficios", $$BeneficiosEn, { "data-astro-cid-eaphqvkf": true }), renderComponent($$result, "Contacto", $$ContactoEn, { "data-astro-cid-eaphqvkf": true }), renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-eaphqvkf": true }), renderComponent($$result, "WhatsAppButton", $$WhatsAppButtonEn, { "data-astro-cid-eaphqvkf": true }));
}, "C:/Users/gamer/Documents/GitHub/afortuna2new/src/layouts/HotelLayoutEn.astro", void 0);

const $$Suenodorado = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Hotel", $$HotelLayoutEn, {})}`;
}, "C:/Users/gamer/Documents/GitHub/afortuna2new/src/pages/en/suenodorado.astro", void 0);

const $$file = "C:/Users/gamer/Documents/GitHub/afortuna2new/src/pages/en/suenodorado.astro";
const $$url = "/en/suenodorado";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Suenodorado,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
