import toursEs from "../Data/tours.json";
import toursEn from "../Data/tours_en.json";

export const slugify = (name: string) =>
  name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

type Tour = (typeof toursEs)[number] & { slug?: string };

/** Tours de un idioma con su slug y URL de detalle. */
export function getTours(lang: "es" | "en") {
  const list: Tour[] = lang === "en" ? toursEn : toursEs;
  const prefix = lang === "en" ? "/en/tours/" : "/tours/";
  return list.map((tour) => {
    const slug = tour.slug ?? slugify(tour.nombre);
    return { ...tour, slug, url: `${prefix}${slug}` };
  });
}
