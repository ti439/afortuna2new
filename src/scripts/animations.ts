// Animaciones GSAP declarativas por atributos data-*:
//   data-hero / data-hero-item  → entrada escalonada del hero al cargar
//   data-hero-bg                → parallax suave de la imagen del hero
//   data-anim="fade-up"         → aparece subiendo al entrar en pantalla
//   data-anim="stagger"         → sus hijos directos aparecen en secuencia
//   data-anim="reveal"          → imagen que se descubre con un leve zoom
//   data-count="4.9"            → contador numérico, admite decimales (el HTML ya trae el valor final)
// Con prefers-reduced-motion todo queda estático y visible.
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const root = document.documentElement;
const START = "top 85%";

function heroIntro() {
  const items = gsap.utils.toArray<HTMLElement>("[data-hero-item]");
  if (!items.length) return;
  gsap.set(items, { autoAlpha: 0, y: 32 });
  root.classList.remove("anim-hero");
  gsap.to(items, { autoAlpha: 1, y: 0, duration: 0.9, ease: "power3.out", stagger: 0.12, delay: 0.1 });
}

function heroParallax() {
  gsap.utils.toArray<HTMLElement>("[data-hero-bg]").forEach((img) => {
    gsap.fromTo(
      img,
      { yPercent: 0, scale: 1.12 },
      {
        yPercent: 12,
        scale: 1.12,
        ease: "none",
        scrollTrigger: { trigger: img.parentElement, start: "top top", end: "bottom top", scrub: true },
      }
    );
  });
}

function fadeUp() {
  gsap.utils.toArray<HTMLElement>('[data-anim="fade-up"]').forEach((el) => {
    gsap.from(el, {
      autoAlpha: 0,
      y: 40,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: { trigger: el, start: START, once: true },
    });
  });
}

function stagger() {
  gsap.utils.toArray<HTMLElement>('[data-anim="stagger"]').forEach((group) => {
    gsap.from(group.children, {
      autoAlpha: 0,
      y: 48,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.15,
      scrollTrigger: { trigger: group, start: START, once: true },
    });
  });
}

function reveal() {
  gsap.utils.toArray<HTMLElement>('[data-anim="reveal"]').forEach((el) => {
    const img = el.querySelector("img");
    const tl = gsap.timeline({ scrollTrigger: { trigger: el, start: START, once: true } });
    tl.from(el, { clipPath: "inset(12% 12% 12% 12% round 0.75rem)", autoAlpha: 0, duration: 1, ease: "power3.out" });
    if (img) tl.from(img, { scale: 1.25, duration: 1.4, ease: "power3.out" }, 0);
  });
}

function counters() {
  gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
    const raw = el.dataset.count ?? "0";
    const target = Number(raw);
    const decimals = raw.split(".")[1]?.length ?? 0;
    const format = new Intl.NumberFormat(root.lang === "en" ? "en-US" : "es-CR", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
    const value = { n: 0 };
    el.textContent = format.format(0);
    gsap.to(value, {
      n: target,
      duration: 1.8,
      ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 90%", once: true },
      onUpdate: () => {
        el.textContent = format.format(value.n);
      },
    });
  });
}

const mm = gsap.matchMedia();
mm.add("(prefers-reduced-motion: no-preference)", () => {
  heroIntro();
  heroParallax();
  fadeUp();
  stagger();
  reveal();
  counters();
});
mm.add("(prefers-reduced-motion: reduce)", () => {
  root.classList.remove("anim-hero");
});

// Las imágenes lazy cambian la altura de la página: recalcular posiciones al terminar de cargar
window.addEventListener("load", () => ScrollTrigger.refresh());
