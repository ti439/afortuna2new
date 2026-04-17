import { c as createComponent, m as maybeRenderHead, f as renderComponent, d as renderTemplate } from './astro/server_0zlbAbnM.mjs';
import 'kleur/colors';
import 'html-escaper';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_Cf83jt-1.mjs';
import { l as logoAF, f as facebook, i as instagram } from './instagram_IP5ew6ej.mjs';
import { w as whatsapp } from './Hreflang_CRzrx2EL.mjs';

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer id="Footer" class="bg-[#4c4c4c] text-white py-12 px-6"> <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10"> <!-- Logo y redes --> <div class="col-span-1 space-y-4"> <a href="#index" class="block"> ${renderComponent($$result, "Image", $$Image, { "src": logoAF, "alt": "Logo de Afortunados", "class": "w-[150px] object-contain" })} </a> <h3 class="text-lg font-semibold text-white">Síguenos</h3> <div class="flex gap-4"> <a href="https://www.facebook.com/Afortunadoscr/" class="p-2 rounded-full text-[#879996] hover:scale-110 transition"> ${renderComponent($$result, "Image", $$Image, { "src": facebook, "alt": "Facebook" })} </a> <a href="https://www.instagram.com/afortunadoscr/" class="p-2 rounded-full text-[#879996] hover:scale-110 transition"> ${renderComponent($$result, "Image", $$Image, { "src": instagram, "alt": "instagram" })} </a> <a href="https://wa.me/50684597077" onclick="return gtagSendEvent(this.href, this.target)" class="p-2 rounded-full text-[#879996] hover:scale-110 transition"> ${renderComponent($$result, "Image", $$Image, { "src": whatsapp, "alt": "whatsapp" })} </a> </div> </div> <!-- Enlaces --> <div class="col-span-4 grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm"> <div> <h4 class="font-semibold mb-3">Experiencias</h4> <ul class="space-y-2"> <li><a href="/tours" class="hover:underline">Tours & Experiencias</a></li> <li><a href="/suenodorado" class="hover:underline">Termales</a></li> <!-- <li><a href="#" class="hover:underline">Transportes</a></li>
          <li><a href="#" class="hover:underline">Cultural</a></li>
          <li><a href="#" class="hover:underline">Aventuras</a></li>
          <li><a href="#" class="hover:underline">Naturaleza</a></li>
          <li><a href="#" class="hover:underline">Servicios de Spa</a></li>
          <li><a href="#" class="hover:underline">Culinarios</a></li>
          <li><a href="#" class="hover:underline">Yoga</a></li> --> </ul> </div> <div> <h4 class="font-semibold mb-3">Hospedajes</h4> <ul class="space-y-2"> <li><a href="/suenodorado" class="hover:underline">Hotel Sueño Dorado</a></li> <li><a href="/lafortuna-downtown" class="hover:underline">Downtown La Fortuna Boutique Hotel</a></li> <li><a href="/monte-real" class="hover:underline">Monte Real</a></li> <li><a href="/cascadadefuego" class="hover:underline">Hotel Cascada de Fuego</a></li> </ul> </div> <div> <h4 class="font-semibold mb-3">Villas</h4> <ul class="space-y-2"> <li><a href="/ecovilla" class="hover:underline">Eco Village</a></li> <!-- <li><a href="#" class="hover:underline">Aventura</a></li>
          <li><a href="#" class="hover:underline">Romántico</a></li>
          <li><a href="#" class="hover:underline">Wildlife</a></li>
          <li><a href="#" class="hover:underline">Nature</a></li> --> </ul> </div> <!-- <div>
        <h4 class="font-semibold mb-3">Internacional</h4>
        <ul class="space-y-2">
          <li><a href="#" class="hover:underline">Todo incluido</a></li>
          <li><a href="#" class="hover:underline">Aventura</a></li>
          <li><a href="#" class="hover:underline">Romántico</a></li>
          <li><a href="#" class="hover:underline">Wildlife</a></li>
          <li><a href="#" class="hover:underline">Nature</a></li>
        </ul>
      </div> --> </div> </div> <!-- Línea inferior --> <div class="mt-12 text-center text-sm text-white/80">
© ${(/* @__PURE__ */ new Date()).getFullYear()} Afortunados. Todos los derechos reservados.
</div> <div>
Desarrollado por <a href="https://www.innovalinkcr.com">InnovaLinkCR</a> </div> </footer>`;
}, "C:/Users/gamer/Documents/GitHub/afortuna2new/src/components/Footer.astro", void 0);

export { $$Footer as $ };
