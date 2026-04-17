import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';

function ImageCarousel({ images = [] }) {
  const [index, setIndex] = useState(0);
  const total = images.length;
  if (total === 0) return null;
  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);
  return /* @__PURE__ */ jsxs("div", { style: { position: "relative", width: "100%", overflow: "hidden", borderRadius: "0.75rem", backgroundColor: "#f3f4f6", aspectRatio: "16/9" }, children: [
    images.map((img, i) => /* @__PURE__ */ jsx(
      "img",
      {
        src: img.src,
        alt: img.alt || `Imagen ${i + 1}`,
        style: {
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: i === index ? 1 : 0,
          zIndex: 1,
          transition: "opacity 0.5s ease"
        }
      },
      img.src
    )),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: prev,
        "aria-label": "Anterior",
        style: {
          position: "absolute",
          top: "50%",
          left: "1rem",
          transform: "translateY(-50%)",
          zIndex: 10,
          background: "rgba(0,0,0,0.5)",
          border: "none",
          borderRadius: "50%",
          padding: "0.5rem",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        },
        children: /* @__PURE__ */ jsx("svg", { width: "24", height: "24", fill: "none", stroke: "white", strokeWidth: "2", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15 19l-7-7 7-7" }) })
      }
    ),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: next,
        "aria-label": "Siguiente",
        style: {
          position: "absolute",
          top: "50%",
          right: "1rem",
          transform: "translateY(-50%)",
          zIndex: 10,
          background: "rgba(0,0,0,0.5)",
          border: "none",
          borderRadius: "50%",
          padding: "0.5rem",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        },
        children: /* @__PURE__ */ jsx("svg", { width: "24", height: "24", fill: "none", stroke: "white", strokeWidth: "2", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 5l7 7-7 7" }) })
      }
    ),
    /* @__PURE__ */ jsx("div", { style: { position: "absolute", bottom: "0.75rem", left: "50%", transform: "translateX(-50%)", display: "flex", gap: "0.5rem", zIndex: 10 }, children: images.map((_, i) => /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => setIndex(i),
        style: {
          width: i === index ? "0.75rem" : "0.5rem",
          height: i === index ? "0.75rem" : "0.5rem",
          borderRadius: "50%",
          background: i === index ? "white" : "rgba(255,255,255,0.5)",
          border: "none",
          cursor: "pointer",
          transition: "all 0.2s",
          padding: 0
        }
      },
      i
    )) })
  ] });
}

export { ImageCarousel as I };
