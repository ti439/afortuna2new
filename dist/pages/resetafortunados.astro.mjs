/* empty css                                */
import { c as createComponent, f as renderComponent, d as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_0zlbAbnM.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_BlTM9sQi.mjs';
import { $ as $$Header } from '../chunks/Header_Cj6ZglEm.mjs';
import { $ as $$Footer } from '../chunks/Footer_CRNz6cnf.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Resetafortunados = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" ", "  ", `<section class="relative w-full min-h-screen pt-20 md:pt-0 md:h-screen"> <div class="grid h-full grid-cols-1 md:grid-cols-12"> <!-- Carrusel: ocupa 8/12 columnas en md+, full height, sin padding para cubrir todo el hero --> <div class="md:col-span-8 relative h-[60vh] md:h-full w-full overflow-hidden bg-gray-800"> <div id="hero-carousel" class="absolute inset-0"> <img src="https://cdn.arenalcloud.com/arenal-a65b6eb9-29d7-4dec-9784-b1b37ff7dfce-afortunados/foto1_6b9e60f3.jpeg" alt="slide-1" class="hero-slide absolute inset-0 h-full w-full object-cover"> <img src="https://cdn.arenalcloud.com/arenal-a65b6eb9-29d7-4dec-9784-b1b37ff7dfce-afortunados/foto2_19b1729d.jpeg" alt="slide-2" class="hero-slide absolute inset-0 h-full w-full object-cover"> <img src="https://cdn.arenalcloud.com/arenal-a65b6eb9-29d7-4dec-9784-b1b37ff7dfce-afortunados/foto3_2fd5c8f6.jpeg" alt="slide-3" class="hero-slide absolute inset-0 h-full w-full object-cover"> </div> <!-- overlay oscuro para legibilidad --> <div class="absolute inset-0 bg-black/45"></div> <!-- Contenido del hero encima del carrusel (con margen interno para no pegar al borde) --> <div class="relative z-10 flex h-full items-center"> <div class="p-8 md:p-12 text-white max-w-3xl"> <span class="inline-block rounded-full bg-amber-500 px-4 py-1 text-xs uppercase tracking-wider">Precio de lanzamiento</span> <h1 class="mt-6 text-3xl font-black leading-tight sm:text-4xl md:text-5xl">Tu escape perfecto a La Fortuna</h1> <p class="mt-4 text-lg font-semibold text-emerald-200">Sin manejar, sin estr\xE9s, todo incluido. Transporte, tour, comida y experiencia premium en un solo paquete.</p> <div class="mt-8 flex flex-wrap items-center gap-4"> <a id="open-booking-hero" href="#booking" class="rounded-full bg-emerald-600 px-6 py-3 text-sm font-bold uppercase tracking-wider transition hover:bg-emerald-700">Reservar mi campo ahora</a> <span class="text-sm text-gray-200">Inversi\xF3n total \u20A145.000</span> </div> </div> </div> </div> <!-- Video vertical: ocupa 4/12 columnas. En small screens se apila debajo. --> <div class="md:col-span-4 flex items-center justify-center p-4 md:p-10"> <div class="w-full max-w-[420px] h-[75vh] md:h-full"> <video id="hero-vertical-video" playsinline muted autoplay loop class="h-full w-full rounded-2xl object-cover shadow-xl"> <source src="https://cdn.arenalcloud.com/arenal-a65b6eb9-29d7-4dec-9784-b1b37ff7dfce-afortunados/WhatsApp_Video_2026-03-12_at_12.45.19_AM_d17ad804.mp4" type="video/mp4">
Tu navegador no soporta video.
</video> </div> </div> </div> <!-- JS simple para autoplay/transition del carrusel --> <script>
      (function () {
        const slides = Array.from(document.querySelectorAll('#hero-carousel .hero-slide'));
        if (!slides.length) return;
        slides.forEach((s, i) => {
          s.style.transition = 'opacity 800ms ease';
          s.style.opacity = i === 0 ? '1' : '0';
          s.style.willChange = 'opacity';
        });
        let idx = 0;
        setInterval(() => {
          slides[idx].style.opacity = '0';
          idx = (idx + 1) % slides.length;
          slides[idx].style.opacity = '1';
        }, 4200);
      })();
    <\/script> </section>  <section class="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8"> <h2 class="text-center text-3xl font-bold uppercase tracking-widest text-gray-800">Eleg\xED tu origen</h2> <p class="mt-2 text-center text-gray-500">Salida desde los principales puntos de Costa Rica con recogida incluida.</p> <div class="mt-8 grid gap-6 md:grid-cols-2"> <article class="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-100"> <h3 class="text-xl font-bold text-emerald-700">San Jos\xE9</h3> <p class="mt-2 text-sm text-gray-600">Punto c\xF3modo frente al Teatro Nacional. Incluye traslados desde puntos clave.</p> <ul class="mt-4 space-y-2 text-sm text-gray-600"> <li>Teatro Nacional (05:00 AM)</li> <li>Real Cariari (05:20 AM)</li> <li>Alajuela - Rostipollos Aeropuerto, Fabrica de licores, Cruce de Grecia, Naranjo y San Ram\xF3n )</li> </ul> </article> <article class="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-100"> <h3 class="text-xl font-bold text-emerald-700">Lim\xF3n (Caribbean)</h3> <p class="mt-2 text-sm text-gray-600">Salida desde terminales del Caribe, con ruta directa hacia La Fortuna.</p> <ul class="mt-4 space-y-2 text-sm text-gray-600"> <li>Lim\xF3n Centro (06:30 AM)</li> <li>Siquirres (07:30 AM)</li> <li>Gu\xE1piles (08:20 AM)</li> </ul> </article> </div> </section>  <section class="bg-slate-50 py-14"> <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"> <h2 class="text-center text-3xl font-bold uppercase tracking-widest text-gray-800">Un d\xEDa dise\xF1ado para el placer absoluto</h2> <p class="mt-2 text-center text-gray-500">Olvidate del reloj. Nosotros nos encargamos de que cada minuto sea memorable.</p> <div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"> <div class="rounded-2xl bg-white p-5 text-center shadow-md"> <p class="text-lg font-bold text-emerald-700">05:00 AM</p> <p class="mt-2 text-sm text-gray-500">VIP Trip - Transporte privado hacia La Fortuna.</p> </div> <div class="rounded-2xl bg-white p-5 text-center shadow-md"> <p class="text-lg font-bold text-emerald-700">09:30 AM</p> <p class="mt-2 text-sm text-gray-500">Super Breakfast - Desayuno local al borde del volc\xE1n.</p> </div> <div class="rounded-2xl bg-white p-5 text-center shadow-md"> <p class="text-lg font-bold text-emerald-700">10:30 AM</p> <p class="mt-2 text-sm text-gray-500">Relax/Adventure - Piscinas termales + paseo natural.</p> </div> <div class="rounded-2xl bg-white p-5 text-center shadow-md"> <p class="text-lg font-bold text-emerald-700">11:30 AM</p> <p class="mt-2 text-sm text-gray-500">Happy Hour en Licores, Estacion de cafe y bebidas gratis.</p> </div> </div> <div class="mt-6 grid gap-4 sm:grid-cols-2"> <div class="rounded-2xl bg-white p-5 text-center shadow-md"> <p class="text-lg font-bold text-emerald-700">12:30 PM</p> <p class="mt-2 text-sm text-gray-500">Almuerzo Buffet.</p> </div> <div class="rounded-2xl bg-white p-5 text-center shadow-md"> <p class="text-lg font-bold text-emerald-700">05:30 PM</p> <p class="mt-2 text-sm text-gray-500">Return Trip - Regreso con snacks y puntos de descanso.</p> </div> </div> </div> </section>  <section class="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8"> <h2 class="text-center text-3xl font-bold uppercase tracking-widest text-gray-800">Elev\xE1 tu experiencia</h2> <p class="mt-2 text-center text-gray-500">Actividades premium con gu\xEDa local y log\xEDstica 100% incluida.</p> <div class="mt-8 grid gap-6 md:grid-cols-3"> <article class="rounded-2xl bg-white p-5 shadow-lg ring-1 ring-gray-100"> <div class="h-40 rounded-lg bg-[url('https://cdn.arenalcloud.com/arenal-a65b6eb9-29d7-4dec-9784-b1b37ff7dfce-afortunados/canopy-pic_e68a4499.jpg')] bg-cover bg-center"></div> <h3 class="mt-4 text-lg font-bold">Canopy</h3> <p class="mt-2 text-sm text-gray-600">Vuelo entre las copas del bosque con seguro y fotos pro.</p> <p class="mt-2 text-xl font-extrabold text-emerald-700">\u20A135.000</p> </article> <article class="rounded-2xl bg-white p-5 shadow-lg ring-1 ring-gray-100"> <div class="h-40 rounded-lg bg-[url('https://cdn.arenalcloud.com/arenal-a65b6eb9-29d7-4dec-9784-b1b37ff7dfce-afortunados/cabalgata__1__f01d99a8.jpg')] bg-cover bg-center"></div> <h3 class="mt-4 text-lg font-bold">Cabalgata</h3> <p class="mt-2 text-sm text-gray-600">Recorrido privado por senderos volc\xE1nicos y finca tradicional.</p> <p class="mt-2 text-xl font-extrabold text-emerald-700">\u20A135.000</p> </article> <article class="rounded-2xl bg-white p-5 shadow-lg ring-1 ring-gray-100"> <div class="h-40 rounded-lg bg-[url('https://cdn.arenalcloud.com/arenal-a65b6eb9-29d7-4dec-9784-b1b37ff7dfce-afortunados/1-3-1_8131b7ae.webp')] bg-cover bg-center"></div> <h3 class="mt-4 text-lg font-bold">Parque Ecol\xF3gico</h3> <p class="mt-2 text-sm text-gray-600">Acceso a reserva privada, desayuno local y puentes colgantes.</p> <p class="mt-2 text-xl font-extrabold text-emerald-700">\u20A122.000</p> </article> </div> </section>   <section class="bg-emerald-900/8 py-14" id="booking"> <div class="mx-auto max-w-6xl rounded-3xl bg-white p-6 sm:p-10 shadow-xl ring-1 ring-gray-200"> <h2 class="text-2xl font-bold text-emerald-900">Asegur\xE1 tu espacio hoy</h2> <p class="mt-1 text-gray-600">Cupos limitados. Complet\xE1 tus datos y te contactamos para confirmar tu aventura.</p> <form id="booking-form" class="mt-6 space-y-4" onsubmit="submitBooking(event)"> <!-- Fila 1: Origen, Punto de recogida, Fecha --> <div class="grid gap-4 sm:grid-cols-3"> <label class="block"> <span class="text-sm font-semibold text-slate-700">Origen</span> <select id="origen" required class="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2"> <option value="">Seleccion\xE1 origen</option> <option>San Jos\xE9</option> <option>Lim\xF3n (Caribbean)</option> </select> </label> <label class="block"> <span class="text-sm font-semibold text-slate-700">Punto de recogida</span> <select id="parada" required class="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2"> <option value="">Seleccion\xE1 parada</option> <option>Teatro Nacional</option> <option>Real Cariari</option> <option>Alajuela - Parque del Agricultor</option> <option>Lim\xF3n Centro</option> <option>Siquirres</option> <option>Gu\xE1piles</option> </select> </label> <label class="block"> <span class="text-sm font-semibold text-slate-700">Fecha</span> <input id="date" type="date" required class="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2"> </label> </div> <!-- Fila 2: Nombre, Pax, Contacto --> <div class="grid gap-4 sm:grid-cols-3"> <label class="block"> <span class="text-sm font-semibold text-slate-700">Nombre</span> <input id="name" type="text" required class="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2" placeholder="Tu nombre completo"> </label> <label class="block"> <span class="text-sm font-semibold text-slate-700">Pax</span> <input id="pax" type="number" min="1" required class="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2" placeholder="Cantidad de personas"> </label> <label class="block"> <span class="text-sm font-semibold text-slate-700">Contacto (WhatsApp o Email)</span> <input id="contact" type="text" required class="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2" placeholder="WhatsApp o Email"> </label> </div> <!-- Observaci\xF3n --> <label class="block"> <span class="text-sm font-semibold text-slate-700">Observaci\xF3n</span> <textarea id="note" rows="3" class="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2" placeholder="Cualquier detalle extra (opcional)"></textarea> </label> <!-- Submit --> <div class="flex flex-wrap items-center gap-4 pt-2"> <button type="submit" class="rounded-full bg-emerald-700 px-8 py-3 text-sm font-bold uppercase tracking-wider text-white hover:bg-emerald-800">
Reservar mi campo ahora
</button> <span class="text-sm text-gray-500">Garant\xEDa AfortunadosCR - cancelaci\xF3n gratuita hasta 48h antes</span> </div> <p id="booking-message" class="hidden text-sm text-emerald-700"></p> </form> </div> </section> <script>
  // Los botones del hero ahora hacen scroll al formulario
  function openBookingModal() {
    const form = document.getElementById('booking-form');
    form.scrollIntoView({ behavior: 'smooth', block: 'center' });
    document.getElementById('name').focus();
  }

  async function submitBooking(event) {
    event.preventDefault();

    const name    = document.getElementById('name').value.trim();
    const pax     = document.getElementById('pax').value.trim();
    const date    = document.getElementById('date').value;
    const contact = document.getElementById('contact').value.trim();
    const note    = document.getElementById('note').value.trim();
    const origen  = document.getElementById('origen').value;
    const parada  = document.getElementById('parada').value;

    // 1\uFE0F\u20E3 Email via Web3Forms
    try {
      const formData = new FormData();
      formData.append('access_key', 'd73cf947-d5ec-4f22-bb99-8ed7593c08b8');
      formData.append('subject', 'Nueva Reserva - AfortunadosCR');
      formData.append('Nombre', name);
      formData.append('Pax', pax);
      formData.append('Fecha', date);
      formData.append('Origen', origen);
      formData.append('Parada', parada);
      formData.append('Contacto', contact);
      formData.append('Observacion', note || 'Ninguna');

      const res  = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: formData });
      const data = await res.json();

      // Diagn\xF3stico temporal
      alert('Respuesta Web3Forms: ' + JSON.stringify(data));
    } catch (err) {
      console.error('Error al enviar email:', err);
    }

    // 2\uFE0F\u20E3 WhatsApp
    const msg =
      \`Nueva reserva\\nNombre: \${name}\\nPax: \${pax}\\nFecha: \${date}\\nOrigen: \${origen}\\nParada: \${parada}\\nContacto: \${contact}\\nObservaci\xF3n: \${note || 'Ninguna'}\`;
    window.open('https://wa.me/50684597077?text=' + encodeURIComponent(msg), '_blank');

    // 3\uFE0F\u20E3 Confirmaci\xF3n
    const msgEl = document.getElementById('booking-message');
    msgEl.innerText = '\u2705 Solicitud enviada correctamente. Te contactamos en breve.';
    msgEl.classList.remove('hidden');
    document.getElementById('booking-form').reset();
  }
<\/script>  <div id="booking-modal" class="fixed inset-0 z-50 hidden items-center justify-center bg-black/45 p-4"> <div class="w-full max-w-xl rounded-2xl bg-white p-6 shadow-2xl"> <div class="mb-4 flex items-center justify-between border-b pb-2"> <h3 class="text-xl font-bold text-slate-800">Reservar Tour</h3> <button onclick="closeBookingModal()" class="text-slate-500 hover:text-slate-800">Cerrar \u2715</button> </div> <form id="booking-form" class="space-y-4" onsubmit="submitBooking(event)"> <label class="block"> <span class="mb-1 block text-sm font-semibold text-slate-700">Nombre</span> <input id="name" type="text" required class="w-full rounded-lg border border-gray-300 px-3 py-2" placeholder="Tu nombre completo"> </label> <label class="block"> <span class="mb-1 block text-sm font-semibold text-slate-700">Pax</span> <input id="pax" type="number" min="1" required class="w-full rounded-lg border border-gray-300 px-3 py-2" placeholder="Cantidad de personas"> </label> <label class="block"> <span class="mb-1 block text-sm font-semibold text-slate-700">Fecha</span> <input id="date" type="date" required class="w-full rounded-lg border border-gray-300 px-3 py-2"> </label> <label class="block"> <span class="mb-1 block text-sm font-semibold text-slate-700">Contacto (WhatsApp o Email)</span> <input id="contact" type="text" required class="w-full rounded-lg border border-gray-300 px-3 py-2" placeholder="Ingrese WhatsApp o Email"> </label> <label class="block"> <span class="mb-1 block text-sm font-semibold text-slate-700">Observaci\xF3n</span> <textarea id="note" rows="3" class="w-full rounded-lg border border-gray-300 px-3 py-2" placeholder="Cualquier detalle extra"></textarea> </label> <button type="submit" class="w-full rounded-full bg-emerald-700 px-4 py-3 text-sm font-bold uppercase tracking-wider text-white hover:bg-emerald-800">Enviar solicitud</button> </form> <p id="booking-message" class="mt-3 text-sm text-emerald-700 hidden"></p> </div> </div> <script>
    function openBookingModal() {
      document.getElementById('booking-modal').classList.remove('hidden');
    }

    function closeBookingModal() {
      document.getElementById('booking-modal').classList.add('hidden');
      const message = document.getElementById('booking-message');
      message.classList.add('hidden');
      message.innerText = '';
    }

    function submitBooking(event) {
      event.preventDefault();
      const name = document.getElementById('name').value.trim();
      const pax = document.getElementById('pax').value.trim();
      const date = document.getElementById('date').value;
      const contact = document.getElementById('contact').value.trim();
      const note = document.getElementById('note').value.trim();

      if (!name || !pax || !date || !contact) {
        alert('Por favor, complete todos los campos requeridos.');
        return;
      }

      const messageContent = \`Nueva reserva\\nNombre: \${name}\\nPax: \${pax}\\nFecha: \${date}\\nContacto: \${contact}\\nObservaci\xF3n: \${note}\`;
      const whatsappBase = 'https://wa.me/50684597077?text=' + encodeURIComponent(messageContent);
      window.open(whatsappBase, '_blank');

      const message = document.getElementById('booking-message');
      message.innerText = 'Solicitud enviada correctamente. Te contactamos en breve.';
      message.classList.remove('hidden');
      document.getElementById('booking-form').reset();
    }

    document.addEventListener('click', function (event) {
      const modal = document.getElementById('booking-modal');
      const dialog = modal?.querySelector('.w-full');
      const openBtn = document.getElementById('open-booking-hero');
      const openBtn2 = document.getElementById('open-booking-cta');
      if (!modal || modal.classList.contains('hidden')) return;
      if (event.target === modal && !dialog?.contains(event.target)) {
        closeBookingModal();
      }
    });
  <\/script> `, " "], [" ", "  ", `<section class="relative w-full min-h-screen pt-20 md:pt-0 md:h-screen"> <div class="grid h-full grid-cols-1 md:grid-cols-12"> <!-- Carrusel: ocupa 8/12 columnas en md+, full height, sin padding para cubrir todo el hero --> <div class="md:col-span-8 relative h-[60vh] md:h-full w-full overflow-hidden bg-gray-800"> <div id="hero-carousel" class="absolute inset-0"> <img src="https://cdn.arenalcloud.com/arenal-a65b6eb9-29d7-4dec-9784-b1b37ff7dfce-afortunados/foto1_6b9e60f3.jpeg" alt="slide-1" class="hero-slide absolute inset-0 h-full w-full object-cover"> <img src="https://cdn.arenalcloud.com/arenal-a65b6eb9-29d7-4dec-9784-b1b37ff7dfce-afortunados/foto2_19b1729d.jpeg" alt="slide-2" class="hero-slide absolute inset-0 h-full w-full object-cover"> <img src="https://cdn.arenalcloud.com/arenal-a65b6eb9-29d7-4dec-9784-b1b37ff7dfce-afortunados/foto3_2fd5c8f6.jpeg" alt="slide-3" class="hero-slide absolute inset-0 h-full w-full object-cover"> </div> <!-- overlay oscuro para legibilidad --> <div class="absolute inset-0 bg-black/45"></div> <!-- Contenido del hero encima del carrusel (con margen interno para no pegar al borde) --> <div class="relative z-10 flex h-full items-center"> <div class="p-8 md:p-12 text-white max-w-3xl"> <span class="inline-block rounded-full bg-amber-500 px-4 py-1 text-xs uppercase tracking-wider">Precio de lanzamiento</span> <h1 class="mt-6 text-3xl font-black leading-tight sm:text-4xl md:text-5xl">Tu escape perfecto a La Fortuna</h1> <p class="mt-4 text-lg font-semibold text-emerald-200">Sin manejar, sin estr\xE9s, todo incluido. Transporte, tour, comida y experiencia premium en un solo paquete.</p> <div class="mt-8 flex flex-wrap items-center gap-4"> <a id="open-booking-hero" href="#booking" class="rounded-full bg-emerald-600 px-6 py-3 text-sm font-bold uppercase tracking-wider transition hover:bg-emerald-700">Reservar mi campo ahora</a> <span class="text-sm text-gray-200">Inversi\xF3n total \u20A145.000</span> </div> </div> </div> </div> <!-- Video vertical: ocupa 4/12 columnas. En small screens se apila debajo. --> <div class="md:col-span-4 flex items-center justify-center p-4 md:p-10"> <div class="w-full max-w-[420px] h-[75vh] md:h-full"> <video id="hero-vertical-video" playsinline muted autoplay loop class="h-full w-full rounded-2xl object-cover shadow-xl"> <source src="https://cdn.arenalcloud.com/arenal-a65b6eb9-29d7-4dec-9784-b1b37ff7dfce-afortunados/WhatsApp_Video_2026-03-12_at_12.45.19_AM_d17ad804.mp4" type="video/mp4">
Tu navegador no soporta video.
</video> </div> </div> </div> <!-- JS simple para autoplay/transition del carrusel --> <script>
      (function () {
        const slides = Array.from(document.querySelectorAll('#hero-carousel .hero-slide'));
        if (!slides.length) return;
        slides.forEach((s, i) => {
          s.style.transition = 'opacity 800ms ease';
          s.style.opacity = i === 0 ? '1' : '0';
          s.style.willChange = 'opacity';
        });
        let idx = 0;
        setInterval(() => {
          slides[idx].style.opacity = '0';
          idx = (idx + 1) % slides.length;
          slides[idx].style.opacity = '1';
        }, 4200);
      })();
    <\/script> </section>  <section class="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8"> <h2 class="text-center text-3xl font-bold uppercase tracking-widest text-gray-800">Eleg\xED tu origen</h2> <p class="mt-2 text-center text-gray-500">Salida desde los principales puntos de Costa Rica con recogida incluida.</p> <div class="mt-8 grid gap-6 md:grid-cols-2"> <article class="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-100"> <h3 class="text-xl font-bold text-emerald-700">San Jos\xE9</h3> <p class="mt-2 text-sm text-gray-600">Punto c\xF3modo frente al Teatro Nacional. Incluye traslados desde puntos clave.</p> <ul class="mt-4 space-y-2 text-sm text-gray-600"> <li>Teatro Nacional (05:00 AM)</li> <li>Real Cariari (05:20 AM)</li> <li>Alajuela - Rostipollos Aeropuerto, Fabrica de licores, Cruce de Grecia, Naranjo y San Ram\xF3n )</li> </ul> </article> <article class="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-100"> <h3 class="text-xl font-bold text-emerald-700">Lim\xF3n (Caribbean)</h3> <p class="mt-2 text-sm text-gray-600">Salida desde terminales del Caribe, con ruta directa hacia La Fortuna.</p> <ul class="mt-4 space-y-2 text-sm text-gray-600"> <li>Lim\xF3n Centro (06:30 AM)</li> <li>Siquirres (07:30 AM)</li> <li>Gu\xE1piles (08:20 AM)</li> </ul> </article> </div> </section>  <section class="bg-slate-50 py-14"> <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"> <h2 class="text-center text-3xl font-bold uppercase tracking-widest text-gray-800">Un d\xEDa dise\xF1ado para el placer absoluto</h2> <p class="mt-2 text-center text-gray-500">Olvidate del reloj. Nosotros nos encargamos de que cada minuto sea memorable.</p> <div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"> <div class="rounded-2xl bg-white p-5 text-center shadow-md"> <p class="text-lg font-bold text-emerald-700">05:00 AM</p> <p class="mt-2 text-sm text-gray-500">VIP Trip - Transporte privado hacia La Fortuna.</p> </div> <div class="rounded-2xl bg-white p-5 text-center shadow-md"> <p class="text-lg font-bold text-emerald-700">09:30 AM</p> <p class="mt-2 text-sm text-gray-500">Super Breakfast - Desayuno local al borde del volc\xE1n.</p> </div> <div class="rounded-2xl bg-white p-5 text-center shadow-md"> <p class="text-lg font-bold text-emerald-700">10:30 AM</p> <p class="mt-2 text-sm text-gray-500">Relax/Adventure - Piscinas termales + paseo natural.</p> </div> <div class="rounded-2xl bg-white p-5 text-center shadow-md"> <p class="text-lg font-bold text-emerald-700">11:30 AM</p> <p class="mt-2 text-sm text-gray-500">Happy Hour en Licores, Estacion de cafe y bebidas gratis.</p> </div> </div> <div class="mt-6 grid gap-4 sm:grid-cols-2"> <div class="rounded-2xl bg-white p-5 text-center shadow-md"> <p class="text-lg font-bold text-emerald-700">12:30 PM</p> <p class="mt-2 text-sm text-gray-500">Almuerzo Buffet.</p> </div> <div class="rounded-2xl bg-white p-5 text-center shadow-md"> <p class="text-lg font-bold text-emerald-700">05:30 PM</p> <p class="mt-2 text-sm text-gray-500">Return Trip - Regreso con snacks y puntos de descanso.</p> </div> </div> </div> </section>  <section class="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8"> <h2 class="text-center text-3xl font-bold uppercase tracking-widest text-gray-800">Elev\xE1 tu experiencia</h2> <p class="mt-2 text-center text-gray-500">Actividades premium con gu\xEDa local y log\xEDstica 100% incluida.</p> <div class="mt-8 grid gap-6 md:grid-cols-3"> <article class="rounded-2xl bg-white p-5 shadow-lg ring-1 ring-gray-100"> <div class="h-40 rounded-lg bg-[url('https://cdn.arenalcloud.com/arenal-a65b6eb9-29d7-4dec-9784-b1b37ff7dfce-afortunados/canopy-pic_e68a4499.jpg')] bg-cover bg-center"></div> <h3 class="mt-4 text-lg font-bold">Canopy</h3> <p class="mt-2 text-sm text-gray-600">Vuelo entre las copas del bosque con seguro y fotos pro.</p> <p class="mt-2 text-xl font-extrabold text-emerald-700">\u20A135.000</p> </article> <article class="rounded-2xl bg-white p-5 shadow-lg ring-1 ring-gray-100"> <div class="h-40 rounded-lg bg-[url('https://cdn.arenalcloud.com/arenal-a65b6eb9-29d7-4dec-9784-b1b37ff7dfce-afortunados/cabalgata__1__f01d99a8.jpg')] bg-cover bg-center"></div> <h3 class="mt-4 text-lg font-bold">Cabalgata</h3> <p class="mt-2 text-sm text-gray-600">Recorrido privado por senderos volc\xE1nicos y finca tradicional.</p> <p class="mt-2 text-xl font-extrabold text-emerald-700">\u20A135.000</p> </article> <article class="rounded-2xl bg-white p-5 shadow-lg ring-1 ring-gray-100"> <div class="h-40 rounded-lg bg-[url('https://cdn.arenalcloud.com/arenal-a65b6eb9-29d7-4dec-9784-b1b37ff7dfce-afortunados/1-3-1_8131b7ae.webp')] bg-cover bg-center"></div> <h3 class="mt-4 text-lg font-bold">Parque Ecol\xF3gico</h3> <p class="mt-2 text-sm text-gray-600">Acceso a reserva privada, desayuno local y puentes colgantes.</p> <p class="mt-2 text-xl font-extrabold text-emerald-700">\u20A122.000</p> </article> </div> </section>   <section class="bg-emerald-900/8 py-14" id="booking"> <div class="mx-auto max-w-6xl rounded-3xl bg-white p-6 sm:p-10 shadow-xl ring-1 ring-gray-200"> <h2 class="text-2xl font-bold text-emerald-900">Asegur\xE1 tu espacio hoy</h2> <p class="mt-1 text-gray-600">Cupos limitados. Complet\xE1 tus datos y te contactamos para confirmar tu aventura.</p> <form id="booking-form" class="mt-6 space-y-4" onsubmit="submitBooking(event)"> <!-- Fila 1: Origen, Punto de recogida, Fecha --> <div class="grid gap-4 sm:grid-cols-3"> <label class="block"> <span class="text-sm font-semibold text-slate-700">Origen</span> <select id="origen" required class="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2"> <option value="">Seleccion\xE1 origen</option> <option>San Jos\xE9</option> <option>Lim\xF3n (Caribbean)</option> </select> </label> <label class="block"> <span class="text-sm font-semibold text-slate-700">Punto de recogida</span> <select id="parada" required class="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2"> <option value="">Seleccion\xE1 parada</option> <option>Teatro Nacional</option> <option>Real Cariari</option> <option>Alajuela - Parque del Agricultor</option> <option>Lim\xF3n Centro</option> <option>Siquirres</option> <option>Gu\xE1piles</option> </select> </label> <label class="block"> <span class="text-sm font-semibold text-slate-700">Fecha</span> <input id="date" type="date" required class="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2"> </label> </div> <!-- Fila 2: Nombre, Pax, Contacto --> <div class="grid gap-4 sm:grid-cols-3"> <label class="block"> <span class="text-sm font-semibold text-slate-700">Nombre</span> <input id="name" type="text" required class="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2" placeholder="Tu nombre completo"> </label> <label class="block"> <span class="text-sm font-semibold text-slate-700">Pax</span> <input id="pax" type="number" min="1" required class="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2" placeholder="Cantidad de personas"> </label> <label class="block"> <span class="text-sm font-semibold text-slate-700">Contacto (WhatsApp o Email)</span> <input id="contact" type="text" required class="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2" placeholder="WhatsApp o Email"> </label> </div> <!-- Observaci\xF3n --> <label class="block"> <span class="text-sm font-semibold text-slate-700">Observaci\xF3n</span> <textarea id="note" rows="3" class="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2" placeholder="Cualquier detalle extra (opcional)"></textarea> </label> <!-- Submit --> <div class="flex flex-wrap items-center gap-4 pt-2"> <button type="submit" class="rounded-full bg-emerald-700 px-8 py-3 text-sm font-bold uppercase tracking-wider text-white hover:bg-emerald-800">
Reservar mi campo ahora
</button> <span class="text-sm text-gray-500">Garant\xEDa AfortunadosCR - cancelaci\xF3n gratuita hasta 48h antes</span> </div> <p id="booking-message" class="hidden text-sm text-emerald-700"></p> </form> </div> </section> <script>
  // Los botones del hero ahora hacen scroll al formulario
  function openBookingModal() {
    const form = document.getElementById('booking-form');
    form.scrollIntoView({ behavior: 'smooth', block: 'center' });
    document.getElementById('name').focus();
  }

  async function submitBooking(event) {
    event.preventDefault();

    const name    = document.getElementById('name').value.trim();
    const pax     = document.getElementById('pax').value.trim();
    const date    = document.getElementById('date').value;
    const contact = document.getElementById('contact').value.trim();
    const note    = document.getElementById('note').value.trim();
    const origen  = document.getElementById('origen').value;
    const parada  = document.getElementById('parada').value;

    // 1\uFE0F\u20E3 Email via Web3Forms
    try {
      const formData = new FormData();
      formData.append('access_key', 'd73cf947-d5ec-4f22-bb99-8ed7593c08b8');
      formData.append('subject', 'Nueva Reserva - AfortunadosCR');
      formData.append('Nombre', name);
      formData.append('Pax', pax);
      formData.append('Fecha', date);
      formData.append('Origen', origen);
      formData.append('Parada', parada);
      formData.append('Contacto', contact);
      formData.append('Observacion', note || 'Ninguna');

      const res  = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: formData });
      const data = await res.json();

      // Diagn\xF3stico temporal
      alert('Respuesta Web3Forms: ' + JSON.stringify(data));
    } catch (err) {
      console.error('Error al enviar email:', err);
    }

    // 2\uFE0F\u20E3 WhatsApp
    const msg =
      \\\`Nueva reserva\\\\nNombre: \\\${name}\\\\nPax: \\\${pax}\\\\nFecha: \\\${date}\\\\nOrigen: \\\${origen}\\\\nParada: \\\${parada}\\\\nContacto: \\\${contact}\\\\nObservaci\xF3n: \\\${note || 'Ninguna'}\\\`;
    window.open('https://wa.me/50684597077?text=' + encodeURIComponent(msg), '_blank');

    // 3\uFE0F\u20E3 Confirmaci\xF3n
    const msgEl = document.getElementById('booking-message');
    msgEl.innerText = '\u2705 Solicitud enviada correctamente. Te contactamos en breve.';
    msgEl.classList.remove('hidden');
    document.getElementById('booking-form').reset();
  }
<\/script>  <div id="booking-modal" class="fixed inset-0 z-50 hidden items-center justify-center bg-black/45 p-4"> <div class="w-full max-w-xl rounded-2xl bg-white p-6 shadow-2xl"> <div class="mb-4 flex items-center justify-between border-b pb-2"> <h3 class="text-xl font-bold text-slate-800">Reservar Tour</h3> <button onclick="closeBookingModal()" class="text-slate-500 hover:text-slate-800">Cerrar \u2715</button> </div> <form id="booking-form" class="space-y-4" onsubmit="submitBooking(event)"> <label class="block"> <span class="mb-1 block text-sm font-semibold text-slate-700">Nombre</span> <input id="name" type="text" required class="w-full rounded-lg border border-gray-300 px-3 py-2" placeholder="Tu nombre completo"> </label> <label class="block"> <span class="mb-1 block text-sm font-semibold text-slate-700">Pax</span> <input id="pax" type="number" min="1" required class="w-full rounded-lg border border-gray-300 px-3 py-2" placeholder="Cantidad de personas"> </label> <label class="block"> <span class="mb-1 block text-sm font-semibold text-slate-700">Fecha</span> <input id="date" type="date" required class="w-full rounded-lg border border-gray-300 px-3 py-2"> </label> <label class="block"> <span class="mb-1 block text-sm font-semibold text-slate-700">Contacto (WhatsApp o Email)</span> <input id="contact" type="text" required class="w-full rounded-lg border border-gray-300 px-3 py-2" placeholder="Ingrese WhatsApp o Email"> </label> <label class="block"> <span class="mb-1 block text-sm font-semibold text-slate-700">Observaci\xF3n</span> <textarea id="note" rows="3" class="w-full rounded-lg border border-gray-300 px-3 py-2" placeholder="Cualquier detalle extra"></textarea> </label> <button type="submit" class="w-full rounded-full bg-emerald-700 px-4 py-3 text-sm font-bold uppercase tracking-wider text-white hover:bg-emerald-800">Enviar solicitud</button> </form> <p id="booking-message" class="mt-3 text-sm text-emerald-700 hidden"></p> </div> </div> <script>
    function openBookingModal() {
      document.getElementById('booking-modal').classList.remove('hidden');
    }

    function closeBookingModal() {
      document.getElementById('booking-modal').classList.add('hidden');
      const message = document.getElementById('booking-message');
      message.classList.add('hidden');
      message.innerText = '';
    }

    function submitBooking(event) {
      event.preventDefault();
      const name = document.getElementById('name').value.trim();
      const pax = document.getElementById('pax').value.trim();
      const date = document.getElementById('date').value;
      const contact = document.getElementById('contact').value.trim();
      const note = document.getElementById('note').value.trim();

      if (!name || !pax || !date || !contact) {
        alert('Por favor, complete todos los campos requeridos.');
        return;
      }

      const messageContent = \\\`Nueva reserva\\\\nNombre: \\\${name}\\\\nPax: \\\${pax}\\\\nFecha: \\\${date}\\\\nContacto: \\\${contact}\\\\nObservaci\xF3n: \\\${note}\\\`;
      const whatsappBase = 'https://wa.me/50684597077?text=' + encodeURIComponent(messageContent);
      window.open(whatsappBase, '_blank');

      const message = document.getElementById('booking-message');
      message.innerText = 'Solicitud enviada correctamente. Te contactamos en breve.';
      message.classList.remove('hidden');
      document.getElementById('booking-form').reset();
    }

    document.addEventListener('click', function (event) {
      const modal = document.getElementById('booking-modal');
      const dialog = modal?.querySelector('.w-full');
      const openBtn = document.getElementById('open-booking-hero');
      const openBtn2 = document.getElementById('open-booking-cta');
      if (!modal || modal.classList.contains('hidden')) return;
      if (event.target === modal && !dialog?.contains(event.target)) {
        closeBookingModal();
      }
    });
  <\/script> `, " "])), renderComponent($$result2, "Header", $$Header, {}), maybeRenderHead(), renderComponent($$result2, "Footer", $$Footer, {})) })}`;
}, "C:/Users/gamer/Documents/GitHub/afortuna2new/src/pages/resetafortunados.astro", void 0);

const $$file = "C:/Users/gamer/Documents/GitHub/afortuna2new/src/pages/resetafortunados.astro";
const $$url = "/resetafortunados";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Resetafortunados,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
