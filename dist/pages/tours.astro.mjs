/* empty css                                */
import { c as createComponent, d as renderTemplate, e as addAttribute, m as maybeRenderHead, g as createAstro, f as renderComponent, r as renderHead } from '../chunks/astro/server_0zlbAbnM.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { t as toursData } from '../chunks/tours_Dnzj0QlD.mjs';
import { $ as $$HeaderPages } from '../chunks/HeaderPages_C9iZXJtP.mjs';
import { $ as $$Footer } from '../chunks/Footer_CRNz6cnf.mjs';
import { $ as $$Hreflang } from '../chunks/Hreflang_CRzrx2EL.mjs';
import { $ as $$WhatsAppButton } from '../chunks/WhatsAppButton_BFdYwW_-.mjs';
/* empty css                                 */
/* empty css                                 */
export { renderers } from '../renderers.mjs';

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Tours$1 = createComponent(($$result, $$props, $$slots) => {
  const slugify = (name) => name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  const whatsappNumber = "50684597077";
  const tours = toursData.map((tour) => {
    const whatsappText = encodeURIComponent(
      `Hola, quiero reservar el tour ${tour.nombre}.`
    );
    return {
      ...tour,
      slug: tour.slug ?? slugify(tour.nombre),
      whatsappLink: `https://wa.me/${whatsappNumber}?text=${whatsappText}`
    };
  });
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", `<section class="bg-green-600 text-white py-12 mt-18"> <div class="container mx-auto px-4"> <div class="max-w-3xl"> <span class="inline-flex items-center gap-2 bg-white/15 px-4 py-2 rounded-full text-sm uppercase tracking-widest">
Reserva directa y sin complicaciones
</span> <h1 class="text-4xl md:text-5xl font-bold mt-4">Vive tu pr\xF3ximo tour sin dudarlo</h1> <p class="text-lg md:text-xl mt-3 text-white/90">
Experiencias seleccionadas, atenci\xF3n personalizada y confirmaci\xF3n r\xE1pida para que solo tengas que disfrutar.
</p> <div class="mt-6 flex flex-col sm:flex-row items-center gap-4"> <button onclick="openBookingModal('Tour General')" class="bg-yellow-400 hover:bg-yellow-500 text-green-900 font-semibold py-3 px-6 rounded-full transition">
Reservar por formulario
</button> <a href="#listado-tours" class="border border-white/70 hover:bg-white/10 text-white font-semibold py-3 px-6 rounded-full transition">
Ver opciones
</a> </div> </div> <div class="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-white/90"> <div class="bg-white/10 rounded-lg py-3 px-4">Atenci\xF3n local y directa</div> <div class="bg-white/10 rounded-lg py-3 px-4">Reserva r\xE1pida y segura</div> <div class="bg-white/10 rounded-lg py-3 px-4">Tours para todo nivel</div> </div> </div> </section> <section id="listado-tours" class="container mx-auto px-4 mt-8"> <div class="flex gap-2 overflow-x-auto pb-4"> <button class="bg-green-600 text-white px-4 py-2 rounded-full whitespace-nowrap">Todos los tours</button> <button class="bg-gray-200 px-4 py-2 rounded-full whitespace-nowrap">F\xE1cil</button> <button class="bg-gray-200 px-4 py-2 rounded-full whitespace-nowrap">Moderado</button> <button class="bg-gray-200 px-4 py-2 rounded-full whitespace-nowrap">Aventura extrema</button> </div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> `, ` </div> </section> <!-- Modal de reserva (Tours) --> <div id="booking-modal" class="fixed inset-0 z-50 hidden items-center justify-center bg-black/45 p-4"> <div class="w-full max-w-xl rounded-2xl bg-white p-6 shadow-2xl"> <div class="mb-4 flex items-center justify-between border-b pb-2"> <h3 class="text-xl font-bold text-slate-800">Reservar tour</h3> <button onclick="closeBookingModal()" class="text-slate-500 hover:text-slate-800">Cerrar \u2715</button> </div> <form id="booking-form" class="space-y-4" onsubmit="submitBooking(event)"> <label class="block"> <span class="mb-1 block text-sm font-semibold text-slate-700">Tour seleccionado</span> <input id="tour-name" type="text" class="w-full rounded-lg border border-gray-300 px-3 py-2 bg-gray-100" readonly> </label> <label class="block"> <span class="mb-1 block text-sm font-semibold text-slate-700">Nombre</span> <input id="name" type="text" required class="w-full rounded-lg border border-gray-300 px-3 py-2" placeholder="Tu nombre completo"> </label> <label class="block"> <span class="mb-1 block text-sm font-semibold text-slate-700">Pax</span> <input id="pax" type="number" min="1" required class="w-full rounded-lg border border-gray-300 px-3 py-2" placeholder="Cantidad de personas"> </label> <label class="block"> <span class="mb-1 block text-sm font-semibold text-slate-700">Fecha</span> <input id="date" type="date" required class="w-full rounded-lg border border-gray-300 px-3 py-2"> </label> <label class="block"> <span class="mb-1 block text-sm font-semibold text-slate-700">WhatsApp o Email</span> <input id="contact" type="text" required class="w-full rounded-lg border border-gray-300 px-3 py-2" placeholder="WhatsApp o email"> </label> <label class="block"> <span class="mb-1 block text-sm font-semibold text-slate-700">Observaci\xF3n</span> <textarea id="note" rows="3" class="w-full rounded-lg border border-gray-300 px-3 py-2" placeholder="Comentarios adicionales"></textarea> </label> <button type="submit" class="w-full rounded-full bg-green-600 px-4 py-3 text-sm font-bold uppercase tracking-wider text-white hover:bg-green-700">Enviar solicitud</button> </form> <p id="booking-message" class="mt-3 text-sm text-emerald-700 hidden"></p> </div> </div> <script>
      
      function openBookingModal(tourName) {
        document.getElementById('booking-modal').classList.remove('hidden');
        document.getElementById('tour-name').value = tourName || 'Tour seleccionado';
        document.getElementById('booking-message').classList.add('hidden');
        document.getElementById('booking-message').innerText = '';
      }

      function closeBookingModal() {
        document.getElementById('booking-modal').classList.add('hidden');
      }

      function submitBooking(event) {
        event.preventDefault();
        const tour = document.getElementById('tour-name').value;
        const name = document.getElementById('name').value.trim();
        const pax = document.getElementById('pax').value.trim();
        const date = document.getElementById('date').value;
        const contact = document.getElementById('contact').value.trim();
        const note = document.getElementById('note').value.trim();

        if (!name || !pax || !date || !contact) {
          alert('Por favor, complete los campos requeridos.');
          return;
        }

        const messageContent = \`Nueva reserva de tour\\nTour: \${tour}\\nNombre: \${name}\\nPax: \${pax}\\nFecha: \${date}\\nContacto: \${contact}\\nObservaci\xF3n: \${note}\`;
        const whatsappUrl = \`https://wa.me/50684597077?text=\${encodeURIComponent(messageContent)}\`;

        window.open(whatsappUrl, '_blank');

        const message = document.getElementById('booking-message');
        message.textContent = 'Solicitud enviada. Te contactamos en breve.';
        message.classList.remove('hidden');

        document.getElementById('booking-form').reset();
        document.getElementById('tour-name').value = tour;
      }

      document.addEventListener('click', function (event) {
        const modal = document.getElementById('booking-modal');
        if (!modal || modal.classList.contains('hidden')) return;
        if (event.target === modal) {
          closeBookingModal();
        }
      });
    <\/script>`], ["", `<section class="bg-green-600 text-white py-12 mt-18"> <div class="container mx-auto px-4"> <div class="max-w-3xl"> <span class="inline-flex items-center gap-2 bg-white/15 px-4 py-2 rounded-full text-sm uppercase tracking-widest">
Reserva directa y sin complicaciones
</span> <h1 class="text-4xl md:text-5xl font-bold mt-4">Vive tu pr\xF3ximo tour sin dudarlo</h1> <p class="text-lg md:text-xl mt-3 text-white/90">
Experiencias seleccionadas, atenci\xF3n personalizada y confirmaci\xF3n r\xE1pida para que solo tengas que disfrutar.
</p> <div class="mt-6 flex flex-col sm:flex-row items-center gap-4"> <button onclick="openBookingModal('Tour General')" class="bg-yellow-400 hover:bg-yellow-500 text-green-900 font-semibold py-3 px-6 rounded-full transition">
Reservar por formulario
</button> <a href="#listado-tours" class="border border-white/70 hover:bg-white/10 text-white font-semibold py-3 px-6 rounded-full transition">
Ver opciones
</a> </div> </div> <div class="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-white/90"> <div class="bg-white/10 rounded-lg py-3 px-4">Atenci\xF3n local y directa</div> <div class="bg-white/10 rounded-lg py-3 px-4">Reserva r\xE1pida y segura</div> <div class="bg-white/10 rounded-lg py-3 px-4">Tours para todo nivel</div> </div> </div> </section> <section id="listado-tours" class="container mx-auto px-4 mt-8"> <div class="flex gap-2 overflow-x-auto pb-4"> <button class="bg-green-600 text-white px-4 py-2 rounded-full whitespace-nowrap">Todos los tours</button> <button class="bg-gray-200 px-4 py-2 rounded-full whitespace-nowrap">F\xE1cil</button> <button class="bg-gray-200 px-4 py-2 rounded-full whitespace-nowrap">Moderado</button> <button class="bg-gray-200 px-4 py-2 rounded-full whitespace-nowrap">Aventura extrema</button> </div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> `, ` </div> </section> <!-- Modal de reserva (Tours) --> <div id="booking-modal" class="fixed inset-0 z-50 hidden items-center justify-center bg-black/45 p-4"> <div class="w-full max-w-xl rounded-2xl bg-white p-6 shadow-2xl"> <div class="mb-4 flex items-center justify-between border-b pb-2"> <h3 class="text-xl font-bold text-slate-800">Reservar tour</h3> <button onclick="closeBookingModal()" class="text-slate-500 hover:text-slate-800">Cerrar \u2715</button> </div> <form id="booking-form" class="space-y-4" onsubmit="submitBooking(event)"> <label class="block"> <span class="mb-1 block text-sm font-semibold text-slate-700">Tour seleccionado</span> <input id="tour-name" type="text" class="w-full rounded-lg border border-gray-300 px-3 py-2 bg-gray-100" readonly> </label> <label class="block"> <span class="mb-1 block text-sm font-semibold text-slate-700">Nombre</span> <input id="name" type="text" required class="w-full rounded-lg border border-gray-300 px-3 py-2" placeholder="Tu nombre completo"> </label> <label class="block"> <span class="mb-1 block text-sm font-semibold text-slate-700">Pax</span> <input id="pax" type="number" min="1" required class="w-full rounded-lg border border-gray-300 px-3 py-2" placeholder="Cantidad de personas"> </label> <label class="block"> <span class="mb-1 block text-sm font-semibold text-slate-700">Fecha</span> <input id="date" type="date" required class="w-full rounded-lg border border-gray-300 px-3 py-2"> </label> <label class="block"> <span class="mb-1 block text-sm font-semibold text-slate-700">WhatsApp o Email</span> <input id="contact" type="text" required class="w-full rounded-lg border border-gray-300 px-3 py-2" placeholder="WhatsApp o email"> </label> <label class="block"> <span class="mb-1 block text-sm font-semibold text-slate-700">Observaci\xF3n</span> <textarea id="note" rows="3" class="w-full rounded-lg border border-gray-300 px-3 py-2" placeholder="Comentarios adicionales"></textarea> </label> <button type="submit" class="w-full rounded-full bg-green-600 px-4 py-3 text-sm font-bold uppercase tracking-wider text-white hover:bg-green-700">Enviar solicitud</button> </form> <p id="booking-message" class="mt-3 text-sm text-emerald-700 hidden"></p> </div> </div> <script>
      
      function openBookingModal(tourName) {
        document.getElementById('booking-modal').classList.remove('hidden');
        document.getElementById('tour-name').value = tourName || 'Tour seleccionado';
        document.getElementById('booking-message').classList.add('hidden');
        document.getElementById('booking-message').innerText = '';
      }

      function closeBookingModal() {
        document.getElementById('booking-modal').classList.add('hidden');
      }

      function submitBooking(event) {
        event.preventDefault();
        const tour = document.getElementById('tour-name').value;
        const name = document.getElementById('name').value.trim();
        const pax = document.getElementById('pax').value.trim();
        const date = document.getElementById('date').value;
        const contact = document.getElementById('contact').value.trim();
        const note = document.getElementById('note').value.trim();

        if (!name || !pax || !date || !contact) {
          alert('Por favor, complete los campos requeridos.');
          return;
        }

        const messageContent = \\\`Nueva reserva de tour\\\\nTour: \\\${tour}\\\\nNombre: \\\${name}\\\\nPax: \\\${pax}\\\\nFecha: \\\${date}\\\\nContacto: \\\${contact}\\\\nObservaci\xF3n: \\\${note}\\\`;
        const whatsappUrl = \\\`https://wa.me/50684597077?text=\\\${encodeURIComponent(messageContent)}\\\`;

        window.open(whatsappUrl, '_blank');

        const message = document.getElementById('booking-message');
        message.textContent = 'Solicitud enviada. Te contactamos en breve.';
        message.classList.remove('hidden');

        document.getElementById('booking-form').reset();
        document.getElementById('tour-name').value = tour;
      }

      document.addEventListener('click', function (event) {
        const modal = document.getElementById('booking-modal');
        if (!modal || modal.classList.contains('hidden')) return;
        if (event.target === modal) {
          closeBookingModal();
        }
      });
    <\/script>`])), maybeRenderHead(), tours.map((tour) => renderTemplate`<div class="bg-white rounded-lg shadow p-4 flex flex-col"> <div class="relative"> <img${addAttribute(tour.imagen, "src")}${addAttribute(tour.nombre, "alt")} class="rounded-t-lg w-full h-48 object-cover" loading="lazy"> <span class="absolute top-2 right-2 bg-yellow-200 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full"> ${tour.dificultad} </span> </div> <h3 class="text-lg font-semibold mt-3">${tour.nombre}</h3> <p class="text-sm text-gray-600 mt-1">${tour.descripcion}</p> <div class="grid grid-cols-2 gap-2 text-sm text-gray-500 mt-3"> <span>⏱ ${tour.duracion}</span> <span>📍 ${tour.ubicacion}</span> <span>💪 ${tour.dificultad}</span> </div> <div class="flex flex-wrap gap-2 mt-3"> ${tour.tags.map((tag) => renderTemplate`<span class="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">${tag}</span>`)} </div> <div class="flex items-center justify-between mt-4"> <p class="text-xl font-bold text-green-600">$${tour.precio}</p> <span class="text-xs text-gray-500">Reserva directa</span> </div> <div class="mt-4 flex flex-wrap gap-3"> <button${addAttribute(`openBookingModal(${JSON.stringify(tour.nombre)})`, "onclick")} class="flex-1 min-w-[160px] bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition text-center">
Reservar ahora
</button> <a${addAttribute(`/tours/${tour.slug}`, "href")} class="flex-1 min-w-[160px] border border-green-500 text-green-700 px-4 py-2 rounded-lg hover:bg-green-50 transition text-center">
Ver detalles
</a> </div> </div>`));
}, "C:/Users/gamer/Documents/GitHub/afortuna2new/src/components/tours/Tours.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://afortunadoscr.com");
const $$ToursLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ToursLayout;
  return renderTemplate(_a || (_a = __template(['<html lang="es" data-astro-cid-pecu6nl4> <head><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/faviconA.png"><meta name="generator"', '><title>Afortunados - Pura Vida</title><meta charset="UTF-8">', '<script>\n      function gtagSendEvent(url, target) {\n        var isBlank = target === "_blank";\n        var navigate = function () {\n          if (!isBlank && typeof url === "string") {\n            window.location = url;\n          }\n        };\n        if (typeof gtag === "function") {\n          gtag("event", "conversion_event_outbound_click", {\n            event_callback: navigate,\n            event_timeout: 2000,\n          });\n          return !isBlank;\n        }\n        navigate();\n        return !isBlank;\n      }\n    <\/script>', '</head> <body class="flex flex-col min-h-screen bg-white text-gray-900" data-astro-cid-pecu6nl4> ', ' <div class="flex-1" data-astro-cid-pecu6nl4> ', " </div> <div data-astro-cid-pecu6nl4> ", " </div> ", " </body></html>"])), addAttribute(Astro2.generator, "content"), renderComponent($$result, "Hreflang", $$Hreflang, { "data-astro-cid-pecu6nl4": true }), renderHead(), renderComponent($$result, "Header", $$HeaderPages, { "enHref": "/en/tours", "esHref": "/tours", "data-astro-cid-pecu6nl4": true }), renderComponent($$result, "Tours", $$Tours$1, { "data-astro-cid-pecu6nl4": true }), renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-pecu6nl4": true }), renderComponent($$result, "WhatsAppButton", $$WhatsAppButton, { "data-astro-cid-pecu6nl4": true }));
}, "C:/Users/gamer/Documents/GitHub/afortuna2new/src/layouts/ToursLayout.astro", void 0);

const $$Tours = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "ToursLayout", $$ToursLayout, {})}`;
}, "C:/Users/gamer/Documents/GitHub/afortuna2new/src/pages/tours.astro", void 0);

const $$file = "C:/Users/gamer/Documents/GitHub/afortuna2new/src/pages/tours.astro";
const $$url = "/tours";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Tours,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
