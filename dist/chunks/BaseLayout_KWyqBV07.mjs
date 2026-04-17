import { g as createAstro, c as createComponent, d as renderTemplate, f as renderComponent, h as renderSlot, r as renderHead } from './astro/server_0zlbAbnM.mjs';
import 'kleur/colors';
import 'html-escaper';
/* empty css                         */
import { $ as $$Hreflang } from './Hreflang_CRzrx2EL.mjs';
import { $ as $$WhatsAppButton } from './WhatsAppButton_BFdYwW_-.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://afortunadoscr.com");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title = "Hotel Sue\xF1o Dorado" } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description" content="Hotel Sue\xF1o Dorado en La Fortuna, Costa Rica. Termales, confort y naturaleza."><title>', "</title>", '<script>\n      function gtagSendEvent(url, target) {\n        var isBlank = target === "_blank";\n        var navigate = function () {\n          if (!isBlank && typeof url === "string") {\n            window.location = url;\n          }\n        };\n        if (typeof gtag === "function") {\n          gtag("event", "conversion_event_outbound_click", {\n            event_callback: navigate,\n            event_timeout: 2000,\n          });\n          return !isBlank;\n        }\n        navigate();\n        return !isBlank;\n      }\n    <\/script>', '</head> <body class="bg-white text-gray-800 font-sans antialiased"> ', " ", " </body></html>"])), title, renderComponent($$result, "Hreflang", $$Hreflang, {}), renderHead(), renderSlot($$result, $$slots["default"]), renderComponent($$result, "WhatsAppButton", $$WhatsAppButton, {}));
}, "C:/Users/gamer/Documents/GitHub/afortuna2new/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
