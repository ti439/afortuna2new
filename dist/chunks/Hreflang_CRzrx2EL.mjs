import { g as createAstro, c as createComponent, e as addAttribute, d as renderTemplate } from './astro/server_0zlbAbnM.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const whatsapp = new Proxy({"src":"/_astro/whatsapp.BtCgz4Tn.png","width":512,"height":512,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/gamer/Documents/GitHub/afortuna2new/src/assets/whatsapp.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/gamer/Documents/GitHub/afortuna2new/src/assets/whatsapp.png");
							return target[name];
						}
					});

const $$Astro = createAstro("https://afortunadoscr.com");
const $$Hreflang = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Hreflang;
  const pathname = Astro2.url?.pathname ?? "/";
  const basePath = pathname.replace(/^\/en(\/|$)/, "/");
  const esPath = basePath;
  const enPath = basePath === "/" ? "/en" : `/en${basePath}`;
  const esHref = `https://afortunadoscr.com${esPath}`;
  const enHref = `https://afortunadoscr.com${enPath}`;
  const xDefaultHref = "https://afortunadoscr.com/";
  return renderTemplate`<link rel="alternate" hreflang="es"${addAttribute(esHref, "href")}><link rel="alternate" hreflang="en"${addAttribute(enHref, "href")}><link rel="alternate" hreflang="x-default"${addAttribute(xDefaultHref, "href")}>`;
}, "C:/Users/gamer/Documents/GitHub/afortuna2new/src/components/seo/Hreflang.astro", void 0);

export { $$Hreflang as $, whatsapp as w };
