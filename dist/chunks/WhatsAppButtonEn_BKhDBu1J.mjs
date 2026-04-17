import { c as createComponent, m as maybeRenderHead, e as addAttribute, d as renderTemplate } from './astro/server_0zlbAbnM.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { w as whatsapp } from './Hreflang_CRzrx2EL.mjs';
/* empty css                          */

const $$WhatsAppButtonEn = createComponent(($$result, $$props, $$slots) => {
  const phoneNumber = "50684597077";
  const whatsappUrl = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=Hello%20Afortunados%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services.`;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(whatsappUrl, "href")} target="_blank" rel="noopener noreferrer" class="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg transition-all duration-300 hover:scale-110 animate-pulse overflow-hidden" aria-label="Contact on WhatsApp" title="Need help? Contact us on WhatsApp" data-astro-cid-lu3iktyv> <img${addAttribute(whatsapp.src, "src")} alt="WhatsApp" class="w-full h-full object-cover" data-astro-cid-lu3iktyv> </a> `;
}, "C:/Users/gamer/Documents/GitHub/afortuna2new/src/components/en/WhatsAppButtonEn.astro", void 0);

export { $$WhatsAppButtonEn as $ };
