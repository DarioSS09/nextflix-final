import { Serie } from "../interfaces/serie.interface";

const API = process.env.NEXT_PUBLIC_API_URL;

// =========================
// GET SERIES
// =========================
export const getSeries = async (): Promise<Serie[]> => {
  try {
    const res = await fetch(`${API}/series`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Error al obtener series");
    }

    const data = await res.json();

    // 🔥 MAPEO (CLAVE)
    return data.map((item: any) => ({
      id: String(item.id),
      title: item.titulo,
      genre: item.genero,
      synopsis: item.sinopsis,
      image: item.urlPortada,
    }));

  } catch (error) {
    console.error("GET SERIES ERROR:", error);
    return [];
  }
};

// =========================
// CREATE SERIE
// =========================
export const createSerie = async (data: Omit<Serie, "id">) => {
  try {
    const payload = {
      titulo: data.title,
      genero: data.genre,
      sinopsis: data.synopsis,
      urlPortada: data.image,

      estreno: 2024,
      calificacion: 8,
      plataforma: "Netflix",
    };

    console.log("PAYLOAD:", payload);

    const res = await fetch(`${API}/series`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const text = await res.text();
    console.log("RESPUESTA:", text);

    if (!res.ok) {
      throw new Error(text);
    }

    return JSON.parse(text);

  } catch (error) {
    console.error("CREATE ERROR:", error);
    throw error;
  }
};

// =========================
// DELETE SERIE
// =========================
export const deleteSerie = async (id: string) => {
  try {
    const res = await fetch(`${API}/series/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      throw new Error("Error al eliminar serie");
    }
  } catch (error) {
    console.error("DELETE ERROR:", error);
  }
};