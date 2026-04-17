import { c as createComponent, m as maybeRenderHead, e as addAttribute, d as renderTemplate } from './astro/server_0zlbAbnM.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { w as whatsapp } from './Hreflang_CRzrx2EL.mjs';
/* empty css                        */

const $$WhatsAppButton = createComponent(($$result, $$props, $$slots) => {
  const phoneNumber = "50684597077";
  const whatsappUrl = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=Hola%20Afortunados%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20sus%20servicios.`;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(whatsappUrl, "href")} target="_blank" rel="noopener noreferrer" class="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg transition-all duration-300 hover:scale-110 animate-pulse overflow-hidden" aria-label="Contactar por WhatsApp" title="¿Necesitas ayuda? Contacta con nosotros por WhatsApp" data-astro-cid-iehx2mtc> <img${addAttribute(whatsapp.src, "src")} alt="WhatsApp" class="w-full h-full object-cover" data-astro-cid-iehx2mtc> </a> `;
}, "C:/Users/gamer/Documents/GitHub/afortuna2new/src/components/WhatsAppButton.astro", void 0);

export { $$WhatsAppButton as $ };
