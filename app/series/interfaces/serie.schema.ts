import * as v from "valibot";

export const serieSchema = v.object({
  title: v.pipe(
    v.string(),
    v.minLength(3, "El título debe tener al menos 3 caracteres")
  ),
  genre: v.pipe(
    v.string(),
    v.minLength(3, "El género debe tener al menos 3 caracteres")
  ),
  synopsis: v.pipe(
    v.string(),
    v.minLength(10, "La sinopsis debe ser más descriptiva")
  ),
  image: v.pipe(
    v.string(),
    v.url("Debe ser una URL válida")
  ),
});