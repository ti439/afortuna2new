/* empty css                                   */
import { c as createComponent, m as maybeRenderHead, e as addAttribute, d as renderTemplate, f as renderComponent, g as createAstro, r as renderHead } from '../../chunks/astro/server_0zlbAbnM.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from '../../chunks/_astro_assets_Cf83jt-1.mjs';
import { s as senderoFoto } from '../../chunks/monteverde_D-idUZkl.mjs';
import { v as volcan } from '../../chunks/habitacion_DQUvn9Fc.mjs';
import { $ as $$Footer } from '../../chunks/Footer_CRNz6cnf.mjs';
import { $ as $$Hreflang } from '../../chunks/Hreflang_CRzrx2EL.mjs';
import { $ as $$ToursTeaserEN } from '../../chunks/ToursTeaserEN_DMYl_y2B.mjs';
import { $ as $$WhatsAppButtonEn } from '../../chunks/WhatsAppButtonEn_BKhDBu1J.mjs';
/* empty css                                    */
/* empty css                                             */
export { renderers } from '../../renderers.mjs';

const $$HeroEn = createComponent(($$result, $$props, $$slots) => {
  const heroBgUrl = "https://i.ibb.co/zWDQKjrm/fuera.jpg";
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`relative flex items-center h-screen text-[#e8e2d9] ${"bg-cover bg-center" }`, "class")}${addAttribute(`background-image: url(${heroBgUrl});` , "style")}> ${renderTemplate`<div class="absolute inset-0 bg-black/45"></div>`} <div class="relative z-10 w-full flex flex-col items-center text-center px-6 sm:px-8 max-w-5xl mx-auto space-y-8"> <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
Costa Rican flavor, living tradition, and soulful rest
</h1> <p class="text-lg sm:text-xl md:text-2xl font-medium text-[#d2c9be]">
Some places are not just visited... they feel like home
</p> <a href="https://us2.cloudbeds.com/reservation/brsfX9" class="inline-block bg-[#e6ddd2] text-[#2f4b2c] font-semibold text-lg sm:text-xl py-3 px-8 rounded-md shadow transition duration-300 hover:-translate-y-0.5 hover:shadow-lg">
Book your experience
</a> </div> </section>`;
}, "C:/Users/gamer/Documents/GitHub/afortuna2new/src/components/luisita/en/HeroEn.astro", void 0);

const $$AboutUsEn = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="sobre-nosotros" class="bg-[#f8f5ef] text-[#2f2a26] py-16 md:py-20"> <div class="max-w-5xl mx-auto px-6 sm:px-8 text-center space-y-8"> <h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold">
A story that started in Zarcero
</h2> <p class="text-xl sm:text-2xl leading-relaxed">
Abuela Luisita is born from something deeply Costa Rican: love for the table, the family
      craft, and pride in doing things well. From the bakery that brought neighbors together in
      Zarcero, a dream grew that now welcomes travelers with the same essence: home-style flavor,
      warm attention, and living tradition.
</p> </div> </section>`;
}, "C:/Users/gamer/Documents/GitHub/afortuna2new/src/components/luisita/en/AboutUsEn.astro", void 0);

const premium = new Proxy({"src":"/_astro/Habprem.BO66egqW.jpg","width":2560,"height":1772,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/gamer/Documents/GitHub/afortuna2new/src/assets/Habprem.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/gamer/Documents/GitHub/afortuna2new/src/assets/Habprem.jpg");
							return target[name];
						}
					});

const standard = new Proxy({"src":"/_astro/Habjrs.BAwjOmaj.jpg","width":1894,"height":1168,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/gamer/Documents/GitHub/afortuna2new/src/assets/Habjrs.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/gamer/Documents/GitHub/afortuna2new/src/assets/Habjrs.jpg");
							return target[name];
						}
					});

const $$HabitacionesEn = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="hospedajes" class="bg-[#f2eee9] text-[#2f2a26] py-16 md:py-20"> <div class="max-w-6xl mx-auto px-6 sm:px-8 space-y-12"> <div class="text-center space-y-4"> <h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold">
Rest in a space that embraces you
</h2> <p class="text-lg sm:text-xl md:text-[21px] leading-relaxed max-w-4xl mx-auto">
At Hotel Abuela Luisita, each room combines comfort, design, and a deep nod to Costa Rica.
        The experience is completed with artistic resin details inspired by the biodiversity of La
        Fortuna, creating a setting that does not just look nice: it feels authentic.
</p> </div> <div class="grid grid-cols-1 lg:grid-cols-2 gap-8"> <div class="bg-white rounded-2xl shadow-md overflow-hidden border border-[#e8e0d6] flex flex-col"> <div class="relative"> ${renderComponent($$result, "Image", $$Image, { "src": premium, "alt": "Premium room with jacuzzi", "class": "w-full h-72 sm:h-80 object-cover" })} <span class="absolute top-3 right-3 inline-flex items-center gap-1 bg-[#d96c3f] text-white text-sm font-semibold px-3 py-1 rounded-full shadow"> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-4 w-4"> <path d="M12 3 8.5 8.5 3 12l5.5 3.5L12 21l3.5-5.5L21 12l-5.5-3.5Z"></path> </svg>
Premium
</span> </div> <div class="p-6 flex flex-col gap-4"> <h3 class="text-2xl font-semibold">Premium with Jacuzzi</h3> <p class="text-base leading-relaxed text-[#4b463f]">
Each premium room is more than a place to sleep: it is a retreat designed to celebrate
            rest. Exclusive handmade resin art, inspired by local biodiversity, adds a unique
            artistic touch.
</p> <a${addAttribute(`https://us2.cloudbeds.com/reservation/brsfX9`, "href")} class="mt-2 inline-block text-center border border-[#ded7cf] hover:border-[#c8bcad] text-[#2f2a26] font-medium py-3 px-4 rounded-lg transition">
View details
</a> </div> </div> <div class="bg-white rounded-2xl shadow-md overflow-hidden border border-[#e8e0d6] flex flex-col"> <div class="relative"> ${renderComponent($$result, "Image", $$Image, { "src": standard, "alt": "Bright standard room", "class": "w-full h-72 sm:h-80 object-cover" })} </div> <div class="p-6 flex flex-col gap-4"> <h3 class="text-2xl font-semibold">Standard Room</h3> <p class="text-base leading-relaxed text-[#4b463f]">
The standard room is a perfect balance between comfort and contemporary style. Natural
            materials, fine finishes, and a calm atmosphere come together with artisanal resin
            pieces that celebrate our identity.
</p> <a${addAttribute(`/habitaciones/${"standard"}`, "href")} class="mt-2 inline-block text-center border border-[#ded7cf] hover:border-[#c8bcad] text-[#2f2a26] font-medium py-3 px-4 rounded-lg transition">
View details
</a> </div> </div> </div> </div> </section>`;
}, "C:/Users/gamer/Documents/GitHub/afortuna2new/src/components/luisita/en/HabitacionesEn.astro", void 0);

const $$RestauranteEn = createComponent(($$result, $$props, $$slots) => {
  const restauranteFoto = "https://cdn.arenalcloud.com/arenal-a65b6eb9-29d7-4dec-9784-b1b37ff7dfce-afortunados/resta_8bafe231.jpg";
  return renderTemplate`${maybeRenderHead()}<section id="tours" class="relative overflow-hidden bg-amber-50/60 py-16 px-6"> <div class="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl"></div> <div class="pointer-events-none absolute -right-20 -top-16 h-80 w-80 rounded-full bg-emerald-200/40 blur-3xl"></div> <div class="relative mx-auto max-w-6xl"> <div class="mb-10 text-center"> <p class="text-xs font-semibold uppercase tracking-[0.2em] text-amber-800/80">Restaurant</p> <h2 class="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
Abuela Luisita Restaurant: Costa Rican cuisine with history and heart
</h2> <p class="mt-3 text-base text-gray-700">
In the heart of La Fortuna, we celebrate food that brings family together and tells stories.
</p> </div> <div class="grid grid-cols-1 gap-8 lg:grid-cols-2"> <div class="rounded-2xl bg-white p-6 shadow-lg md:p-8"> <h3 class="text-xl font-semibold text-gray-900">Tradition that tastes like home</h3> <p class="mt-3 text-sm text-gray-600">
What started as a baking tradition in Zarcero now becomes a menu that honors the flavors
          of always with fresh local ingredients.
</p> <p class="mt-4 text-sm text-gray-600">
The atmosphere is warm, welcoming, and authentic. From traditional breakfasts to start
          the day with energy, to lunches and dinners that feel like home, every dish is made so the
          visitor takes home more than a good photo: they take an emotional memory.
</p> <div class="mt-6 rounded-xl bg-amber-50 px-5 py-4"> <p class="text-sm font-semibold text-amber-900">Ideal for</p> <ul class="mt-3 space-y-2 text-sm text-gray-700"> <li class="flex items-start gap-2"> <span class="mt-2 inline-block h-2 w-2 rounded-full bg-emerald-500"></span>
Families looking for home-style flavor
</li> <li class="flex items-start gap-2"> <span class="mt-2 inline-block h-2 w-2 rounded-full bg-emerald-500"></span>
Couples who want a soulful dinner
</li> <li class="flex items-start gap-2"> <span class="mt-2 inline-block h-2 w-2 rounded-full bg-emerald-500"></span>
Travelers who want to taste real Costa Rica
</li> </ul> </div> <div class="mt-8 flex flex-col gap-3 sm:flex-row"> <a href="https://wa.me/50684597077" onclick="return gtagSendEvent(this.href, this.target)" class="inline-flex items-center justify-center rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600" target="_blank" rel="noreferrer">
Reserve on WhatsApp
</a> <a href="#contacto" class="inline-flex items-center justify-center rounded-full border border-emerald-500/40 px-5 py-3 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50">
View contact
</a> </div> </div> <div class="flex h-full flex-col justify-between gap-6 rounded-2xl bg-white p-6 shadow-lg md:p-8"> <div class="overflow-hidden rounded-xl"> <img${addAttribute(restauranteFoto, "src")} alt="Abuela Luisita restaurant" class="h-56 w-full object-cover md:h-64" loading="lazy"> </div> <div> <h3 class="text-xl font-semibold text-gray-900">Come eat like at home</h3> <p class="mt-3 text-sm text-gray-600">
But in La Fortuna. Here every detail aims to leave you with more than a good photo:
            an emotional memory.
</p> </div> <div class="rounded-xl border border-amber-200 bg-gradient-to-br from-amber-50 via-white to-emerald-50 p-5"> <p class="text-sm text-gray-700">
Traditional breakfasts, home-style lunches, and dinners with history. Real Costa Rican
            cuisine, served with warmth and local pride.
</p> <div class="mt-4 flex items-center gap-3 text-xs text-emerald-700"> <span class="rounded-full bg-emerald-100 px-3 py-1 font-semibold">Family atmosphere</span> <span class="rounded-full bg-emerald-100 px-3 py-1 font-semibold">Local ingredients</span> </div> </div> <div class="rounded-xl bg-emerald-600 px-5 py-4 text-white"> <p class="text-sm font-semibold">Call to action</p> <p class="mt-2 text-sm">
Come eat like at home... but in La Fortuna.
</p> </div> </div> </div> </div> </section>`;
}, "C:/Users/gamer/Documents/GitHub/afortuna2new/src/components/luisita/en/RestauranteEn.astro", void 0);

const $$InstalacionesEn = createComponent(($$result, $$props, $$slots) => {
  const jardinFoto = "https://cdn.arenalcloud.com/arenal-a65b6eb9-29d7-4dec-9784-b1b37ff7dfce-afortunados/_A745099_e8335452.jpg";
  return renderTemplate`${maybeRenderHead()}<section id="instalaciones" class="relative overflow-hidden bg-emerald-50/60 py-16 px-6"> <div class="pointer-events-none absolute -left-20 top-8 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl"></div> <div class="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-amber-200/40 blur-3xl"></div> <div class="relative mx-auto max-w-6xl space-y-12"> <div class="text-center"> <p class="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-800/80">Facilities</p> <h2 class="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
Spaces to enjoy La Fortuna at your own pace
</h2> <p class="mt-3 text-base text-gray-700">
Pools, nature trail, and garden lookout designed to enjoy nature in comfort.
</p> </div> <article class="grid grid-cols-1 gap-6 rounded-2xl bg-white p-6 shadow-lg lg:grid-cols-[1.1fr_1fr]"> <div class="overflow-hidden rounded-xl"> <img src="https://i.ibb.co/4wsbnHD5/piscina-A-1.jpg" alt="Pools and pool bar at Abuela Luisita" class="h-72 w-full object-cover" loading="lazy"> </div> <div class="flex h-full flex-col"> <h3 class="text-xl font-semibold text-gray-900">Pools & Pool Bar</h3> <p class="mt-3 text-sm text-gray-600">
Freshness, fun, and slow-living comfort. Surrounded by tropical gardens and the natural
          sounds of La Fortuna, our pool area slows the day down and invites you to stay longer.
</p> <p class="mt-3 text-sm text-gray-600">
Enjoy a main organic-shaped pool, two pools for children, and an elegant pool bar where
          you can order your drink without leaving the water. A private access path also connects
          you with the forest to feel biodiversity up close.
</p> <div class="mt-5 rounded-xl bg-emerald-50 px-4 py-3"> <p class="text-sm font-semibold text-emerald-900">Perfect for</p> <ul class="mt-3 space-y-2 text-sm text-gray-700"> <li class="flex items-start gap-2"> <span class="mt-2 inline-block h-2 w-2 rounded-full bg-emerald-500"></span>
Families: happy kids, relaxed parents
</li> <li class="flex items-start gap-2"> <span class="mt-2 inline-block h-2 w-2 rounded-full bg-emerald-500"></span>
Couples: relax + cocktails + green atmosphere
</li> <li class="flex items-start gap-2"> <span class="mt-2 inline-block h-2 w-2 rounded-full bg-emerald-500"></span>
Groups: a social spot with style
</li> </ul> </div> <a href="https://wa.me/50684597077" onclick="return gtagSendEvent(this.href, this.target)" class="mt-6 inline-flex items-center justify-center rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600" target="_blank" rel="noreferrer">
Book your day pass
</a> </div> </article> <article class="grid grid-cols-1 gap-6 rounded-2xl bg-white p-6 shadow-lg lg:grid-cols-[1fr_1.1fr]"> <div class="flex h-full flex-col"> <h3 class="text-xl font-semibold text-gray-900">Nature Trail</h3> <p class="mt-3 text-sm text-gray-600">
The forest is waiting for you right inside the property. With around 3.5 km of circular
          trail, the Abuela Luisita Nature Trail is an authentic ecotourism experience accessible to
          all ages.
</p> <p class="mt-3 text-sm text-gray-600">
Walk through tropical landscapes, cross crystal-clear streams, and feel the forest in
          every step. At sunrise and sunset you may hear howler monkeys and spot birds like
          toucans. Frogs and small wildlife make the walk educational, local, and memorable.
</p> <p class="mt-4 text-sm font-semibold text-emerald-700">
A gentle, safe, and lively walk you will remember for years.
</p> <a href="https://wa.me/50684597077" onclick="return gtagSendEvent(this.href, this.target)" class="mt-6 inline-flex items-center justify-center rounded-full border border-emerald-500/40 px-5 py-3 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50">
Book now
</a> </div> <div class="overflow-hidden rounded-xl"> ${renderComponent($$result, "Image", $$Image, { "src": senderoFoto, "alt": "Abuela Luisita nature trail", "class": "h-72 w-full object-cover", "loading": "lazy" })} </div> </article> <article class="grid grid-cols-1 gap-6 rounded-2xl bg-white p-6 shadow-lg lg:grid-cols-[1.1fr_1fr]"> <div class="overflow-hidden rounded-xl"> <img${addAttribute(jardinFoto, "src")} alt="Garden and lookout with Arenal views" class="h-72 w-full object-cover" loading="lazy"> </div> <div class="flex h-full flex-col"> <h3 class="text-xl font-semibold text-gray-900">Garden & Lookout</h3> <p class="mt-3 text-sm text-gray-600">
Above the restaurant, a tropical oasis opens up for rest and unforgettable photos. Soft
          paths, well-kept lawns, and young fruit trees like blackberry, cacao, orange, guava, cas,
          and avocado fill the space with aroma, color, and life.
</p> <p class="mt-3 text-sm text-gray-600">
The design respects what matters most: the view of Arenal Volcano. Nothing blocks that
          scene, especially at sunrise or when golden sunset light paints the landscape. At one of
          the highest points, stairs lead to the Abuela Luisita Monument, an iconic viewpoint you
          should not miss.
</p> <div class="mt-4 rounded-xl bg-amber-50 px-4 py-3"> <p class="text-sm font-semibold text-amber-900">Recommendation</p> <p class="mt-2 text-sm text-gray-700">
Wear comfortable shoes and take your time. This space is a sensory experience.
</p> </div> <p class="mt-4 text-sm font-semibold text-emerald-700">
Climb up, breathe deeply, and take your most local photo of the trip.
</p> </div> </article> </div> </section>`;
}, "C:/Users/gamer/Documents/GitHub/afortuna2new/src/components/luisita/en/InstalacionesEn.astro", void 0);

const $$Banner1En = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-[#f8f5ef] text-[#2f2a26] py-16 md:py-20"> <div class="max-w-6xl mx-auto px-6 sm:px-8 flex flex-col lg:flex-row items-center gap-10 lg:gap-14"> <div class="w-full lg:w-1/2 space-y-6"> <h2 class="text-3xl md:text-4xl font-extrabold leading-tight">
Rest with Costa Rican hospitality
</h2> <p class="text-lg md:text-xl leading-relaxed">
The hotel offers a warm and quiet atmosphere, ideal for resting after a day of adventure or work.
</p> <p class="text-lg md:text-xl leading-relaxed">
Here the service is close and genuine, with that Costa Rican hospitality that is not staged:
<span class="text-[#2f4b2c] font-semibold"> it is passed down</span>.
</p> </div> <div class="w-full lg:w-1/2"> ${renderComponent($$result, "Image", $$Image, { "src": volcan, "alt": "Cozy room with living area and balcony", "class": "w-full h-auto rounded-2xl shadow-lg object-cover" })} </div> </div> </section>`;
}, "C:/Users/gamer/Documents/GitHub/afortuna2new/src/components/luisita/en/Banner1En.astro", void 0);

const $$ContactoEn = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="contacto" class="relative overflow-hidden bg-amber-50/70 py-16 px-6"> <div class="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl"></div> <div class="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-emerald-200/40 blur-3xl"></div> <div class="relative mx-auto max-w-6xl"> <div class="mb-10 text-center"> <p class="text-xs font-semibold uppercase tracking-[0.2em] text-amber-800/80">Contact</p> <h2 class="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">Contact details and location</h2> <p class="mt-3 text-base text-gray-700">
We are in La Fortuna, San Carlos. Write or call us and we will coordinate your visit.
</p> </div> <div class="grid grid-cols-1 gap-8 lg:grid-cols-2"> <div class="rounded-2xl bg-white p-6 shadow-lg md:p-8"> <h3 class="text-xl font-semibold text-gray-900">Contact us</h3> <p class="mt-2 text-sm text-gray-600">
Fast response on WhatsApp and direct attention for reservations.
</p> <div class="mt-6 space-y-4"> <div class="flex items-start gap-3"> <span class="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-amber-100 text-amber-700"> <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3.15 9.8 19.8 19.8 0 0 1 .08 1.82 2 2 0 0 1 2.06 0h3a2 2 0 0 1 2 1.72 12.7 12.7 0 0 0 .7 2.82 2 2 0 0 1-.45 2.11L6.1 8.9a16 16 0 0 0 7 7l2.25-1.2a2 2 0 0 1 2.11-.45 12.7 12.7 0 0 0 2.82.7 2 2 0 0 1 1.72 2z"></path> </svg> </span> <div> <p class="text-sm font-semibold text-gray-900">Phone</p> <a href="tel:+50684597077" class="text-sm text-gray-700 hover:text-emerald-700">+506 8459 7077</a> </div> </div> <div class="flex items-start gap-3"> <span class="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 text-emerald-700"> <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M16 2a6 6 0 0 1 4 10.47l-6.4 6.4a2 2 0 0 1-2.83 0l-6.4-6.4A6 6 0 1 1 12 8a6 6 0 0 1 4-6z"></path> <circle cx="12" cy="8" r="2" stroke-width="1.8"></circle> </svg> </span> <div> <p class="text-sm font-semibold text-gray-900">Location</p> <p class="text-sm text-gray-700">La Fortuna, San Carlos, Alajuela</p> </div> </div> <div class="flex items-start gap-3"> <span class="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-sky-100 text-sky-700"> <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M4 6h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="m22 8-10 6L2 8"></path> </svg> </span> <div> <p class="text-sm font-semibold text-gray-900">Email</p> <a href="mailto:info@afortunados.cr" class="text-sm text-gray-700 hover:text-emerald-700">info@afortunados.cr</a> </div> </div> <div class="flex items-start gap-3"> <span class="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-700"> <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 6v6l4 2"></path> <circle cx="12" cy="12" r="9" stroke-width="1.8"></circle> </svg> </span> <div> <p class="text-sm font-semibold text-gray-900">Hours</p> <p class="text-sm text-gray-700">Daily, 8:00 am - 8:00 pm</p> </div> </div> </div> <div class="mt-8 flex flex-col gap-3 sm:flex-row"> <a href="https://wa.me/50684597077" onclick="return gtagSendEvent(this.href, this.target)" class="inline-flex items-center justify-center rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600" target="_blank" rel="noreferrer">
Message on WhatsApp
</a> <a href="tel:+50684597077" class="inline-flex items-center justify-center rounded-full border border-emerald-500/40 px-5 py-3 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50">
Call now
</a> </div> </div> <div class="overflow-hidden rounded-2xl bg-white shadow-lg"> <div class="border-b border-gray-100 p-4"> <h3 class="text-lg font-semibold text-gray-900">How to get here</h3> <p class="mt-1 text-sm text-gray-600">
Strategic location near the main attractions of La Fortuna.
</p> </div> <div class="aspect-[4/3] w-full"> <iframe title="La Fortuna location map" src="https://www.google.com/maps?q=La+Fortuna+San+Carlos+Costa+Rica&output=embed" class="h-full w-full border-0" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> </div> <div class="flex flex-col gap-2 border-t border-gray-100 p-4 text-sm text-gray-600 sm:flex-row sm:items-center sm:justify-between"> <span>We can coordinate transport from nearby hotels.</span> <a href="#contacto" class="font-semibold text-emerald-700 hover:text-emerald-800">Request directions</a> </div> </div> </div> </div> </section>`;
}, "C:/Users/gamer/Documents/GitHub/afortuna2new/src/components/luisita/en/ContactoEn.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro = createAstro("https://afortunadoscr.com");
const $$HeaderluisitaEn = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$HeaderluisitaEn;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<header class="w-full bg-yellow-200/10 text-gray-800  shadow"> <nav class="flex items-center justify-between px-6 md:px-12 py-4"> <!-- Logo --> <!-- Desktop menu --> <ul class="hidden md:flex gap-8 text-base sm:text-sm  font-semibold uppercase tracking-wide"> <li><a href="#tours" class="hover:underline">Restaurant</a></li> <li><a href="#hospedajes" class="hover:underline">Rooms</a></li> <li><a href="#instalaciones" class="hover:underline">Pools & Pool Bar</a></li> <li><a href="#instalaciones" class="hover:underline">Nature Trail</a></li> <li><a href="#contacto" class="hover:underline">Contact</a></li> </ul> <div class="hidden md:flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-gray-700"> <a href="/cascadadefuego" class="hover:text-gray-900">ES</a> <span class="text-gray-400">|</span> <span class="text-gray-900">EN</span> </div> <!-- Hamburger button --> <button id="mobile-menu-toggle" class="md:hidden focus:outline-none" aria-controls="mobile-menu" aria-expanded="false" aria-label="Open menu" onclick="window.toggleMobileMenu?.()"> <svg class="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> </button> </nav> <!-- Mobile menu --> <div id="mobile-menu" class="fixed inset-0 z-50 hidden md:hidden"> <button id="mobile-menu-backdrop" class="absolute inset-0 bg-black/30 opacity-0 transition-opacity duration-200" aria-label="Close menu" onclick="window.toggleMobileMenu?.()"></button> <div id="mobile-menu-panel" class="absolute top-0 right-0 h-full w-[85%] max-w-xs bg-white text-gray-800 p-6 overflow-y-auto translate-x-full transition-transform duration-200" role="dialog" aria-modal="true"> <div class="flex items-center justify-between pb-4 border-b border-gray-200"> <span class="text-sm font-semibold uppercase tracking-widest">Menu</span> <button id="mobile-menu-close" class="text-gray-700 text-sm uppercase tracking-wide" onclick="window.toggleMobileMenu?.()">\nClose\n</button> </div> <ul class="flex flex-col gap-4 pt-6 text-base font-semibold uppercase tracking-wide"> <li class="border-b border-gray-100 pb-4"> <a href="#tours" class="block py-2">Restaurant</a> </li> <li class="border-b border-gray-100 pb-4"> <a href="#hospedajes" class="block py-2">Rooms</a> </li> <li class="border-b border-gray-100 pb-4"> <a href="#hospedajes" class="block py-2">Pools & Pool Bar</a> </li> <li class="border-b border-gray-100 pb-4"> <a href="#hospedajes" class="block py-2">Nature Trail</a> </li> <li class="border-b border-gray-100 pb-4"> <a href="#contacto" class="block py-2">Contact</a> </li> <li class="flex items-center gap-2 pt-2 text-sm font-semibold"> <a href="/cascadadefuego" class="hover:underline">ES</a> <span class="text-gray-400">|</span> <span class="text-gray-900">EN</span> </li> </ul> </div> </div> </header> <script>\n  const menu = document.getElementById("mobile-menu");\n  const panel = document.getElementById("mobile-menu-panel");\n  const backdrop = document.getElementById("mobile-menu-backdrop");\n  const toggleButton = document.getElementById("mobile-menu-toggle");\n\n  function setMenuOpen(open) {\n    if (!menu || !panel || !backdrop) return;\n    toggleButton?.setAttribute("aria-expanded", open ? "true" : "false");\n\n    if (open) {\n      menu.classList.remove("hidden");\n      document.body.classList.add("overflow-hidden");\n      requestAnimationFrame(() => {\n        panel.classList.remove("translate-x-full");\n        backdrop.classList.remove("opacity-0");\n      });\n      return;\n    }\n\n    panel.classList.add("translate-x-full");\n    backdrop.classList.add("opacity-0");\n    document.body.classList.remove("overflow-hidden");\n    window.setTimeout(() => {\n      menu.classList.add("hidden");\n    }, 200);\n  }\n\n  window.toggleMobileMenu = () => {\n    const isHidden = menu?.classList.contains("hidden");\n    setMenuOpen(Boolean(isHidden));\n  };\n<\/script>'])), maybeRenderHead());
}, "C:/Users/gamer/Documents/GitHub/afortuna2new/src/components/luisita/en/HeaderluisitaEn.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$HotelLayoutluisitaEn = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(['<html lang="en" data-astro-cid-wbiz5wrr> <head><title>Hotel Catarata Resort</title><meta charset="UTF-8"><meta name="viewport" content="width=device-width">', '<script>\n      function gtagSendEvent(url, target) {\n        var isBlank = target === "_blank";\n        var navigate = function () {\n          if (!isBlank && typeof url === "string") {\n            window.location = url;\n          }\n        };\n        if (typeof gtag === "function") {\n          gtag("event", "conversion_event_outbound_click", {\n            event_callback: navigate,\n            event_timeout: 2000,\n          });\n          return !isBlank;\n        }\n        navigate();\n        return !isBlank;\n      }\n    <\/script>', '</head> <body class="bg-white text-gray-900" data-astro-cid-wbiz5wrr> ', " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " </body></html>"])), renderComponent($$result, "Hreflang", $$Hreflang, { "data-astro-cid-wbiz5wrr": true }), renderHead(), renderComponent($$result, "Header", $$HeaderluisitaEn, { "data-astro-cid-wbiz5wrr": true }), renderComponent($$result, "Hero", $$HeroEn, { "data-astro-cid-wbiz5wrr": true }), renderComponent($$result, "AboutUs", $$AboutUsEn, { "data-astro-cid-wbiz5wrr": true }), renderComponent($$result, "Habitaciones", $$HabitacionesEn, { "data-astro-cid-wbiz5wrr": true }), renderComponent($$result, "Restaurante", $$RestauranteEn, { "data-astro-cid-wbiz5wrr": true }), renderComponent($$result, "Instalaciones", $$InstalacionesEn, { "data-astro-cid-wbiz5wrr": true }), renderComponent($$result, "Banner1", $$Banner1En, { "data-astro-cid-wbiz5wrr": true }), renderComponent($$result, "Contacto", $$ContactoEn, { "data-astro-cid-wbiz5wrr": true }), renderComponent($$result, "ToursTeaser", $$ToursTeaserEN, { "data-astro-cid-wbiz5wrr": true }), renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-wbiz5wrr": true }), renderComponent($$result, "WhatsAppButton", $$WhatsAppButtonEn, { "data-astro-cid-wbiz5wrr": true }));
}, "C:/Users/gamer/Documents/GitHub/afortuna2new/src/layouts/HotelLayoutluisitaEn.astro", void 0);

const $$Cascadadefuego = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Hotel", $$HotelLayoutluisitaEn, {})}`;
}, "C:/Users/gamer/Documents/GitHub/afortuna2new/src/pages/en/cascadadefuego.astro", void 0);

const $$file = "C:/Users/gamer/Documents/GitHub/afortuna2new/src/pages/en/cascadadefuego.astro";
const $$url = "/en/cascadadefuego";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Cascadadefuego,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
