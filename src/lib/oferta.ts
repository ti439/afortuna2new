// Datos y enlace de WhatsApp de la landing /sueno-dorado-oferta.
import data from "../Data/oferta_suenodorado.json";

export const oferta = data;

/** Enlace de WhatsApp con el mensaje de la oferta ya escrito. */
export const waLink = `https://wa.me/${data.whatsapp.telefono}?text=${encodeURIComponent(data.whatsapp.mensaje)}`;

/** Preguntas con respuesta confirmada; las marcadas como pendientes no se publican. */
export const faqPublicadas = data.faq.filter((f) => !("pendiente" in f && f.pendiente) && f.respuesta);
