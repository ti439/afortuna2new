// Resuelve imágenes referenciadas desde los JSON de datos y las optimiza a webp.
// Una referencia puede ser una URL remota (dominios en astro.config `image.domains`)
// o una ruta relativa a src/assets (ej. "intimidad.jpg", "villas/IMG_1703.jpg").
import type { ImageMetadata } from "astro";
import { getImage, inferRemoteSize } from "astro:assets";

const assets = import.meta.glob<{ default: ImageMetadata }>("../assets/**/*.{jpg,jpeg,JPG,png,webp}", { eager: true });

const remoteSizes = new Map<string, Promise<{ width: number; height: number }>>();

/** Dimensiones de salida que respetan la proporción original sin agrandar la imagen. */
export async function fitSize(src: string | ImageMetadata, maxWidth: number) {
  let original: { width: number; height: number };
  if (typeof src === "string") {
    if (!remoteSizes.has(src)) remoteSizes.set(src, inferRemoteSize(src));
    original = await remoteSizes.get(src)!;
  } else {
    original = src;
  }
  const width = Math.min(maxWidth, original.width);
  return { width, height: Math.round((original.height * width) / original.width) };
}

export function resolveImage(ref: string): string | ImageMetadata {
  if (/^https?:\/\//.test(ref)) return ref;
  const local = assets[`../assets/${ref}`];
  if (!local) throw new Error(`Imagen no encontrada en src/assets: ${ref}`);
  return local.default;
}

export async function optimizedSrc(ref: string, maxWidth = 1280) {
  const src = resolveImage(ref);
  const img = await getImage({ src, ...(await fitSize(src, maxWidth)), format: "webp" });
  return img.src;
}

export interface GalleryItem {
  src: string;
  alt?: string;
}

/** Devuelve las fotos listas para PhotoCarrusel: { src, thumb, alt }. */
export function gallery(items: GalleryItem[], maxWidth = 1280) {
  return Promise.all(
    items.map(async ({ src, alt = "" }) => ({
      src: await optimizedSrc(src, maxWidth),
      thumb: await optimizedSrc(src, 240),
      alt,
    }))
  );
}
