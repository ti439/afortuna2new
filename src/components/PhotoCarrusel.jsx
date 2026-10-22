import React, { useRef, useState } from "react";

const arrowStyle = (side) => ({
  position: "absolute",
  top: "50%",
  [side]: "1rem",
  transform: "translateY(-50%)",
  zIndex: 10,
  background: "rgba(0,0,0,0.5)",
  border: "none",
  borderRadius: "50%",
  padding: "0.5rem",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

/**
 * Carrusel de fotos accesible: flechas, puntos, teclado (← →) y swipe táctil.
 * images: [{ src, alt?, thumb? }]. Con `thumbnails` muestra una tira de miniaturas.
 */
export default function ImageCarousel({ images = [], thumbnails = false, label = "Galería de fotos" }) {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef(null);
  const total = images.length;

  if (total === 0) return null;

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  const onKeyDown = (e) => {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  };
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) (dx < 0 ? next : prev)();
    touchStartX.current = null;
  };

  return (
    <div>
      <div
        role="region"
        aria-roledescription="carrusel"
        aria-label={label}
        tabIndex={0}
        onKeyDown={onKeyDown}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        style={{ position: "relative", width: "100%", overflow: "hidden", borderRadius: "0.75rem", backgroundColor: "#f3f4f6", aspectRatio: "16/9" }}
      >
        {images.map((img, i) => (
          <img
            key={img.src + i}
            src={img.src}
            alt={img.alt || `Imagen ${i + 1} de ${total}`}
            loading={i === 0 ? "eager" : "lazy"}
            decoding="async"
            aria-hidden={i !== index}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: i === index ? 1 : 0,
              zIndex: 1,
              transition: "opacity 0.5s ease",
            }}
          />
        ))}

        {total > 1 && (
          <>
            <button type="button" onClick={prev} aria-label="Foto anterior" style={arrowStyle("left")}>
              <svg width="24" height="24" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button type="button" onClick={next} aria-label="Foto siguiente" style={arrowStyle("right")}>
              <svg width="24" height="24" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div style={{ position: "absolute", bottom: "0.75rem", left: "50%", transform: "translateX(-50%)", display: "flex", gap: "0.5rem", zIndex: 10 }}>
              {images.map((_, i) => (
                <button
                  type="button"
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Ver foto ${i + 1} de ${total}`}
                  aria-current={i === index}
                  style={{
                    width: i === index ? "0.75rem" : "0.5rem",
                    height: i === index ? "0.75rem" : "0.5rem",
                    borderRadius: "50%",
                    background: i === index ? "white" : "rgba(255,255,255,0.5)",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    padding: 0,
                  }}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {thumbnails && total > 1 && (
        <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.75rem", overflowX: "auto", paddingBottom: "0.25rem" }}>
          {images.map((img, i) => (
            <button
              type="button"
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Ver foto ${i + 1} de ${total}`}
              aria-current={i === index}
              style={{
                flex: "0 0 auto",
                width: "5rem",
                height: "3.5rem",
                padding: 0,
                borderRadius: "0.5rem",
                overflow: "hidden",
                cursor: "pointer",
                border: i === index ? "2px solid #d97706" : "2px solid transparent",
                opacity: i === index ? 1 : 0.7,
                transition: "opacity 0.2s, border-color 0.2s",
                background: "none",
              }}
            >
              <img src={img.thumb || img.src} alt="" loading="lazy" decoding="async" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
