import { g as createAstro, c as createComponent, m as maybeRenderHead, e as addAttribute, h as renderSlot, d as renderTemplate } from './astro/server_0zlbAbnM.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro = createAstro("https://afortunadoscr.com");
const $$Modal = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Modal;
  const { id, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<dialog${addAttribute(id, "id")} class="backdrop:bg-black/40 rounded-lg p-6 w-full max-w-xl"> <h2 class="text-xl font-bold mb-4">${title}</h2> <div> ${renderSlot($$result, $$slots["default"])} </div> <form method="dialog" class="mt-6 text-right"> <button class="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400 transition">
Cerrar
</button> </form> </dialog>`;
}, "C:/Users/gamer/Documents/GitHub/afortuna2new/src/components/Modal.astro", void 0);

export { $$Modal as $ };
