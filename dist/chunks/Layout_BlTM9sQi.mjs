import { g as createAstro, c as createComponent, d as renderTemplate, f as renderComponent, h as renderSlot, r as renderHead, e as addAttribute } from './astro/server_0zlbAbnM.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Hreflang } from './Hreflang_CRzrx2EL.mjs';
import { $ as $$WhatsAppButton } from './WhatsAppButton_BFdYwW_-.mjs';
/* empty css                         */
/* empty css                         */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://afortunadoscr.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate(_a || (_a = __template(['<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/faviconA.png"><meta name="generator"', "><title>Afortunados - Pura Vida</title>", '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"><!-- Google tag (gtag.js) --><script async src="https://www.googletagmanager.com/gtag/js?id=G-N853T6J4E0"><\/script><script>\n      function gtagSendEvent(url, target) {\n        var isBlank = target === "_blank";\n        var navigate = function () {\n          if (!isBlank && typeof url === "string") {\n            window.location = url;\n          }\n        };\n        if (typeof gtag === "function") {\n          gtag("event", "conversion_event_outbound_click", {\n            event_callback: navigate,\n            event_timeout: 2000,\n          });\n          return !isBlank;\n        }\n        navigate();\n        return !isBlank;\n      }\n    <\/script>', "</head> <body data-astro-cid-sckkx6r4> ", " ", " </body></html>"])), addAttribute(Astro2.generator, "content"), renderComponent($$result, "Hreflang", $$Hreflang, { "data-astro-cid-sckkx6r4": true }), renderHead(), renderSlot($$result, $$slots["default"]), renderComponent($$result, "WhatsAppButton", $$WhatsAppButton, { "data-astro-cid-sckkx6r4": true }));
}, "C:/Users/gamer/Documents/GitHub/afortuna2new/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
