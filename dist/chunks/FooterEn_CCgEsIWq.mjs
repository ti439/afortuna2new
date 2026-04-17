import { c as createComponent, m as maybeRenderHead, f as renderComponent, d as renderTemplate } from './astro/server_0zlbAbnM.mjs';
import 'kleur/colors';
import 'html-escaper';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_Cf83jt-1.mjs';
import { l as logoAF, f as facebook, i as instagram } from './instagram_IP5ew6ej.mjs';
import { w as whatsapp } from './Hreflang_CRzrx2EL.mjs';

const $$FooterEn = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer id="Footer" class="bg-[#4c4c4c] text-white py-12 px-6"> <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10"> <!-- Logo and social --> <div class="col-span-1 space-y-4"> <a href="#index" class="block"> ${renderComponent($$result, "Image", $$Image, { "src": logoAF, "alt": "Afortunados logo", "class": "w-[150px] object-contain" })} </a> <h3 class="text-lg font-semibold text-white">Follow us</h3> <div class="flex gap-4"> <a href="https://www.facebook.com/Afortunadoscr/" class="p-2 rounded-full text-[#879996] hover:scale-110 transition"> ${renderComponent($$result, "Image", $$Image, { "src": facebook, "alt": "Facebook" })} </a> <a href="https://www.instagram.com/afortunadoscr/" class="p-2 rounded-full text-[#879996] hover:scale-110 transition"> ${renderComponent($$result, "Image", $$Image, { "src": instagram, "alt": "Instagram" })} </a> <a href="https://wa.me/50684597077" onclick="return gtagSendEvent(this.href, this.target)" class="p-2 rounded-full text-[#879996] hover:scale-110 transition"> ${renderComponent($$result, "Image", $$Image, { "src": whatsapp, "alt": "WhatsApp" })} </a> </div> </div> <!-- Links --> <div class="col-span-4 grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm"> <div> <h4 class="font-semibold mb-3">Hotels</h4> <ul class="space-y-2"> <li><a href="/en/suenodorado" class="hover:underline">Hotel Sueño Dorado</a></li> <li><a href="/en/lafortuna-downtown" class="hover:underline">Downtown La Fortuna Boutique Hotel</a></li> <li><a href="/en/monte-real" class="hover:underline">Monte Real</a></li> <li><a href="/en/cascadadefuego" class="hover:underline">Hotel Catarata Resort</a></li> </ul> </div> <div> <h4 class="font-semibold mb-3">Villas</h4> <ul class="space-y-2"> <li><a href="/ecovilla" class="hover:underline">Eco Village</a></li> </ul> </div> </div> </div> <!-- Bottom line --> <div class="mt-12 text-center text-sm text-white/80">
© ${(/* @__PURE__ */ new Date()).getFullYear()} Afortunados. All rights reserved.
</div> <div>
Developed by <a href="https://www.innovalinkcr.com">InnovaLinkCR</a> </div> </footer>`;
}, "C:/Users/gamer/Documents/GitHub/afortuna2new/src/components/en/FooterEn.astro", void 0);

export { $$FooterEn as $ };
